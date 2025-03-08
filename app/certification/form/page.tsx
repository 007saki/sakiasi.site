

'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Select, Text, TextField } from '@radix-ui/themes'
import axios from 'axios'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { cerSchema } from '../../cerSchema'

type cert = z.infer<typeof cerSchema>

const Certificate = () => {
  const {register,handleSubmit,control,formState:{errors}} = useForm<cert>({
    resolver: zodResolver(cerSchema)
  })

  const onSubmit = async (data: cert) => {
    const formData = new FormData()
  
    formData.append('title', data.title)
    formData.append('start_time', `${data.start_time}:00.000Z`)
    formData.append('end_time', `${data.end_time}:00.000Z`)
    formData.append('status', data.status)
  
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement
  
    if (fileInput?.files?.[0]) {
      formData.append('image', fileInput.files[0])
    } else {
      alert('Please select an image')
      return
    }
  
    try {
      await axios.post('/api/certificate', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    } catch {
      alert('Error uploading certificate')
    }
  }
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=' items-center justify-center flex w-full h-screen'>
      <div className=' w-2/4 gap-5 flex flex-col'>

        <TextField.Root size={'3'} {...register('title')} variant='soft' placeholder='Enter Title' />
        {errors.title&& <Text color='red'>{errors.title.message}</Text> }

        <TextField.Root size={'3'} type='datetime-local' {...register('start_time')} variant='soft' placeholder='Start' />
        {errors.start_time&& <Text color='red'>{errors.start_time.message}</Text> }

        <TextField.Root size={'3'} type='datetime-local' {...register('end_time')} variant='soft' placeholder='End' />
        {errors.end_time&& <Text color='red'>{errors.end_time.message}</Text> }

        <Controller
          control={control}
          name='status'
          render={({field})=>(
            <Select.Root value={field.value} onValueChange={field.onChange} size={'3'} >
              <Select.Trigger variant='soft' radius='medium' placeholder='Select Status'/>
              <Select.Content>
                <Select.Item value='COMPLETE'>Complete</Select.Item>
                <Select.Item value='IN_PROGRESS'>In Progress</Select.Item>
              </Select.Content>
              {errors.status&& <Text color='red'>{errors.status.message}</Text> }
            </Select.Root>
          )}
        />

        <input accept='image/*' {...register('imageUrl')} type="file" />

        <Button type='submit'>Add Certification</Button>
      </div>
    </form>
  )
}

export default Certificate
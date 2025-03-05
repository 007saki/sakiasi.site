

'use client'
import { Button, Select, Text, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { cerSchema } from '../cerSchema'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'

type cert = z.infer<typeof cerSchema>

const Certificate = () => {
  const [error, setError] = useState('')
  const {register,handleSubmit,control,formState:{errors}} = useForm<cert>({
    resolver: zodResolver(cerSchema)
  })

  const onSubmit=async(data)=>{
    // console.log(data)
    try {
      await axios.post('/api/certificate',data)
    } catch (error) {
      setError(`${error}`)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=' items-center justify-center flex w-full h-screen'>
      <div className=' w-2/4 gap-5 flex flex-col'>
      
        <TextField.Root size={'3'} {...register('title')} variant='soft' placeholder='Enter Title' />
        {errors.title&& <Text color='red'>{errors.title.message}</Text> }

        <TextField.Root size={'3'} type='date' {...register('start_time')} variant='soft' placeholder='Start' />
        {errors.start_time&& <Text color='red'>{errors.start_time.message}</Text> }

        <TextField.Root size={'3'} type='date' {...register('end_time')} variant='soft' placeholder='End' />
        {errors.end_time&& <Text color='red'>{errors.end_time.message}</Text> }

        <Controller
          control={control}
          name='status'
          render={({field})=>(
            <Select.Root value={field.value} size={'3'} onValueChange={field.onChange}>
              <Select.Trigger variant='soft' radius='medium' placeholder='Select Status'/>
              <Select.Content>
                <Select.Item value='COMPLETE'>Complete</Select.Item>
                <Select.Item value='IN_PROGRESS'>In Progress</Select.Item>
              </Select.Content>
              {errors.status&& <Text color='red'>{errors.status.message}</Text> }
            </Select.Root>
          )}
        />
        
        <Button type='submit'>Add Certification</Button>
      </div>
    </form>
  )
}

export default Certificate
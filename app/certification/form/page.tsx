

'use client'
import { certificateSchema } from '@/app/cerSchema'
import { Button, Select, TextArea, TextField, Tooltip } from '@radix-ui/themes'
import {Controller, useForm} from 'react-hook-form'
import { z } from 'zod'

type certType = z.infer<typeof certificateSchema>

const CertificateForm = () => {

    const {register, handleSubmit, control} = useForm<certType>()

    const onSubmit=(data:certType)=>{
        console.log(data)
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center h-screen'>

        <div className='md:w-2/5 gap-3 flex flex-col'>

            <Tooltip content='Certificate Date'>
                <TextField.Root {...register('date')} size={'3'} color='purple' variant='soft' type='date' />
            </Tooltip>

            <TextField.Root {...register('institution')} size={'3'} color='purple' placeholder='Institution' variant='soft' type='text' />
            <TextField.Root {...register('qualificationType')} size={'3'} color='purple' placeholder='Qualification Type' variant='soft' type='text' />
            <Controller
            control={control}
            name='category'            
            render={({field}) =>
            <Select.Root value={field.value} onValueChange={field.onChange} size={'3'}>
                <Tooltip content='Certificate Category'>
                    <Select.Trigger color='purple' placeholder='Select Category...' />
                </Tooltip>
                <Select.Content  variant='soft'>
                    <Select.Group >
                        <Select.Label>Certificate Category</Select.Label>
                        <Select.Item value="WEB_DEVELOPMENT">Web Development</Select.Item>
                        <Select.Item value="CYBER_SECURITY">Cyber Security</Select.Item>
                        <Select.Item value="MOBILE_DEVELOPMENT">Mobile Development</Select.Item>
                        <Select.Item value="MACHINE_LEARNING">Machine Learning</Select.Item>
                        <Select.Item value="JAVASCRIPT">Javascript</Select.Item>
                        <Select.Item value="PYTHON">Python</Select.Item>
                        <Select.Item value="AI">AI</Select.Item>
                        <Select.Item value="UI_UX_DESIGN">UI & UX Design</Select.Item>
                    </Select.Group>
                </Select.Content>
            </Select.Root>}
            />

            <Controller
            control={control}
            name='status'
            render={({field})=>
            <Select.Root value={field.value} onValueChange={field.onChange} size={'3'}>
                <Tooltip content='Certificate Status'>
                    <Select.Trigger placeholder='Select Status...' />
                </Tooltip>
                <Select.Content variant='soft'>
                    <Select.Group>
                        <Select.Label>Certificate Status</Select.Label>
                        <Select.Item value="COMPLETE">Complete</Select.Item>
                        <Select.Item value="IN_PROGRESS">In Progress</Select.Item>
                    </Select.Group>
                </Select.Content>
            </Select.Root>}
            />
            <TextArea {...register('certificate_desc')} size={'3'} color='purple' placeholder='Enter Certificate Description' variant='soft'/>
            <TextField.Root {...register('name')} size={'3'} color='purple' placeholder='Enter Name' variant='soft' type='text'/>

            <input type="file"/>
        </div>
        <Button variant='soft' type='submit'>Save</Button>
    </form>
  )
}

export default CertificateForm
'use client'
import { certificateSchema } from '@/app/cerSchema'
import { Button, Select, TextField, Tooltip } from '@radix-ui/themes'
import "easymde/dist/easymde.min.css"
import { Controller, useForm } from 'react-hook-form'
import SimpleMDE from "react-simplemde-editor"
import { z } from 'zod'
import { useState } from 'react'
import axios from 'axios'

type certType = z.infer<typeof certificateSchema>

const CertificateForm = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm<certType>()
    const [loading, setLoading] = useState(false)

    const onSubmit = async (data: certType) => {
        setLoading(true)
        const formatData = {
            ...data,
            date: data.date ? new Date(data.date).toISOString() : undefined,
        }
        console.log(formatData)
        await axios.post('/api/certificate', formatData)
        setLoading(false)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center max-h-screen mt-20'>
            <div className='md:w-2/5 gap-3 flex flex-col'>
                <Tooltip content='Certificate Date'>
                    <TextField.Root {...register('date', { required: 'Date is required' })} size={'3'} color='purple' variant='soft' type='date' />
                </Tooltip>
                {errors.date && <span className="text-red-500">{errors.date.message}</span>}

                <TextField.Root {...register('institution', { required: 'Institution is required' })} size={'3'} color='purple' placeholder='Institution' variant='soft' type='text' />
                {errors.institution && <span className="text-red-500">{errors.institution.message}</span>}

                <TextField.Root {...register('qualificationType', { required: 'Qualification Type is required' })} size={'3'} color='purple' placeholder='Qualification Type' variant='soft' type='text' />
                {errors.qualificationType && <span className="text-red-500">{errors.qualificationType.message}</span>}

                <Controller
                    control={control}
                    name='category'
                    render={({ field }) =>
                        <Select.Root value={field.value} onValueChange={field.onChange} size={'3'}>
                            <Tooltip content='Certificate Category'>
                                <Select.Trigger color='purple' placeholder='Select Category...' />
                            </Tooltip>
                            <Select.Content variant='soft'>
                                <Select.Group>
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
                        </Select.Root>
                    }
                />

                <Controller
                    control={control}
                    name='status'
                    render={({ field }) =>
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
                        </Select.Root>
                    }
                />

                <Controller
                    control={control}
                    name="certificate_desc"
                    render={({ field }) => <SimpleMDE onChange={field.onChange} />}
                />

                <TextField.Root {...register('name', { required: 'Name is required' })} size={'3'} color='purple' placeholder='Enter Name' variant='soft' type='text' />
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}

                <input type="file"/>
            </div>
            <Button variant='soft' type='submit' disabled={loading}>
                {loading ? 'Saving...' : 'Save'}
            </Button>
        </form>
    )
}

export default CertificateForm
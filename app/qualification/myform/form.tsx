

'use client'
import { certificateSchema } from '@/app/cerSchema'
import { Button, Checkbox, Flex, Select, Text, TextField } from '@radix-ui/themes'
import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import {Controller, useForm} from 'react-hook-form'
import { z } from 'zod'
import "easymde/dist/easymde.min.css";
import dynamic from 'next/dynamic'
import { Certificate } from '@prisma/client'

const SimpleMDE=dynamic(()=>import('react-simplemde-editor'),{ssr:false})

type certType = z.infer<typeof certificateSchema>

const Form= ({cert}:{cert?:Certificate}) => {

    const { register, handleSubmit, control, formState: { errors } } = useForm<certType>({
        defaultValues: {
            certificate_id: cert?.certificate_id ?? '',
            date: cert?.date instanceof Date ? cert.date.toISOString().split('T')[0] : cert?.date ?? '',
            institution: cert?.institution ?? '',
            qualificationType: cert?.qualificationType ?? '',
            category: cert?.category ?? '',
            status: cert?.status ?? 'In Progress',
            certificate_desc: cert?.certificate_desc ?? '',
            name: cert?.name ?? '',
          }
    })
    
    const [status, setStatus] = useState<'Complete'|'In Progress'|string>('Complete')

    useEffect(()=>{
        if(cert){
            setStatus(cert?.status)
        }
    },[cert])

    const handleStatus=()=>{
        if(cert){
            setStatus(cert?.status==='Complete'?'Complete':'In Progress')
        }
        setStatus(status==='Complete'?'In Progress':'Complete')
    }

    const onSubmit=async(data:certType)=>{
        const formattedData = {
            ...data,
            date: new Date(data.date).toISOString(),
            status: status,
        }
        console.log(formattedData)
        try {
            const validation = certificateSchema.safeParse(formattedData)
            if(!validation.success){
                console.log(validation.error.errors)
            }
            if(!cert){
                const res = await axios.post('/api/qualification',formattedData)
                console.log(res.data)
                console.log(res.statusText)
                console.log('success')
            } else{
                const res = await axios.patch(`/api/qualification/${cert.id}`,formattedData)
                console.log(res.data)
                console.log(res.statusText)
                console.log('success')

            }

        } catch (error) {
            console.log(`Failed to post certificate information: ${error}`)
        }
    }    

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='p-2 flex items-center justify-center'>
        <div className='space-y-3 w-full p-2 md:w-2/5 flex flex-col '>
            {/* <TextField.Root {...register('date')} color='purple' type='date' variant='soft' size={'3'} /> */}
            {errors.date&&<Text>{errors.date?.message}</Text>}

            <TextField.Root {...register('institution')} color='purple' placeholder='Enter Institution' type='text' variant='soft' size={'3'} />
            {errors.institution&&<Text>{errors.institution?.message}</Text>}

            <Controller
            control={control}
            name='qualificationType'
            render={({field})=>
            <Select.Root value={field.value} onValueChange={field.onChange}>
                <Select.Trigger placeholder='Select Qualification Type'/>
                <Select.Content>
                    <Select.Item value='Professional Certificate'>Professional Certificate (e.g., PMP, CISSP, CPA, AWS Certified)</Select.Item>
                    <Select.Item value='High'>High School Diploma / Certificate</Select.Item>
                    <Select.Item value='Associate Degree'>Associate Degree</Select.Item>
                    <Select.Item value='Bachelor’s Degree'>Bachelor’s Degree (BA, BSc, BBA, etc.)</Select.Item>
                    <Select.Item value='Postgraduate Diploma'>Postgraduate Diploma (PGDip, PGCert)</Select.Item>
                    <Select.Item value='Master’s Degree'>Master’s Degree (MA, MSc, MBA, MEng, etc.)</Select.Item>
                    <Select.Item value='Doctorate / PhD'>Doctorate / PhD (Doctor of Philosophy)</Select.Item>
                    <Select.Item value='Diploma / Advanced Diploma'>Diploma / Advanced Diploma (e.g., Diploma in IT, Advanced Diploma in Business)</Select.Item>
                </Select.Content>
            </Select.Root>
            }/>
            {errors&&<Text>{errors.qualificationType?.message}</Text>}

            <Controller
            control={control}
            name='category'
            render={({field})=>
            <Select.Root value={field.value} onValueChange={field.onChange} >
                <Select.Trigger placeholder='Select Category'/>
                <Select.Content>
                    <Select.Item value='System Administration & IT Infrastructure'>System Administration & IT Infrastructure</Select.Item>
                    <Select.Item value='Mobile and Web Development'>Mobile and Web Development</Select.Item>
                    <Select.Item value='Professional Development'>Professional Development</Select.Item>
                    <Select.Item value='Cybersecurity'>Cybersecurity</Select.Item>
                    <Select.Item value='Cloud Computing & Hosting'>Cloud Computing & Hosting</Select.Item>
                    <Select.Item value='Database & Data Management'>Database & Data Management</Select.Item>
                    <Select.Item value='Networking & Network Security'>Networking & Network Security</Select.Item>
                    <Select.Item value='IT Project Management & Service Management'>IT Project Management & Service Management</Select.Item>
                    <Select.Item value='Digital Forensics & Investigation Tools'>Digital Forensics & Investigation Tools</Select.Item>
                </Select.Content>
            </Select.Root>
            }/>
            {errors&&<Text>{errors.category?.message}</Text>}

            <div className='flex flex-col gap-3'>
                <Flex className='items-center gap-2'>
                    <Checkbox onClick={handleStatus} checked={status==='Complete'?true:false} size={'3'} variant='soft' color='green'/>
                    Complete
                </Flex>
                <Flex className='items-center gap-2'>
                    <Checkbox onClick={handleStatus} checked={status==='In Progress'?true:false} size={'3'} {...register('status')} variant='soft' color='orange'  />
                    In Progress
                </Flex>
            </div>
            {errors&&<Text>{errors.status?.message}</Text>}

            <Controller
            control={control}
            name='certificate_desc'
            render={({field})=>
            <SimpleMDE {...field} />
            }/>
            {errors&&<Text>{errors.certificate_desc?.message}</Text>}

            <TextField.Root {...register('name')} variant='soft' color='purple' placeholder='Enter Name'/>
            <TextField.Root {...register('certificate_id')} variant='soft' color='purple' placeholder='Enter Google ID'/>
            { cert?
            <Button type='submit'>Update</Button>:
            <Button type='submit'>Submitted</Button>
            }
        </div>
    </form>
  )
}

export default Form
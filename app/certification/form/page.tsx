
'use client'
import { certificateSchema } from '@/app/cerSchema'
import { Button, TextField } from '@radix-ui/themes'
import axios from 'axios'
import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import { z } from 'zod'

type certType = z.infer<typeof certificateSchema>

const CertificateForm = () => {
    const {register, handleSubmit} = useForm<certType>()

    const [file, setFile] = useState<File|null>(null)

    const handleFileChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const file = e.target.files?.[0]
        if(file){
            setFile(file)
        }
    }

    const onSubmit=async(data:certType)=>{
        const formattedData = {
            ...data,
            date: new Date(data.date).toISOString(),
            name: file?.name
        }
        try {
            const res = await axios.post('/api/certificate',formattedData)
            console.log(res.data)
            console.log(res.statusText)
            console.log('success')
        } catch (error) {
            console.log(`Failed to post certificate information: ${error}`)
        }
        if(file){
            const fileData = new FormData()
            fileData.append('file',file)
            try {
                const response = await axios.post('/api/upload',fileData)
                console.log(response.data)
                console.log(response.statusText)
            } catch (error) {
                console.log(`Failed to post file: ${error}`)
            }
        }
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=' p-2 h-screen flex items-center justify-center'>
        <div className='space-y-3 w-full p-2 md:w-2/5'>
            <TextField.Root {...register('date')} color='purple' type='date' variant='soft' size={'3'} />
            <TextField.Root {...register('institution')} color='purple' placeholder='Enter Institution' type='text' variant='soft' size={'3'} />
            <TextField.Root {...register('qualificationType')} color='purple' placeholder='Enter Qualification Type' type='text' variant='soft' size={'3'} />
            <TextField.Root {...register('category')} color='purple' placeholder='Enter Category' type='text' variant='soft' size={'3'} />
            <TextField.Root {...register('status')} color='purple' placeholder='Enter Status' type='text' variant='soft' size={'3'} />
            <TextField.Root {...register('certificate_desc')} color='purple' placeholder='Enter Certificate Description' type='text' variant='soft' size={'3'} />
            <input onChange={handleFileChange} type="file" name="cert-file" id="cert-file" />
            <Button type='submit'>Submitted</Button>
        </div>
    </form>
  )
}

export default CertificateForm
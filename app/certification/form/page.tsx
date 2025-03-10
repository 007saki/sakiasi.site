

'use client'
import { Button, Callout, Radio, Select, Text, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import "easymde/dist/easymde.min.css";
import dynamic from 'next/dynamic';
import {Controller, useForm} from 'react-hook-form'
import { certType } from '../page';
import axios from 'axios';
import { IoInformationCircle } from 'react-icons/io5';

const SimpleMDE = dynamic(()=>import ('react-simplemde-editor'),{ssr:false})


const CertificateForm = () => {

    const [file, setFile] = useState<File|null>(null)
    const [fileMessage, setFileMessage] = useState<string|null>(null)
    const [status, setStatus] = useState<'Complete'|'In Progress'>('Complete')
    const [message, setMessage] = useState<null|string>(null)

    const {register, control,handleSubmit} = useForm<certType>()

    const handleFileChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const file = e.target.files?.[0] || null
        if(!file){setFileMessage('Please choose file first')}
        setFile(file)
    }

    const handleStatus=()=>{
        setStatus(status==='Complete'?'In Progress':'Complete')
    }

    const onSubmit=async(data:certType)=>{
        if(!file){
            setFileMessage('Please Select a file')
            return
        }
        else{
            const formattedData = {
                ...data,
                date: `${new Date(data.date).toISOString()}`,
                name: file.name,
            }
            try {
                const formData = new FormData()
                formData.append('file',file)

                await axios.post('/api/certificate',formattedData)
                await axios.post('/api/upload',formData)
                
                console.log('upload success')
                setMessage('Qualification created successfully!')
            // setMessage(`Qualification upload successful! Name:${resData.filePath}`)
            } catch (error) {
                setMessage(`Qualification upload failed: ${error}`)
            }
        }
    }

  return (
    
    <form onSubmit={handleSubmit(onSubmit)} className='flex items-center justify-center flex-col'>
        {message && 
            <Callout.Root>
            <Callout.Icon>
                <IoInformationCircle />
            </Callout.Icon>
            <Callout.Text>
                {message}
            </Callout.Text>
        </Callout.Root>
        }
        <div><Text className='text-2xl'>Certificate Form</Text></div>
        <div className='md:w-2/5 space-y-3 bg-zinc-100 p-3 rounded-md flex flex-col'>
            <TextField.Root {...register('date')} variant='soft' color='purple' size={'3'} type='date' placeholder='Enter Date'/>        
            <TextField.Root {...register('institution')} variant='soft' color='purple' size={'3'} type='text' placeholder='Enter Institution'/>        
            <div className='flex flex-col space-y-3'>
                <Controller
                control={control}
                name='qualificationType'
                render={({field})=>
                <Select.Root value={field.value!} onValueChange={field.onChange} size={'3'} defaultValue='select'>
                    <Select.Trigger variant='soft' color='purple'/>
                    <Select.Content variant='soft' color='purple'>
                        <Select.Item value='select'>Select Qualification Type</Select.Item>
                        <Select.Item value='certificate'>Primary Education Certificate</Select.Item>
                        <Select.Item value='Secondary Education Certificate'>Secondary Education Certificate</Select.Item>
                        <Select.Item value='Associate Degree'>Associate Degree (e.g., Associate of Arts - AA, Associate of Science - AS)</Select.Item>
                        <Select.Item value='Bachelor’s Degree'>Bachelor’s Degree (e.g., BA, BSc, BEng, LLB)</Select.Item>
                        <Select.Item value='Postgraduate Certificate'>Postgraduate Certificate/Diploma</Select.Item>
                        <Select.Item value='Master’s Degree'>Master’s Degree (e.g., MA, MSc, MBA, MEng)</Select.Item>
                        <Select.Item value='Doctorate '>Doctorate (Ph.D.)</Select.Item>
                        <Select.Item value='Honorary Degree'>Honorary Degree</Select.Item>
                    </Select.Content>
                </Select.Root>
                }/>

                <Controller
                control={control}
                name='category'
                render={({field})=>
                <Select.Root value={field.value} onValueChange={field.onChange} defaultValue='select' size={'3'}>
                    <Select.Trigger variant='soft' color='purple'/>
                    <Select.Content>
                        <Select.Item value='select'>Select Qualification Category</Select.Item>
                        <Select.Item value='AI & Machine Learning'>Artificial Intelligence (AI) & Machine Learning (ML)</Select.Item>
                        <Select.Item value='Networking & Cloud Computing'>Networking & Cloud Computing</Select.Item>
                        <Select.Item value='Cybersecurity & Ethical Hacking'>Cybersecurity & Ethical Hacking</Select.Item>
                        <Select.Item value='Data Science & Data Analytics'>Data Science & Data Analytics</Select.Item>
                        <Select.Item value='Software Development & Programming'>Software Development & Programming</Select.Item>
                        <Select.Item value='Web Development & UI/UX Design'>Web Development & UI/UX Design</Select.Item>
                        <Select.Item value='Database Management & Administration'>Database Management & Administration</Select.Item>
                        <Select.Item value='IT Support & Helpdesk'>IT Support & Helpdesk</Select.Item>
                        <Select.Item value='DevOps & IT Operations'>DevOps & IT Operations</Select.Item>
                        <Select.Item value='Blockchain & Cryptocurrency'>Blockchain & Cryptocurrency</Select.Item>
                        <Select.Item value='Internet of Things (IoT)'>Internet of Things (IoT)</Select.Item>
                        <Select.Item value='IT Project Management'>IT Project Management</Select.Item>
                        <Select.Item value='Game Development & Interactive Media'>Game Development & Interactive Media</Select.Item>
                    </Select.Content>
                </Select.Root>}
                />
            </div>
            <div className='flex flex-col gap-2 border p-2 rounded-md bg-purple-200'>
                <Text>Qualification Status</Text>
                <Text as='label' className='flex items-center gap-2'>
                    <Radio {...register('status')} onClick={handleStatus} checked={status==='Complete'?true:false} name='Complete' value='Complete'/>
                    Complete
                </Text>
                <Text as='label' className='flex items-center gap-2'>
                    <Radio onClick={handleStatus} {...register('status')} checked={status==='In Progress'?true:false} name='In_Progress' value='In Progress'/>
                    In Progress
                </Text>
            </div>
            <Controller
            control={control}
            name='certificate_desc'
            render={({field})=><SimpleMDE value={field.value!} onChange={field.onChange} placeholder='Enter Qualification Description'/>}/>

            <input onChange={handleFileChange} type="file" />
            {fileMessage&&<Text>{fileMessage}</Text>}
        </div>
            <Button type='submit' size={'3'} variant='soft' color='purple'>Submit</Button>
    </form>
  )
}

export default CertificateForm



'use client'
import { experienceSchema, experienceType } from '@/app/schema/experienceSchema';
import { Box, Button, Text, TextField } from '@radix-ui/themes'
import "easymde/dist/easymde.min.css";
import dynamic from 'next/dynamic'
import {Controller, useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useState } from 'react';
import ErrorMessage from '@/app/components/errorMessage';

const SimpleMDE = dynamic(()=>import ('react-simplemde-editor'),{ssr:false})


const ExpForm = () => {

    const [message, setMessage] = useState('')

    const {register,control, handleSubmit, formState:{errors}} = useForm<experienceType>({
        resolver: zodResolver(experienceSchema),
        mode: 'onChange'
    })

    const onSubmit=async(data:experienceType)=>{
        const formattedData = {
            ...data,
            startDate: new Date(data.startDate).toISOString(),
            endDate: data.endDate?new Date(data.endDate).toISOString():null
        }

        console.log(formattedData)        
        try {
            
            axios.post('/api/experience/',formattedData)
            setMessage('Experience was created successfully')
        } catch{
            setMessage('Failed to create experience')
        }
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center py-2'>
        <Box className=' md:w-3/5 py-10 space-y-5'>

            {message&&<ErrorMessage>{message}</ErrorMessage>}

            <TextField.Root {...register('position')} size='3' type='text' variant='soft' placeholder='Enter Position'/>
                {errors.position?.message && <Text color='red'>{errors.position?.message}</Text> }
            <TextField.Root {...register('company')} size='3' type='text' variant='soft' placeholder='Enter Company'/>
                {errors.company?.message && <Text color='red'>{errors.company?.message}</Text> }
            <TextField.Root {...register('startDate')} size='3' type='date' variant='soft' placeholder='Enter start date'/>
                {errors.startDate?.message && <Text color='red'>{errors.startDate?.message}</Text> }
            <TextField.Root {...register('endDate')} size='3' type='date' variant='soft' placeholder='Enter end date'/>
            {errors.endDate?.message && <Text color='red'>{errors.endDate?.message}</Text> }
            
            <Controller
            control={control}
            name='description'
            render={({field})=><SimpleMDE{...field}/>}
            />
            {errors.description?.message && <Text color='red'>{errors.description?.message}</Text> }

            <TextField.Root size='3' type='text' variant='soft' placeholder='Enter Employer Logo'/>
            {errors.employer_logo?.message && <Text color='red'>{errors.employer_logo?.message}</Text> }

            <TextField.Root size='3' type='text' variant='soft' placeholder='Enter Image ID'/>
            {errors.images?.message && <Text color='red'>{errors.images?.message}</Text> }

            <Button type='submit'>Submit</Button>
        </Box>
    </form>
  )
}

export default ExpForm
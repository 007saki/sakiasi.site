

'use client'
import ErrorMessage from '@/app/components/errorMessage';
import { experienceSchema, experienceType } from '@/app/schema/experienceSchema';
import { imageSchema, imageType } from '@/app/schema/imageSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Experience, Image } from '@prisma/client';
import { Box, Button, Text, TextField } from '@radix-ui/themes';
import axios from 'axios';
import "easymde/dist/easymde.min.css";
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

const SimpleMDE = dynamic(()=>import ('react-simplemde-editor'),{ssr:false})
const combinedSchema = z.intersection(experienceSchema,imageSchema)

const FormExperience = ({experience, image}:{experience?:Experience, image?:Image}) => {
    const router = useRouter()

    const [message, setMessage] = useState('')

    const {register,control, handleSubmit, formState:{errors}} = useForm<experienceType & imageType>({
        resolver: zodResolver(combinedSchema),
        mode: 'onChange',
        defaultValues:{
            company: experience?.company,
            description: experience?.description || '',
            employer_logo: experience?.employer_logo || '',
            startDate: experience?.startDate.toISOString().split('T')[0],
            endDate: experience?.endDate?experience?.endDate?.toISOString().split('T')[0] : '',
            position: experience?.position || '' ,
            google_id: image?.google_id || '',
            name: image?.name || '',
        },
    })

    const onSubmit=async(data:experienceType)=> {
        const formattedData = {
            ...data,
            startDate: new Date(data.startDate).toISOString(),
            endDate: data.endDate?new Date(data.endDate).toISOString():null
        }

        console.log(formattedData)

        if(experience){
            try {
                const response = await axios.patch(`/api/experience/${experience.id}`,formattedData)
                setMessage(`Experience was created successfully: ${response.data}`)
                router.push('/experience')
            } catch{
                setMessage('Failed to create experience')
            }
        } else {
            try {
                const response = await axios.post('/api/experience/',formattedData)
                setMessage(`Experience was created successfully: ${response.data}`)
                router.push('/experience')
            } catch{
                setMessage('Failed to create experience')
            }
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

            <TextField.Root {...register('employer_logo')} size='3' type='text' variant='soft' placeholder='Enter Employer Logo'/>
            {errors.employer_logo?.message && <Text color='red'>{errors.employer_logo?.message}</Text> }

            <TextField.Root {...register('name')} size='3' type='text' variant='soft' placeholder='Enter Image Name'/>
            <TextField.Root {...register('google_id')} size='3' type='text' variant='soft' placeholder='Enter Google Id'/>


            <Button type='submit'>Submit</Button>
        </Box>
    </form>
  )
}

export default FormExperience
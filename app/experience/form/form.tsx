


'use client'
import ErrorMessage from '@/app/components/errorMessage';
import { experienceSchema, experienceType } from '@/app/schema/experienceSchema';
import { imageSchema, imageType } from '@/app/schema/imageSchema';
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

export const combine = z.intersection(experienceSchema,imageSchema)

export type combineType = z.infer<typeof combine>
const ExperienceForm = ({experience, image}:{experience?:Experience, image?:Image}) => {

    const router = useRouter()
    const [message, setMessage] = useState('')

    const {register,control, handleSubmit, formState:{errors}} = useForm<experienceType & imageType>()

    const onSubmit=async(data:experienceType & imageType)=> {

        const formattedData = {
            ...data,
            startDate: new Date(data.startDate).toISOString(),
            endDate: data.endDate&&new Date(data.endDate).toISOString()
        }

        console.log(formattedData)

        if(experience){
            try {
                const response = await axios.patch(`/api/experience/${experience.id}`,formattedData)
                setMessage(`Experience was created successfully: ${response.data}`)
                console.log(`${response.data}`)
                router.push('/experience')
            } catch{
                setMessage('Failed to create experience')
                console.log('Fail to update')
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
            
            <TextField.Root defaultValue={experience?.position} {...register('position')} size='3' type='text' variant='soft' placeholder='Enter Position'/>
                {errors.position?.message && <Text color='red'>{errors.position?.message}</Text> }
            <TextField.Root defaultValue={experience?.company} {...register('company')} size='3' type='text' variant='soft' placeholder='Enter Company'/>
                {errors.company?.message && <Text color='red'>{errors.company?.message}</Text> }
            <TextField.Root defaultValue={experience?.department || ''} {...register('department')} size='3' type='text' variant='soft' placeholder='Enter Department'/>
            {errors.company?.message && <Text color='red'>{errors.company?.message}</Text> }
            <TextField.Root defaultValue={experience?.startDate.toISOString().split('T')[0]} {...register('startDate')} size='3' type='date' variant='soft' placeholder='Enter start date'/>
                {errors.startDate?.message && <Text color='red'>{errors.startDate?.message}</Text> }
            <TextField.Root defaultValue={experience?.endDate?.toISOString().split('T')[0]} {...register('endDate')} size='3' type='date' variant='soft' placeholder='Enter end date'/>
                {errors.endDate?.message && <Text color='red'>{errors.endDate?.message}</Text> }
            
            <Controller
            control={control}
            name='description'
            defaultValue={experience?.description}
            render={({field})=><SimpleMDE value={field.value!} />}
            />
            {errors.description?.message && <Text color='red'>{errors.description?.message}</Text> }

            <TextField.Root defaultValue={experience?.employer_logo || ''} {...register('employer_logo')} size='3' type='text' variant='soft' placeholder='Enter Employer Logo'/>
            {errors.employer_logo?.message && <Text color='red'>{errors.employer_logo?.message}</Text> }

            <TextField.Root defaultValue={image?.name} {...register('name')} size='3' type='text' variant='soft' placeholder='Enter Image Name'/>
            {errors.name?.message && <Text color='red'>{errors.name?.message}</Text> }

            <TextField.Root defaultValue={image?.google_id} {...register('google_id')} size='3' type='text' variant='soft' placeholder='Enter Google Id'/>
            {errors.google_id?.message && <Text color='red'>{errors.google_id?.message}</Text> }

            <Button type='submit'>Submit</Button>
        </Box>
    </form>
  )
}

export default ExperienceForm
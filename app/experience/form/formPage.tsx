


'use client'
import { experienceType } from '@/app/schema/experienceSchema'
import { Button, TextField } from '@radix-ui/themes'
import dynamic from 'next/dynamic'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import "easymde/dist/easymde.min.css";
import { Experience, Image } from '@prisma/client'
import { imageType } from '@/app/schema/imageSchema'

const SimpleMDE = dynamic(()=>import('react-simplemde-editor'),{ssr:false})

const ExperienceFormPage = ({experience, image}:{experience?:Experience, image?:Image}) => {

    const { register, control} = useForm<experienceType & imageType>()

  return (
    <form className='flex flex-col gap-3 p-5 justify-center items-center'>
        <div className='flex flex-col gap-3 w-3/5'>
            <TextField.Root defaultValue={experience?.position} size={'3'} color='purple' variant='soft' {...register('position')} type='text' placeholder='Enter Position' />
            <TextField.Root defaultValue={experience?.company} size={'3'} color='purple' variant='soft' {...register('company')} type='text' placeholder='Enter Company' />
            <TextField.Root defaultValue={experience?.department || undefined} size={'3'} color='purple' variant='soft' {...register('department')} type='text' placeholder='Enter Department' />
            <TextField.Root defaultValue={experience?.startDate.toISOString().split('T')[0]} size={'3'} color='purple' variant='soft' {...register('startDate')} type='date' placeholder='Enter Start Date' />
            <TextField.Root defaultValue={experience?.endDate!.toISOString().split('T')[0]} size={'3'} color='purple' variant='soft' {...register('endDate')} type='date' placeholder='Enter End Date' />

            <Controller
              control={control}
              name="description"
              defaultValue={experience?.description || undefined} // Ensure a fallback value
              render={({field})=><SimpleMDE {...field} />}
            />
            
            <TextField.Root defaultValue={experience?.employer_logo || ''} size={'3'} color='purple' variant='soft' {...register('employer_logo')} type='text' placeholder='Enter Logo ID' />

            <TextField.Root defaultValue={image?.name} size={'3'} color='purple' variant='soft' {...register('name')} type='text' placeholder='Enter company name' />
            <TextField.Root defaultValue={image?.google_id} size={'3'} color='purple' variant='soft' {...register('google_id')} type='text' placeholder='Enter google id' />

            <Button size={'3'} type='submit'>Submit</Button>
        </div>
    </form>
  )
}

export default ExperienceFormPage
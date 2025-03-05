

'use client'
import { Button, Select, TextField } from '@radix-ui/themes'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { cerSchema } from '../cerSchema'
import { zodResolver } from '@hookform/resolvers/zod'

type cert = z.infer<typeof cerSchema>

const Certificate = () => {

  const {register, handleSubmit, control} = useForm<cert>({
    resolver:zodResolver(cerSchema)
  })

  const onSubmit=(data)=>{
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full items-center flex flex-col justify-center h-screen gap-5'>
      <div className='w-3/4 gap-4 flex flex-col'>
        <TextField.Root size={'3'} {...register('title')} placeholder='Enter Title' />
        <TextField.Root type='date' size={'3'} {...register('start_time')} placeholder='End Time' />
        <TextField.Root type='date' size={'3'} {...register('end_time')} placeholder='End Time' />
        <Controller
        control={control}
        name='status'
        render={({field})=>(
          <Select.Root size='3' value={field.value} onValueChange={field.onChange} >
          <Select.Trigger placeholder='Enter Status'/>
          <Select.Content>
            <Select.Group >
              <Select.Item value='COMPLETE'>COMPLETE</Select.Item>
              <Select.Item value='IN_PROGRESS'>IN PROGRESS</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>
        )}
        />
        
      </div>
      <Button type='submit'>Submit</Button>
    </form>
  )
}

export default Certificate

'use client'
import { Button, Card, TextField } from '@radix-ui/themes';
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from 'zod';
import { cerSchema } from '../cerSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

export type myType = z.infer<typeof cerSchema>;

const Certificate = () => {

  const {register,handleSubmit} = useForm<myType>(
    {resolver:zodResolver(cerSchema)}
  )

  const onSubmit: SubmitHandler<myType> = async (data) => {
    const formattedData = {
        ...data,
        start_time: new Date(data.start_time + 'T00:00:00.000Z').toISOString(),
        end_time: new Date(data.end_time + 'T00:00:00.000Z').toISOString(),
    };

    console.log("Sending:", formattedData);  // See final data in console

    await axios.post('/api/certificate', formattedData);
};


  return (
    <form onSubmit={handleSubmit(onSubmit)} className='gap-5 flex flex-col items-center justify-center h-screen'>
      <Card className='p-4 w-1/4 grid gap-4'>
        <TextField.Root {...register('title')} placeholder='Enter Title' variant='soft' />
        <TextField.Root type='date'  {...register('start_time')} placeholder='Start Time' variant='soft' />
        <TextField.Root type='date'  {...register('end_time')} placeholder='End Time' variant='soft' />
        <TextField.Root {...register('status')} placeholder='Status' variant='soft' />
      </Card>
      <Button>Add Certificate</Button>
    </form>
  )
}



export default Certificate



'use client'
import { Button, TextField } from '@radix-ui/themes'
import axios from 'axios'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import "easymde/dist/easymde.min.css";

const SimpleMDE = dynamic(()=>import('react-simplemde-editor'),{ssr:false}) 

interface ExperienceProps {
    position: string;
    company: string;
    department?: string;
    startDate: string;
    endDate?: string;
    description?: string;
    employer_logo?: string;
    src: imageProps[];
}

interface imageProps{
    image: string
}

const ExperiencePage = () => {

    const { register, handleSubmit, control } = useForm<ExperienceProps>();
    
    const { append, fields } = useFieldArray<ExperienceProps>({
        control,
        name: 'src'
    });

    useEffect(() => {
        if (fields.length === 0) {
            append({image:''});
        }

    }, [fields.length, append]);

    const onSubmit = async (data: ExperienceProps) => {
        const formattedData = {
            ...data,
            startDate: new Date(data.startDate).toISOString(),
            endDate: data.endDate ? new Date(data.endDate).toISOString() : null,
        };
        console.log(JSON.stringify(formattedData,null,''))
        try {
            console.log('Posting data:', formattedData);
            const response = await axios.post('/api/experience', formattedData);
            console.log(response.data);
            console.log('Post success');
        } catch (error) {
            console.error('Failed to post', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 p-10'>
            <TextField.Root {...register('position')} size='3' placeholder='Enter Position' variant='soft' />
            <TextField.Root {...register('company')} size='3' placeholder='Enter Company' variant='soft' />
            <TextField.Root {...register('department')} size='3' placeholder='Enter Department' variant='soft' />
            <TextField.Root {...register('startDate')} size='3' type='date' placeholder='Enter Start Date' variant='soft' />
            <TextField.Root {...register('endDate')} size='3' type='date' placeholder='Enter End Date' variant='soft' />
            <Controller
            control={control}
            name='description'
            render={({field})=><SimpleMDE placeholder='Ender Description' {...field}/>}
            />
            <TextField.Root {...register('employer_logo')} size='3' placeholder='Logo URL' variant='soft' />
            
            <div className='flex flex-col gap-3'>
                {fields.map((field, index) => (
                    <TextField.Root 
                        key={field.id} 
                        {...register(`src.${index}` as const)} 
                        size='3' 
                        placeholder='Image URL' 
                        variant='soft' 
                    />
                ))}
                <Button onClick={() => append({image:''})} type='button'>Add Image</Button>
            </div>
            
            <Button type='submit'>Submit</Button>
        </form>
    );
};

export default ExperiencePage;

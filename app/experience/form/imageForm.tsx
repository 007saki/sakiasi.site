


import { TextField } from '@radix-ui/themes'
import React from 'react'

const ImageForm = () => {
  
  return (
    <div>
      <TextField.Root {...register('employer_logo')} size='3' type='text' variant='soft' placeholder='Enter Employer Logo'/>
      <TextField.Root {...register('employer_logo')} size='3' type='text' variant='soft' placeholder='Enter Employer Logo'/>
    </div>
  )
}

export default ImageForm
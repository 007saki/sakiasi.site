

'use client'
import React, { ChangeEvent, useState, } from 'react'
import axios from 'axios'

const Certificate = () => {
  const [title, setTitle] = useState('')
  
  const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
    const value = e.target.value
    setTitle(value)
  }
  
  const handleSubmit=async()=>{
    await axios.post('/api/certificate',title)
  }
  return (
    <div>
      <input className='border-solid border-black border rounded-b-lg' placeholder='Enter Title' onChange={handleChange} type="text" />
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Certificate
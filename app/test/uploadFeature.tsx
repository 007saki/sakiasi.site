
'use client'
import { Button, Text } from '@radix-ui/themes'
import axios from 'axios'
import React, { useState } from 'react'

const FileUpload = () => {
    const [file, setFile] = useState<File|null>(null)
    const [message, setMessage] = useState<string|null>(null)

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const thisFile = e.target.files?.[0] || null
        setFile(thisFile)
    }

    const handleUpload=async()=>{
        if(!file){
            setMessage('Please choose a file')
            return;
        }

        try {
            const formData= new FormData()
            formData.append('file',file)
            const response = await axios.post('/api/upload',formData,{
            headers:{'Content-Type':'multipart/form-data',}
            })
            setMessage(`Upload successful ! File path is at ${response.data.filePath}`)
        } catch (error) {
            setMessage(`Failed to upload: ${error}`)

        }
    }

  return (
    <div className='p-4 space-y-5'>
        <div><input type="file" onChange={handleChange} /></div>
        <div><Button onClick={handleUpload}>Upload</Button></div>
        <div>
            <p>File Name: {file?.name}</p>
            <p>File Last Modified: {file?.lastModified?new Date(file.lastModified).toString():null}</p>
            <p>File Size: {file?.size}</p>
            <p>File Type: {file?.type}</p>
        </div>
        <div>
            {message&& <Text>{message}</Text> }
        </div>
    </div>
  )
}

export default FileUpload
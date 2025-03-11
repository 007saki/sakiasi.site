

'use client'
import { Button } from '@radix-ui/themes'
import axios from 'axios'
import React, { useState } from 'react'

const FileUpload = () => {
    const [file, setFile] = useState<File|null>(null)

    const handleFile=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const file = e.target.files?.[0]
        if(!file) {return;}
        else{
            setFile(file)
        }
    }

    const handleSubmit=async()=>{      
        if(file){
            const fileData = new FormData()
            fileData.append('file',file)
            console.log(fileData)

            const res = await axios.post('/api/file', fileData )
            const response = res.data
            console.log(response)
        }
    }


  return (
    <div>
        <input type="file" onChange={handleFile} />
        <Button onClick={handleSubmit}>Submit</Button>
    </div>
  )
}

export default FileUpload
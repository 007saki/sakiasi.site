



import { prisma } from '@/prisma/client'
import React from 'react'

const QualificationDetails = async({params}:{params:Promise<{id:string}>}) => {
    const id = (await params).id

    const qualification = await prisma.certificate.findUnique({where:{id:(parseInt(id))}})

  return (
    <div>
        <p>Name: {qualification?.name}</p>
        <p>Category: {qualification?.category}</p>
        <p>Description: {qualification?.certificate_desc}</p>
    </div>
  )
}

export default QualificationDetails





import React from 'react'
import ExperienceForm from '../page'
import { prisma } from '@/prisma/client'
import { notFound } from 'next/navigation'

const ExperienceFormUpdate = async({params}:{params:Promise<{id:string}>}) => {
    const id = (await params).id
   const experience = await prisma.experience.findUnique({where:{id:(parseInt(id))}})
    
   if(!experience) return notFound();
   
  return (
    <div>
        <ExperienceForm experience={experience} />
    </div>
  )
}

export default ExperienceFormUpdate



import React from 'react'
import { prisma } from '@/prisma/client'
import { notFound } from 'next/navigation'
import FormExperience from '../form'

const ExperienceFormUpdate = async({params}:{params:Promise<{id:string}>}) => {

  const id = (await params).id

  const experience = await prisma.experience.findUnique({where:{id:(parseInt(id))}})
    
   if(!experience) return notFound();
   
  return (
    <div>
        <FormExperience experience={experience} />
    </div>
  )
}

export default ExperienceFormUpdate
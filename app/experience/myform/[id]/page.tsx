


import React from 'react'
import { prisma } from '@/prisma/client'
import { notFound } from 'next/navigation'
import FormExperience from '../page'

const ExperienceFormUpdate = async({params}:{params:Promise<{id:string}>}) => {

  const id = (await params).id

  const experience = await prisma.experience.findUnique({where:{id:(parseInt(id))}})
  const image = await prisma.image.findUnique({where:{id:(experience?.image_id? experience?.image_id : undefined)}})
    
   if(!experience) return notFound();
   if(!image) return notFound();
   
  return (
    <div>
        <FormExperience image={image} experience={experience} />
    </div>
  )
}

export default ExperienceFormUpdate
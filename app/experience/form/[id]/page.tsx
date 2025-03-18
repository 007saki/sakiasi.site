

import React from 'react'
import { prisma } from '@/prisma/client'
import { notFound } from 'next/navigation'
import ExperienceForm from '../form'


const ExperienceDetailsPage = async({params}:{params:Promise<{id:string}>}) => {

  const id = (await params).id
  if(!id) return notFound();

  const experience = await prisma.experience.findUnique({where:{id:(parseInt(id))}})
  if(!experience) return notFound();

  const image = await prisma.image.findUnique({where:{id:experience?.image_id || undefined}})
  if(!image) return notFound();


  return (
    <div>
        <p>test</p>
        <ExperienceForm experience={experience} image={image}/>
    </div>
  )

}

export default ExperienceDetailsPage;
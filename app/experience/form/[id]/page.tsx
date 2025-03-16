


import React from 'react'
import { prisma } from '@/prisma/client'
import { notFound } from 'next/navigation'
import ExperienceForm from '../form'

const ExperienceDetailsPage = async({params}:{params:Promise<{id:string}>}) => {

  const id = (await params).id
  if(!id) return notFound();

  const experience = await prisma.experience.findUnique({where:{id:(parseInt(id))},include:{image:true}})
  if(!experience) {return notFound()};

  return (
    <div>
        <ExperienceForm experience={experience}/>
    </div>
  )
}

export default ExperienceDetailsPage
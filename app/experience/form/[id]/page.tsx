



import { prisma } from '@/prisma/client'
import { notFound } from 'next/navigation'
import ExperienceFormPage from '../formPage'
// import ExperienceFormPage from '../formPage'

const ExperienceDetailsForm = async({params}:{params:Promise<{id:string}>}) => {
    const id = (await params).id

    const experience = await prisma.experience.findUnique({
      where:{id:(parseInt(id))},
      include:{image:true},
    })
    if(!experience) return notFound();

      // const image = await prisma.image.findUnique({where:{id:experience.image?.id}});
      // if(!image) return notFound();

  return (
    <div>
      {experience.company}
        <ExperienceFormPage experience={experience} image={experience.image||undefined}/>
    </div>
  )
}

export default ExperienceDetailsForm
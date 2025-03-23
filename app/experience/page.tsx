


import { prisma } from '@/prisma/client'
import { Box, Card, Flex, Text } from '@radix-ui/themes'
import Image from 'next/image'
import SlideShow from './slideShow';
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';

const ExperiencePage = async() => {

    const experiences = await prisma.experience.findMany({include:{image_to_experience:{include:{image:true}}}})
    if(!experiences) return notFound();

  return (
    <div className='flex flex-col gap-3 justify-center items-center p-5'>
        {experiences.map(experience =>
            <Box key={experience.id} className='mt-4'>
            <Card>
                <Flex gap="3" align="center">
                    <div>
                        <Image
                            height={50}
                            width={50}
                            alt='Logo'
                            style={{width:50,height:50}}
                            src={`${experience.employer_logo}`}
                        />
                    </div>
                    <div >
                        <Text as="div" size="2" weight="bold">
                            {experience.company}
                        </Text>
                        <Text as="div" size="2" color="gray">
                            {experience.department}
                        </Text>
                    </div>
                </Flex>
                <div className='border-b mb-5 mt-5'></div>
                <div className='prose'>
                    <Markdown>
                        {experience.description}
                    </Markdown>
                </div>
                <div className='border-t mt-5'></div>
                <div className='flex items-center justify-center mt-10'>
                    <SlideShow experience={experience}/>
                </div>
            </Card>
        </Box>
        )}
    </div>
)}

export const dynamic = 'force-dynamic'

export default ExperiencePage



import { prisma } from '@/prisma/client'
import { Box, Card, Flex, Text } from '@radix-ui/themes'
import Image from 'next/image'
import SlideShow from './slideShow';
import { notFound } from 'next/navigation';

const ExperiencePage = async() => {

    const experiences = await prisma.experience.findMany({include:{image_to_experience:{include:{image:true}}}})
    
    if(!experiences) return notFound();

  return (
    <div className='flex flex-col gap-3 justify-center items-center mt-5'>
        {experiences.map(experience =>
            <Box key={experience.id} className='w-5/5'>
            <Card>
                <Flex gap="3" align="center">
                    <Image
                        height={50}
                        width={100}
                        alt='Logo'
                        style={{width:100,height:50}}
                        src={`${experience.employer_logo}`}
                    />
                    <Box>
                        <Text as="div" size="2" weight="bold">
                            {experience.company}
                        </Text>
                        <Text as="div" size="2" color="gray">
                            {experience.department}
                        </Text>
                    </Box>
                </Flex>
                <div>
                    <SlideShow experience={experience}/>
                </div>
            </Card>
        </Box>
        )}
    </div>
)}

export const dynamic = 'force-dynamic'

export default ExperiencePage
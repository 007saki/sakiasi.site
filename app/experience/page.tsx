


import { prisma } from '@/prisma/client'
import { Box, Card, Flex, Text } from '@radix-ui/themes'
import Image from 'next/image'
import { SlCalender } from 'react-icons/sl'
import Markdown from 'react-markdown'

const ExperiencePage = async() => {
    const experiences = await prisma.experience.findMany()

  return (
    <div className='flex flex-col gap-3 items-center py-5'>
        {experiences.map(experience=>            
            <Box key={experience.id} className='p-2 md:w-3/5'>
                <Card className='flex flex-col'>
                    <div>
                        <Flex gap="3" align="center" className='flex justify-center'>
                            <Image
                                height={100}
                                width={100}
                                alt='Logo'
                                style={{width:50 , height:50}}
                                src={`https://drive.google.com/uc?id=${experience?.employer_logo}`}
                            />
                            <Box>
                                <Text className='text-2xl' as="div" size="2" weight="bold">
                                    {experience.company}
                                </Text>
                                <Text className='italic' as="div" size="2" color="gray">
                                    {experience.position}
                                </Text>
                            </Box>
                        </Flex>
                    </div>

                    <div className='flex mt-10 gap-1'>
                        <div><SlCalender size={'40'} color='purple' /></div>
                        <div>
                            <Text as="div" size="2" color="gray">From: {experience.startDate.toDateString()}</Text>
                            <Text as="div" size="2" color="gray">To: {experience.endDate?.toDateString()}</Text>
                        </div>
                    </div>

                    <div className='border-b mt-5'></div>

                    <div className='prose mt-3'>
                        <div className='mt-5'>
                            <Markdown>
                                {experience.description}
                            </Markdown>
                        </div>
                    </div>
                </Card>
            </Box>
        )}
    </div>
  )
}

export default ExperiencePage
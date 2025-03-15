


import { prisma } from '@/prisma/client'
import { Box, Card, Flex, Text } from '@radix-ui/themes'
import Image from 'next/image'

const ExperiencePage = async() => {
    const experiences = await prisma.experience.findMany()

  return (
    <div className='flex flex-col gap-3 items-center py-5'>
        {experiences.map(experience=>
            <Box key={experience.id} className='w-3/5'>
                <Card className='flex flex-col justify-center'>
                    <Flex gap="3" align="center" className='flex justify-center'>
                        <Image
                            height={50}
                            width={50}
                            alt='Logo'
                            src={`https://drive.google.com/uc?id=${experience?.employer_logo}`}
                            // fallback={experience.company}
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

                    <div className='flex flex-col items-center gap-3'>
                        <Text as="div" size="2" color="gray">From: {experience.startDate.toDateString()}</Text>
                        <Text as="div" size="2" color="gray">To: {experience.endDate?.toDateString()}</Text>
                    </div>
                </Card>
            </Box>
        )}
    </div>
  )
}

export default ExperiencePage
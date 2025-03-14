


import { prisma } from '@/prisma/client'
import { Box, Card, Flex, Text } from '@radix-ui/themes'
import Image from 'next/image'

const ExperiencePage = async() => {
  const experiences = await prisma.experience.findMany()

  return (
    <div className='flex justify-center py-10'>
        {experiences.map(exp=>
          <Box key={exp.id} maxWidth="240px">
          <Card>
            <Flex gap="3" align="center">
              <Image priority
                  width={40}
                  height={40}
                  style={{ width: "auto", height: "auto" }} 
                  src={`https://drive.google.com/uc?id=${exp.employer_logo}`}
                  alt={`${exp.company}`}
                />
              <Box>
                <Text as="div" size="2" weight="bold">
                  {exp.company}
                </Text>
                <Text as="div" size="2" color="gray">
                  {exp.position}
                </Text>
              </Box>
            </Flex>

          </Card>
        </Box>
        )}
    </div>
  )
}

export default ExperiencePage
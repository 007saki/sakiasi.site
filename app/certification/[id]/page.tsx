

import { prisma } from '@/prisma/client'
import { Badge, Text } from '@radix-ui/themes'
import Image from 'next/image'
import { FaCertificate } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'

const CertificateDetailsPage = async({params}:{params:Promise<{id:string}>}) => {
  const id = (await params).id
  const cert = await prisma.certificate.findUnique({
     where:{id:(parseInt(id))},
  })

  return (
    <div className='p-4'>
        <div className=' items-center flex flex-col gap-5' key={cert!.id}>
          <div className='flex items-center flex-col'>
            <Image
              width={400}
              height={400}
              src={`/certificates/${cert!.name}`}
              alt={`${cert!.name}`}
            />
            <div>
              <div className='flex items-center flex-col'>
                <div className='flex gap-4 items-center p-2'>
                  <Text className='font-serif flex items-center gap-1'> <FaCertificate color='purple'/> Certificate</Text>
                <div className='border-l px-3 flex items-center gap-2'>
                  <Badge variant='soft' color='green'>{cert!.status}</Badge>
                </div>
              </div>
            </div>
          </div>
                <div>
                  <Text className='italic'>{new Date(cert!.date).toString()}</Text>
                </div>
          </div>
          <div className=' prose border-t p-2 py-5'>
            <ReactMarkdown>
              {cert!.certificate_desc}
            </ReactMarkdown>
          </div>
        </div>
    </div>
  )
}

export default CertificateDetailsPage;




import { Badge, Text } from '@radix-ui/themes'
import { FaCertificate } from 'react-icons/fa'
import { prisma } from '@/prisma/client'

const CertificateDetailsPage = async({params}:{params:Promise<{id:string}>}) => {
  const id = (await params).id
  const cert = await prisma.certificate.findUnique({where:{id:(parseInt(id))}})
  return (
    <div className='p-4'>
        <div className='flex flex-col md:flex-row gap-5' key={cert!.id}>
          <div>
            <img width={400} height={400} src={`/${cert!.name}`} alt={`${cert!.name}`} />
            <div>
              <div className='mt-5'>
                <Text className='text-2xl'>{cert!.name!.replaceAll(/-/g,' ').replaceAll('.jpg','')}</Text>
                <div className='flex gap-2 items-center p-2'>
                  <Text className='italic'>{new Date(cert!.date).toLocaleDateString()}</Text>
                  <Badge variant='soft' color='green'>{cert!.status}</Badge>
                <div className='border-l px-3 flex items-center gap-2'>
                  <FaCertificate color='purple'/>
                  <Text className='font-serif'>Certificate</Text>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className='md:border-l px-5 flex flex-col'>
            <div className='sm:border-t md:border-none md:p-0 p-5'>
              {cert!.certificate_desc}
            </div>
          </div>
        </div>
    </div>
  )
}

export default CertificateDetailsPage;




'use client'
import { Badge, Button, Table, Text } from '@radix-ui/themes'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { certificateSchema } from '../cerSchema'
import { z } from 'zod'

export type certType = z.infer<typeof certificateSchema>

const CerTable = () => {
  const [certificates, setCertificates] = useState<certType[]>([])

  useEffect(()=>{
    const getCertificate=async()=>{
      const cert = await axios.get('/api/certificate')
      const data = await cert.data
      setCertificates(data)
    }
    getCertificate();
  },[])

  const router = useRouter()

  const redirect=(id:number)=>{
    router.push(`/certification/${id}`)
  }


  return (
    <div className='p-5'>
      <Table.Root size={'1'} variant='ghost'>
        <Table.Header>
          <Table.Row className='hidden md:table-row'>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Certificates</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Institution</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='md:hidden'>Certificates</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body className='md:hidden'>
          {certificates.map((certificate)=>
          <Table.Row  key={certificate.id}>
          <Table.Cell>
            <div className='flex gap-3 flex-col'>
              
              <div className='flex flex-col gap-2'>
                <Text className='text-lg'>{certificate.name!.replaceAll('-',' ').replaceAll('.jpg','')}</Text>
                <div className='flex gap-3'>
                <Text className='italic'>{new Date(certificate.date).toLocaleDateString()}</Text>
                <Badge color='green' variant='soft'>{certificate.status}</Badge>
                </div>
              </div>
              <div>
                <Button size={'1'} radius='medium' onClick={()=>redirect(certificate.id!)} color='purple' variant='solid'>view Details <IoMdArrowRoundForward/></Button>
              </div>
              
            </div>
            </Table.Cell>
        </Table.Row>
          )}
        </Table.Body>
        <Table.Body >
          {certificates.map((certificate)=>
              <Table.Row className='hover:cursor-pointer hover:bg-purple-200 hidden md:table-row' onClick={()=>redirect(certificate.id!)} key={certificate.id}>
                <Table.Cell>{certificate.id}</Table.Cell>
                <Table.Cell>{new Date(certificate.date).toLocaleDateString()}</Table.Cell>
                <Table.Cell >{certificate.name!.replaceAll(/-/g,' ').replaceAll('.jpg','')}</Table.Cell>
                <Table.Cell>{certificate.institution}</Table.Cell>
                <Table.Cell>{certificate.qualificationType}</Table.Cell>
                <Table.Cell><Badge variant='soft' color='green'>{certificate.status}</Badge></Table.Cell>
              </Table.Row>
          )}
        </Table.Body>
      </Table.Root>

    </div>
  )
}

export default CerTable
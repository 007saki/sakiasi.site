

'use client'
import { Badge, Button, Table, Text } from '@radix-ui/themes'
import { useRouter } from 'next/navigation'
import React from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'

const CerTable = () => {
  const cerItems = [
    {id: 1, date:'2023-01-01',institution:'LinkedIn', QualificationType:'Certificate', Category:'Specialized', status:'COMPLETE', name:'Learning-Data-Analytics-Foundations.jpg'},
    {id: 2, date:'2023-01-01',institution:'LinkedIn', QualificationType:'Certificate', Category:'Specialized', status:'COMPLETE', name:'Data-Literacy-Exploring-an-Describing-Data.jpg'},
    {id: 3, date:'2023-04-01',institution:'LinkedIn', QualificationType:'Certificate', Category:'Specialized', status:'COMPLETE', name:'Learning-Excel-Data-Analysis.jpg'},
    {id: 4, date:'2023-05-04',institution:'LinkedIn', QualificationType:'Certificate', Category:'Specialized', status:'COMPLETE', name:'NoSQL-Essential-Training.jpg'},
    {id: 5, date:'2023-06-05',institution:'LinkedIn', QualificationType:'Certificate', Category:'Specialized', status:'COMPLETE', name:'Power-BI-Essential-Training.jpg'},
    {id: 6, date:'2023-03-07',institution:'LinkedIn', QualificationType:'Certificate', Category:'Specialized', status:'COMPLETE', name:'SQL-for-Data-Analysis.jpg'},
    {id: 7, date:'2023-02-02',institution:'LinkedIn', QualificationType:'Certificate', Category:'Specialized', status:'COMPLETE', name:'SQL-Server-Fundamentals-Master-Basic-Query-Techniques.jpg'},
    {id: 8, date:'2023-01-01',institution:'LinkedIn', QualificationType:'Certificate', Category:'Specialized', status:'COMPLETE', name:'The-Non-Technical-Skills-of-Effective-Data-Scientists.jpg'},
  ]

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
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Institution</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='md:hidden'>Certificates</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body className='md:hidden'>
          {cerItems.map((certificate)=>
          <Table.Row  key={certificate.id}>
          <Table.Cell>
            <div className='flex gap-3 flex-col'>
              
              <div className='flex flex-col gap-2'>
                <Text className='text-lg'>{certificate.name.replaceAll('-',' ').replaceAll('.jpg','')}</Text>
                <div className='flex gap-3'>
                <Text className='italic'>{certificate.date}</Text>
                <Badge color='green' variant='soft'>{certificate.status}</Badge>
                </div>
              </div>
              <div>
                <Button size={'1'} radius='medium' onClick={()=>redirect(certificate.id)} color='purple' variant='solid'>view Details <IoMdArrowRoundForward/></Button>
              </div>
              
            </div>
            </Table.Cell>
        </Table.Row>
          )}
        </Table.Body>
        <Table.Body >
          {cerItems.map((certificate)=>
              <Table.Row className='hover:cursor-pointer hover:bg-purple-200 hidden md:table-row' onClick={()=>redirect(certificate.id)} key={certificate.id}>
                <Table.Cell>{certificate.id}</Table.Cell>
                <Table.Cell>{certificate.date}</Table.Cell>
                <Table.Cell >{certificate.name.replaceAll(/-/g,' ').replaceAll('.jpg','')}</Table.Cell>
                <Table.Cell>{certificate.institution}</Table.Cell>
                <Table.Cell>{certificate.QualificationType}</Table.Cell>
                <Table.Cell><Badge variant='soft' color='green'>{certificate.status}</Badge></Table.Cell>
              </Table.Row>
          )}
        </Table.Body>
      </Table.Root>

    </div>
  )
}

export default CerTable
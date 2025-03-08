

'use client'
import { Badge, Button, Table, Text } from '@radix-ui/themes'
import { useRouter } from 'next/navigation'
import React from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'

const CerTable = () => {

  const router = useRouter()

  const redirect=(id:number)=>{
    router.push(`/certification/${id}`)
  }

  const cerItems = [
    {id: 1, date:'2023-01-01',institution:'LinkIn', QualificationType:'Certificate', Category:'Specialized', name:'Learning-Data-Analytics-Foundations.jpg'},
    {id: 2, date:'2023-01-01',institution:'LinkIn', QualificationType:'Certificate', Category:'Specialized', name:'Data-Literacy-Exploring-an-Describing-Data.jpg'},
    {id: 3, date:'2023-04-01',institution:'LinkIn', QualificationType:'Certificate', Category:'Specialized', name:'Learning-Excel-Data-Analysis.jpg'},
    {id: 4, date:'2023-05-04',institution:'LinkIn', QualificationType:'Certificate', Category:'Specialized', name:'NoSQL-Essential-Training.jpg'},
    {id: 5, date:'2023-06-05',institution:'LinkIn', QualificationType:'Certificate', Category:'Specialized', name:'Power-BI-Essential-Training.jpg'},
    {id: 6, date:'2023-03-07',institution:'LinkIn', QualificationType:'Certificate', Category:'Specialized', name:'SQL-for-Data-Analysis.jpg'},
    {id: 7, date:'2023-02-02',institution:'LinkIn', QualificationType:'Certificate', Category:'Specialized', name:'SQL-Server-Fundamentals-Master-Basic-Query-Techniques.jpg'},
    {id: 8, date:'2023-01-01',institution:'LinkIn', QualificationType:'Certificate', Category:'Specialized', name:'The-Non-Technical-Skills-of-Effective-Data-Scientists.jpg'},
  ]

  return (
    <div className='p-5'>
      <Table.Root size={'1'} variant='surface'>
        <Table.Header>
          <Table.Row className='hidden md:table-row'>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Institution</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Category</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='md:hidden'>Certificates</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body className='md:hidden'>
          {cerItems.map((certificate,index)=>
          <Table.Row  key={index}>
          <Table.Cell>
            <div className='flex gap-3 flex-col'>
              
              <div className='flex flex-col gap-2'>
                <Text className='text-lg'>{certificate.name.replaceAll('-',' ').replaceAll('.jpg','')}</Text>
                <div className='flex gap-3'>
                <Text className='italic'>{certificate.date}</Text>
                <Badge variant='soft'>{certificate.Category}</Badge>
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
          {cerItems.map((certificate,index)=>
              <Table.Row className='hover:cursor-pointer hover:bg-purple-400 hidden md:table-row' onClick={()=>redirect(certificate.id)} key={index}>
                <Table.Cell>{certificate.id}</Table.Cell>
                <Table.Cell>{certificate.date}</Table.Cell>
                <Table.Cell>{certificate.name}</Table.Cell>
                <Table.Cell>{certificate.institution}</Table.Cell>
                <Table.Cell>{certificate.QualificationType}</Table.Cell>
                <Table.Cell>{certificate.Category}</Table.Cell>
              </Table.Row>
          )}
        </Table.Body>
      </Table.Root>

    </div>
  )
}

export default CerTable




import { Badge, Text } from '@radix-ui/themes'
import React from 'react'
import { FaCertificate } from 'react-icons/fa'

const cerItems = [
  {id: 1, date:'2023-01-01',institution:'LinkedIn', QualificationType:'Certificate', Category:'Specialized', status:'COMPLETE', certificate_desc:'Cert 1', name:'Learning-Data-Analytics-Foundations.jpg'},
  {id: 2, date:'2023-01-01',institution:'LinkedIn', QualificationType:'Certificate', Category:'Specialized', status:'COMPLETE', certificate_desc:'Cert 2', name:'Data-Literacy-Exploring-an-Describing-Data.jpg'},
  {id: 3, date:'2023-04-01',institution:'LinkedIn', QualificationType:'Certificate', Category:'Specialized', status:'COMPLETE', certificate_desc:'Cert 3', name:'Learning-Excel-Data-Analysis.jpg'},
  {id: 4, date:'2023-05-04',institution:'LinkedIn', QualificationType:'Certificate', Category:'Specialized', status:'COMPLETE', certificate_desc:'Cert 4', name:'NoSQL-Essential-Training.jpg'},
  {id: 5, date:'2023-06-05',institution:'LinkedIn', QualificationType:'Certificate', Category:'Specialized', status:'COMPLETE', certificate_desc:'Cert 5', name:'Power-BI-Essential-Training.jpg'},
  {id: 6, date:'2023-03-07',institution:'LinkedIn', QualificationType:'Certificate', Category:'Specialized', status:'COMPLETE', certificate_desc:'Cert 6', name:'SQL-for-Data-Analysis.jpg'},
  {id: 7, date:'2023-02-02',institution:'LinkedIn', QualificationType:'Certificate', Category:'Specialized', status:'COMPLETE', certificate_desc:'Cert 7', name:'SQL-Server-Fundamentals-Master-Basic-Query-Techniques.jpg'},
  {id: 8, date:'2023-01-01',institution:'LinkedIn', QualificationType:'Certificate', Category:'Specialized', status:'COMPLETE', certificate_desc:'Cert 8', name:'The-Non-Technical-Skills-of-Effective-Data-Scientists.jpg'},
] 

const CertificateDetailsPage = async({params}:{params:Promise<{id:string}>}) => {
  const id = (await params).id
  const selectedItem = cerItems.filter(certificate=> certificate.id === (parseInt(id)))
  
  return (
    <div className='p-4'>
      {selectedItem.map(certificate=>
        <div className='flex flex-col md:flex-row gap-5' key={certificate.id}>
          <div>
            <img width={400} height={400} src={`/${certificate.name}`} alt={`${certificate.name}`} />
            <div>
              <div className='mt-5'>
                <Text className='text-2xl'>{certificate.name.replaceAll(/-/g,' ').replaceAll('.jpg','')}</Text>
                <div className='flex gap-2 items-center p-2'>
                  <Text className='italic'>{certificate.date}</Text>
                  <Badge variant='soft' color='green'>{certificate.status}</Badge>
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
              {certificate.certificate_desc}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CertificateDetailsPage;


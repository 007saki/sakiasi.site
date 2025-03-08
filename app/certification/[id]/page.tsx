



import { Text } from '@radix-ui/themes'
import React from 'react'

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

const CertificateDetailsPage = async({params}:{params:Promise<{id:string}>}) => {
  const id = (await params).id
  const selectedItem = cerItems.filter(certificate=> certificate.id === (parseInt(id)))
  
  return (
    <div className='p-4'>
      {selectedItem.map(certificate=>
        <div className='flex gap-5' key={certificate.id}>
          <div>
            <img width={400} height={400} src={`/${certificate.name}`} alt={`${certificate.name}`} />
          </div>
          <div className='border-l px-5'>
            <Text className='text-2xl'>{certificate.name.replaceAll(/-/g,' ').replaceAll('.jpg','')}</Text>
          </div>
        </div>
      )}
    </div>
  )
}

export default CertificateDetailsPage


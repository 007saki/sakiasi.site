'use client'
import React, { useState } from 'react'
import styles from './cert.module.scss'
import { Button } from '@radix-ui/themes'

const cerItems = [
  'Learning-Data-Analytics-Foundations.jpg',
  'Data-Literacy-Exploring-an-Describing-Data.jpg',
  'Learning-Excel-Data-Analysis.jpg',
  'NoSQL-Essential-Training.jpg',
  'Power-BI-Essential-Training.jpg',
  'SQL-for-Data-Analysis.jpg',
  'SQL-Server-Fundamentals-Master-Basic-Query-Techniques.jpg',
  'The-Non-Technical-Skills-of-Effective-Data-Scientists.jpg',
]

const Certificate = () => {
  const itemsPerPage = 1
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(cerItems.length / itemsPerPage)

  const getPaginatedItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return cerItems.slice(startIndex, endIndex)
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardTitle}>
          {getPaginatedItems().map((url, index) => (
            <div key={index}>
              <img src={`/${url}`} alt="certificate" width={500} height={500} />
              <p>Certificate {currentPage} of {totalPages}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-3 justify-between">
          <Button onClick={prevPage} disabled={currentPage === 1}>Prev</Button>
          <Button onClick={nextPage} disabled={currentPage === totalPages}>Next</Button>
        </div>
      </div>
    </div>
  )
}

export default Certificate

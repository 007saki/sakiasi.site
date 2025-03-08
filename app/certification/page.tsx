

  import React from 'react'
  import styles from './cert.module.scss'
  const list = [
    'Learning-Data-Analytics-Foundations.jpg',
    'Data-Literacy-Exploring-an-Describing-Data.jpg',
    'Learning-Excel-Data-Analysis.jpg',
    'NoSQL-Essential-Training.jpg',
    'Power-BI-Essential-Training.jpg',
    'SQL-for-Data-Analysis.jpg',
    'SQL-Server-Fundamentals-Master-Basic-Query-Techniques.jpg',
    'The-Non-Technical-Skills-of-Effective-Data-Scientists.jpg'
  ]
  const Certificate = () => {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            {list.map(url=>
            <img key={url} src={`/${url}`} alt='certificate' width={300} height={300}/> 
            )}
          </div>
        </div>
      </div>
    )
  }

  export default Certificate




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
            {/* <div>
              {topics.map(topic=>
                <div className='overflow-scroll' key={topic.id}>
                  {topic.list}
                </div>
              )}
            </div> */}
          </div>
        </div>
      )}
    </div>
  )
}

export default CertificateDetailsPage



const topic1 = `
**Data Analytics Foundations**" typically covers a broad range of fundamental topics. Here’s a structured list of key topics under this subject:

### **1. Introduction to Data Analytics**  
- What is Data Analytics?  
- Importance and Applications of Data Analytics  
- Data Analytics vs. Data Science vs. Business Intelligence  
- Types of Data Analytics (Descriptive, Diagnostic, Predictive, Prescriptive)  

### **2. Data Analytics Process**  
- Defining the Problem  
- Data Collection  
- Data Cleaning and Preparation  
- Data Analysis  
- Data Visualization  
- Interpretation and Decision-Making  

### **3. Data Types and Structures**  
- Structured vs. Unstructured Data  
- Quantitative vs. Qualitative Data  
- Continuous vs. Discrete Data  
- Data Formats (CSV, JSON, SQL, Excel)  

### **4. Data Collection and Sources**  
- Primary vs. Secondary Data Sources  
- Web Scraping  
- APIs and Databases  
- Public Datasets (Kaggle, Google Dataset Search)  

### **5. Data Cleaning and Preprocessing**  
- Handling Missing Values  
- Data Transformation (Scaling, Normalization)  
- Removing Duplicates and Outliers  
- Data Encoding (One-Hot Encoding, Label Encoding)  

### **6. Introduction to Statistics for Data Analytics**  
- Measures of Central Tendency (Mean, Median, Mode)  
- Measures of Dispersion (Variance, Standard Deviation)  
- Probability and Distributions (Normal, Poisson, Binomial)  
- Hypothesis Testing (T-tests, Chi-square tests)  

### **7. Data Visualization**  
- Introduction to Data Visualization  
- Tools for Data Visualization (Excel, Tableau, Power BI, Python - Matplotlib, Seaborn)  
- Types of Charts and Graphs (Bar Charts, Histograms, Scatter Plots, Heatmaps)  
- Best Practices for Effective Data Visualization  

### **8. Exploratory Data Analysis (EDA)**  
- Understanding Data Patterns and Trends  
- Correlation Analysis  
- Feature Selection and Engineering  

### **9. SQL for Data Analysis**  
- Basics of SQL (SELECT, WHERE, GROUP BY, HAVING)  
- Joins and Subqueries  
- Aggregations and Window Functions  

### **10. Programming for Data Analytics (Python & R)**  
- Introduction to Python for Data Analytics (NumPy, Pandas)  
- Data Manipulation with Pandas  
- Basic R for Data Analysis  

### **11. Introduction to Machine Learning in Analytics**  
- Supervised vs. Unsupervised Learning  
- Regression and Classification Basics  
- Clustering and Anomaly Detection  

### **12. Business Intelligence and Data-Driven Decision Making**  
- Introduction to Business Intelligence (BI)  
- Key Performance Indicators (KPIs) and Metrics  
- Data-Driven Business Strategies  

### **13. Big Data and Cloud Analytics**  
- Introduction to Big Data Technologies (Hadoop, Spark)  
- Cloud-Based Analytics Platforms (Google BigQuery, AWS, Azure)  

### **14. Ethics and Data Privacy**  
- Data Security and Compliance (GDPR, CCPA)  
- Ethical Considerations in Data Analytics  
- Bias in Data and AI  

Would you like me to focus on a specific topic in more detail? 🚀`

const topics = [
  {id:1, list:topic1}
]

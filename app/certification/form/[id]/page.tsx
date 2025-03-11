



import React from 'react'
import CertificateForm from '../page'

const CertificateUpdate = async({params}:{params:Promise<{id:string}>}) => {
    const id = parseInt((await params).id)

  return (
    <div>
        <CertificateForm id={id}/>
    </div>
  )
}

export default CertificateUpdate
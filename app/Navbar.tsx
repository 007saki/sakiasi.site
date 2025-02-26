




import Link from 'next/link'
import React from 'react'
import { GrProjects } from 'react-icons/gr'
import { IoHomeOutline } from 'react-icons/io5'
import { MdOutlineAddAPhoto, MdWorkOutline } from 'react-icons/md'
import { PiCertificate } from 'react-icons/pi'
import { SlGraduation } from 'react-icons/sl'

const Navbar = () => {
    const links = [
        {label:'Home', href:'/',icon:<IoHomeOutline />},
        {label:'Education', href:'/education', icon: <SlGraduation />},
        {label:'Certification', href:'/certification', icon: <PiCertificate />},
        {label:'Experience', href:'/experience', icon:<MdWorkOutline />},
        {label:'Project', href:'/project', icon: <GrProjects />},
        {label:'Photo', href:'/photo', icon:<MdOutlineAddAPhoto />},
    ]
  return (
    <nav className='border-r h-lvh'>
        <ul className='mt-10'>
            {links.map(link=>
            <Link className='flex h-10 hover:bg-purple-500 items-center p-5 transition-colors gap-2' href={link.href} key={link.href}>{link.icon}{link.label}</Link>
            )}
        </ul>
    </nav>
  )
}

export default Navbar
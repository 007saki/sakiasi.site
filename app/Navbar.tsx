




import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const links = [
        {label:'Home', href:'/'},
        {label:'Education', href:'/education'},
        {label:'Certification', href:'/certification'},
        {label:'Experience', href:'/experience'},
        {label:'Project', href:'/project'},
        {label:'Photo', href:'/photo'},
    ]
  return (
    <nav className='border-r h-lvh'>
        <ul className='mt-10'>
            {links.map(link=>
            <Link className='flex h-10 hover:bg-zinc-200 items-center p-5 transition-colors' href={link.href} key={link.href}>{link.label}</Link>
            )}
        </ul>
    </nav>
  )
}

export default Navbar



import { Button, DropdownMenu } from '@radix-ui/themes'
import Link from 'next/link'
import { GrProjects } from 'react-icons/gr'
import { IoIosMenu } from 'react-icons/io'
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

    const DropdownComponent=()=>{
      return (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="ghost">
              <IoIosMenu /> Menu
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            {links.map(link=>
            <Link key={link.href} href={link.href}>
              <DropdownMenu.Item>{link.icon}{link.label}</DropdownMenu.Item>
            </Link>
            )}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      )
    }

  return (
    <nav className='border-r md:h-lvh'>
      <div className='md:hidden border-b h-10 flex items-center px-5'>
        <DropdownComponent/>
      </div>
      <div className='hidden md:block'>
        <ul className='mt-10'>
            {links.map(link=>
            <Link className='flex h-10 hover:bg-purple-500 items-center p-5 transition-colors gap-2' href={link.href} key={link.href}>{link.icon}{link.label}</Link>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
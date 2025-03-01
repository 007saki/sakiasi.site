


'use client'
import { Button } from '@radix-ui/themes';
import { motion } from "motion/react";
import Image from 'next/image';
import Link from 'next/link';
import { MdArrowForward } from 'react-icons/md';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const welcome = 'WELCOME'
  return (
    <div className=' flex-col p-5 flex-grow flex items-center justify-around '>
      <div>
        <h1 className='text-5xl text-center flex'>
          <TypeAnimation
            sequence={[
              welcome,
              2000,
            ]}
            repeat={1}
            />
          </h1>
      </div>
        <div>
          <motion.div
            initial={{ translateX: 20}}
            animate={{ translateX: 0}}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <Image className='rounded-3xl' src={'/sakiasi.JPG'} alt='myphoto' height={200} width={200}/>
        </motion.div>
        </div>
        <div>
          <Link href={'/education'}>
            <Button>Explore Portfolio <MdArrowForward/></Button>
          </Link>
        </div>
    </div>
  )
}

export default Home;
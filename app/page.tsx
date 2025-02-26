


'use client'
import Image from 'next/image'
import styles from './home.module.css'

const Home = () => {
  const welcome = 'WELCOME'
  const note = `
    Hello and welcome! I'm Sakeasi Baleiwai Komaidrakulu, a dedicated System Administrator with a passion for Web Development and Artificial Intelligence. This website is a space where I showcase my journey, skills, and achievements.`

  return (
    <div className='space-y-5 items-center justify-center w-full '>
      <h1 className='text-5xl flex justify-center mt-10'>
        {welcome.split('').map((char,index)=>
          <span key={index} className={styles.letter} style={{animationDelay: `${index * 0.2}s`}}>{char}</span>
        )}
      </h1>
      <p className='justify-center flex'>
        <span className={styles.slideup} style={{animationDelay: `${1.5}s`}}>
          <Image className='rounded-lg' alt='sakiasi' src={'/sakiasi.JPG'} width={200} height={200} />
        </span>
      </p>
      <p className="p-2" style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
        {note.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} style={{ display: "inline-block", marginRight: "5px" }}>
            {word.split("").map((char, charIndex) => (
              <span 
                key={charIndex} 
                className={styles.note} 
                style={{ animationDelay: `${(wordIndex * 5 + charIndex) * 0.05}s`, display: "inline-block" }}
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </p>


    </div>
  )
}

export default Home
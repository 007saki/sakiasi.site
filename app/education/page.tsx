

'use client'
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Education = () => {
  return (
    <div>
      <VerticalTimeline>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2025 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', }}
          icon={<Image className='rounded-xl' alt='sakiasi' src={'/sakiasi.JPG'} width={100} height={100} />}
        >
          <h3 className="vertical-timeline-element-title">Learning and Building Apps</h3>
          <h4 className="italic text-sm">Suva, Fiji Island</h4>
          <p>
            Currently I am learning to become a Full-Stack Web Developer, specializing in Next.js. 
            I focus on building dynamic, user-friendly web applications, 
            combining strong front-end design with efficient back-end functionality. 
            My current work involves developing modern, responsive interfaces and integrating robust APIs to deliver seamless user experiences.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - 2024"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', }}
          icon={<FaLinkedin />}
        >
          <h3 className="vertical-timeline-element-title">Completed Online Certificate</h3>
          <h4 className="text-sm italic">LinkedIn Learning</h4>
          <ol className='list-decimal px-10'>
            <li>System Administration</li>
            <li>Cybersecurity</li>
            <li>Network Security</li>
            <li>Project Management</li>
          </ol>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2022"
          iconStyle={{ background: 'rgb(33, 150, 243)', display:'flex', justifyContent:'center', alignItems:'center'  }}
          icon={<Image alt='police' src={'/police_logo.png'} width={40} height={40} />}
        >
          <h3 className="vertical-timeline-element-title">Fiji Police Force</h3>
          <h4 className="text-sm italic">System Administrator at Forensic Science Services</h4>
          <ol className='list-disc px-10'>
            <li>Managed servers & networks</li>
            <li>Handled cybersecurity & data protection</li>
            <li>Provided technical support for forensic teams</li>
            <li>Maintained forensic software & databases</li>
          </ol>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Education
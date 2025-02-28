

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
          date="2024"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', }}
          icon={<FaLinkedin />}
        >
          <h3 className="vertical-timeline-element-title">Completed Online Certificate</h3>
          <h4 className="text-sm italic">LinkedIn Learning</h4>
          <ol className='list-decimal px-10 mb-2'>
            <li>Full-Stack Web Developer</li>
            <li>JavaScript Essential</li>
            <li>Learning ECMAScript 6+</li>
            <li>Learning REST APIs</li>
            <li>React Essential</li>
          </ol>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', }}
          icon={<FaLinkedin />}
        >
          <h3 className="vertical-timeline-element-title">Completed Online Certificate</h3>
          <h4 className="text-sm italic">LinkedIn Learning</h4>
          <ol className='list-decimal px-10'>
            <li>IT Support</li>
            <li>Cybersecurity</li>
            <li>Cybersecurity with Cloud Computing</li>
            <li>Ethics in Information Security</li>
            <li>IT Security Foundations Network Security</li>
            <li>IT Security Foundations Operating System Security</li>
            <li>IT Service Management</li>
            <li>Learning Threat Modeling for Security Professionals</li>
            <li>Network Administration</li>
            <li>Networking Foundations</li>
            <li>Project Management Foundations</li>
            <li>Windows 10 for IT Support</li>
            <li>Network Security</li>
            <li>Project Management</li>
          </ol>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Education
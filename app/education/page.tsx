

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
            contentStyle={{ background: 'rgb(33, 150, 243)'}}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            className="vertical-timeline-element--work"
            date="2025 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', }}
            icon={<Image className='rounded-xl' alt='sakiasi' src={'/sakiasi.JPG'} width={100} height={100} />}
          >
            <h3 className="vertical-timeline-element-title">Learning and Building Apps</h3>
            <h4 className="vertical-timeline-element-subtitle italic text-sm">Suva, Fiji Island</h4>
            <p>
              Currently I am learning to become a Full-Stack Web Developer, specializing in Next.js. 
              I focus on building dynamic, user-friendly web applications, 
              combining strong front-end design with efficient back-end functionality. 
              My current work involves developing modern, responsive interfaces and integrating robust APIs to deliver seamless user experiences.
            </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: 'rgb(33, 150, 243)'}}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
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
            <li>DevOps Foundations</li>
          </ol>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          contentStyle={{ background: 'rgb(33, 150, 243)'}}
          className="vertical-timeline-element--work"
          date="2023"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', }}
          icon={<FaLinkedin />}>
            <h3 className="vertical-timeline-element-title">Completed Online Certificate</h3>
            <h4 className="text-sm italic">LinkedIn Learning</h4>
              <ol className='list-decimal px-10 p-2'>
                <li>IT Support</li>
                <li>Cybersecurity</li>
                <li>Cloud Computing</li>
                <li>Ethics in Information Security</li>
                <li>Network Security Foundation</li>
                <li>Operating System Security</li>
                <li>IT Service Management</li>
                <li>Threat Modeling</li>
                <li>Network Administration</li>
                <li>Networking Foundations</li>
                <li>Project Management</li>
                <li>Windows 10 for IT Support</li>
                <li>Network Security</li>
                <li>Project Management</li>
              </ol>
            </VerticalTimelineElement>
        
        <VerticalTimelineElement
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          contentStyle={{ background: 'rgb(33, 150, 243)'}}
          className="vertical-timeline-element--work"
          date="2023"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', }}
          icon={<FaLinkedin />}>
            <h3 className="vertical-timeline-element-title">Completed Online Certificate</h3>
            <h4 className="text-sm italic">LinkedIn Learning</h4>
              <ol className='list-decimal px-10 p-2'>
                <li>Data Literacy</li>
                <li>Data Analytics Foundations</li>
                <li>Excel Data Analysis</li>
                <li>Power BI Essential</li>
                <li>Data Literacy</li>
              </ol>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Education
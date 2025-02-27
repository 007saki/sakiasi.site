

'use client'
import Image from 'next/image';
import { GoProject } from 'react-icons/go';
import { IoCodeWorking } from 'react-icons/io5';
import { Md1K, MdScatterPlot, MdSchedule, MdSchool, MdWork, MdWorkspacesFilled } from 'react-icons/md';
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
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<Image alt='sakiasi' src={'/sakiasi.JPG'} width={100} height={100} />}
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
      </VerticalTimeline>
    </div>
  )
}

export default Education
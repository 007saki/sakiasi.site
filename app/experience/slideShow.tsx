


'use client'
import { notFound } from 'next/navigation';
import SimpleImageSlider from "react-simple-image-slider";

interface experiencesProps {
    id: number;
    position: string;
    company: string;
    department: string | null;
    startDate: Date;
    endDate: Date | null;
    description: string | null;
    employer_logo: string | null;
    image_to_experience: ({
        image: {
            id: number;
            src: string;
        };
    } & {
        id: number;
        experience_id: number;
        image_id: number;
    })[];
    
}

const SlideShow = ({experience}:{experience?:experiencesProps}) => {

    if(!experience) return notFound()

    const images = experience.image_to_experience.flatMap(exp => ({url: exp.image.src}));
 
  return (
    <div>
        <SimpleImageSlider
            autoPlay
            width={500}
            height={500}
            images={images}
            showBullets={true}
            showNavs={true}
        />
    </div>
  )
}

export default SlideShow
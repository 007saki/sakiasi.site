


import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";


export const GET=async()=>{
    try {
        const experiences = await prisma.experience.findMany()
        return NextResponse.json(experiences,{status:200})
    } catch (error) {
        return NextResponse.json(`Failed to fetch from db: ${error}`,{status:500})
    }
}


export const POST = async (request: NextRequest) => {
    const body = await request.json();

    // Send to DB
    const createExperience = await prisma.experience.create({
        data: {
            position: body.position,
            company: body.company,
            description: body.description,
            startDate: body.startDate,
            endDate: body.endDate,
            department: body.department,
            employer_logo: body.employer_logo,
            image_to_experience: {
                create: body.src.map((src: string) => ({
                    image: {
                        create: {
                            src: src
                        }
                    }
                }))
            }
        }
    });

    return NextResponse.json(createExperience, { status: 201 });
};

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

export const POST=async(request:NextRequest)=>{
    const body = await request.json()

    //send to db
    const createExperience = await prisma.experience.create({
        data:{
            company: body.company,
            position: body.position,
            startDate: body.startDate,
            description: body.description,
            endDate: body.endDate,
            employer_logo: body.employer_logo,
            department: body.department,
            image: {create:
                {
                    google_id: body.google_id,
                    name: body.name
                }
            }
        }
    })

    return NextResponse.json(createExperience,{status:201})
}
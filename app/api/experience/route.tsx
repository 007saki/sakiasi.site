import { experienceSchema } from "@/app/schema/experienceSchema";
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
    const validation = experienceSchema.safeParse(body)
    if(!validation.success){
        return NextResponse.json(validation.error.errors,{status:400})
    }
    //send to db
    const createExperience = await prisma.experience.create({
        data:{
            company: body.company,
            position: body.position,
            startDate: body.startDate,
            description: body.description,
            endDate: body.endDate,
            employer_logo: body.employer_logo,
            images: body.images
        }
    })

    return NextResponse.json(createExperience,{status:201})
}
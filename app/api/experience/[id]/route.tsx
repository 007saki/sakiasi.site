import { experienceSchema } from "@/app/schema/experienceSchema";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";



export const PATCH=async(request:NextRequest, {params}:{params:Promise<{id:string}>})=>{
    const id = (await params).id
    const body = await request.json()
    
    const partialSchema = experienceSchema.partial()
    const validation = partialSchema.safeParse(body)
    
    if(!validation.success){
        return NextResponse.json(validation.error.errors,{status:400})
    }

    try {
        const updatedExperience = await prisma.experience.update({
            data:{
                company: body.company,
                description: body.description,
                endDate: body.endDate,
                position: body.position,
                startDate: body.startDate,
                employer_logo: body.employer_logo,
                department: body.department,
                image:{create:{
                    google_id: body.google_id,
                    name: body.name
                }}
            },
            where: {id:(parseInt(id))}
        })
    
        return NextResponse.json(updatedExperience,{status:200})
    } catch (error) {
        return NextResponse.json(`Failed to patch experience: ${error}`)
    }
}


export const DELETE=async(request:NextRequest,{params}:{params:Promise<{id:string}>})=>{
    try {
        const id = (await params).id
        const deleteExperience = await prisma.experience.delete({where:{id:(parseInt(id))}})
        return NextResponse.json(deleteExperience,{status:200})
    } catch {
        return NextResponse.json({error:`Failed to delete experience`},{status:500})
    }
}
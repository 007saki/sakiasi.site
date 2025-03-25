import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";



export const PATCH=async(request:NextRequest, {params}:{params:Promise<{id:string}>})=>{
    const id = (await params).id
    const body = await request.json()
    
    try {
        const updatedExperience = await prisma.experience.update({
            data:{
                position: body.position,
                company: body.company,
                description: body.description,
                startDate: body.startDate,
                endDate: body.endDate,
                department: body.department,
                employer_logo: body.employer_logo,
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
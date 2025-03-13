import { certificateSchema } from "@/app/schema/cerSchema";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";


export const GET=async()=>{
    const certificates = await prisma.certificate.findMany()
    return NextResponse.json(certificates)
}

export const POST=async(request:NextRequest)=>{
    const body = await request.json()
    
    const validation = certificateSchema.safeParse(body)
    if(!validation.success)
        return NextResponse.json(validation.error.errors,{status:400})
    try {
        //send to db
        const createCert = await prisma.certificate.create({
            data:{
                date: body.date,
                institution: body.institution,
                qualificationType: body.qualificationType,
                category: body.category,
                status: body.status,
                certificate_desc: body.certificate_desc,
                name: body.name,
                certificate_id: body.certificate_id,
            }
        })
        return NextResponse.json(createCert,{status:201})
    } catch (error) {
        console.log('Database error')
        return NextResponse.json(error,{status:400})
    }
}
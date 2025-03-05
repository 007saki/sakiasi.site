import { cerSchema } from "@/app/cerSchema";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";



export const POST=async(request:NextRequest)=>{
    //deconstruct
    const body = await request.json()

    const validateCert = cerSchema.safeParse(body)
    if(!validateCert.success)
        return NextResponse.json('Invalid Certificate',{status:400})

    //send to db
    const createCert = await prisma.certificate.create({
        data:{
            title:body.title,
            start_time: body.start_time,
            end_time: body.end_time,
            status: body.status
        }
    })

    return NextResponse.json({createCert},{status:201})
}

export const GET=async()=>{
    const [cert] = await prisma.certificate.findMany()
    return NextResponse.json(cert)
}


import { prisma } from "@/hello-prisma/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    const user = await prisma.user.findMany()
    if(!user) return NextResponse.json({},{status:400})
    return NextResponse.json(user)
}

export const POST=async(request:NextRequest)=>{
  const body = await request.json();
  const {title} = await body
  const cert = await prisma.certificate.create({data:{title:title}})
  return NextResponse.json(cert,{status:201})
}
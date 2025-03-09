import { prisma } from "@/prisma/client"
import { NextResponse } from "next/server"


export const GET=({params}:{params:{id:string}})=>{
   const certificate = prisma.certificate.findUnique({where:{id:parseInt(params.id)}})
   NextResponse.json(certificate)
   console.log(certificate)
}
import { NextRequest, NextResponse } from "next/server"

export const POST=async(request:NextRequest)=>{
    // Parse the form data
    const formData = await request.formData();
    const file = formData.get("file") as File;

    return NextResponse.json({message:'Received from backend', fileName:file})
}
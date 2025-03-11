import { NextRequest, NextResponse } from "next/server"

export const POST=async(request:NextRequest)=>{
    // Parse the form data
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if(!file){
        return NextResponse.json({message:'no file reached server try again'})
    }

    return NextResponse.json({message:'Received from backend'},{statusText:`${file?`${file.name}`:'no file reached server'}`})
}
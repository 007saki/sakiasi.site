
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from 'fs';

export const POST = async (request: NextRequest) => {
    
    try {
        // Parse the form data
        const formData = await request.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
        }

        // Create upload directory
        const uploadDir = path.join(process.cwd(), 'public/certificates');

        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        // Get the original file name
        const fileName = file.name;
        const filePath = path.join(uploadDir, fileName);

        // Write to disk
        const buffer = await file.arrayBuffer();
        fs.writeFileSync(filePath, Buffer.from(buffer));

        return NextResponse.json({ message: 'Upload Successful', filePath: `${fileName}` });

    } catch (error) {
        return NextResponse.json({ message: `Upload file failed: ${error}` }, { status: 500 });
    }

};

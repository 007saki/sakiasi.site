import { certificateSchema } from "@/app/schema/cerSchema";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    try {
        const id = parseInt((await params).id);
        if (isNaN(id)) {
            return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
        }

        const certificate = await prisma.certificate.findUnique({
            where: { id }
        });

        if (!certificate) {
            return NextResponse.json({ error: "Certificate not found" }, { status: 404 });
        }

        return NextResponse.json(certificate, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: `Failed to fetch id ${error}` }, { status: 500 });
    }
};

export const PATCH = async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    const idString = (await params).id
    const id = parseInt(idString)
    
    if (isNaN(id)) {
        return NextResponse.json({ message: 'Invalid ID' }, { status: 400 });
    }

    // Parse request body
    const body = await request.json();
    const validate = certificateSchema.safeParse(body);
    if (!validate.success) {
        return NextResponse.json({ message: 'Invalid certificate' }, { status: 400 });
    }
    
    try {
        const updatedCert = await prisma.certificate.update({
            where: { id },
            data: {
                category: body.category,
                certificate_desc: body.certificate_desc,
                date: body.date,
                institution: body.institution,
                name: body.name,
                qualificationType: body.qualificationType,
                status: body.status,
                certificate_id: body.certificate_id,
            },
        });

        return NextResponse.json(updatedCert, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Error updating certificate', error: `error: ${error}` }, { status: 500 });
    }
};

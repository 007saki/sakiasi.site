import { cerSchema } from "@/app/cerSchema";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

// Disable caching - helper function
const noCacheHeaders:HeadersInit = {
    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    Pragma: 'no-cache',
    Expires: '0',
    'Surrogate-Control': 'no-store'
};

export const POST = async (request: NextRequest) => {
    try {
        const body = await request.json();

        // Validate request body
        const validateCert = cerSchema.safeParse(body);
        if (!validateCert.success) {
            return NextResponse.json(
                { error: "Invalid Certificate" },
                { status: 400, headers: noCacheHeaders }
            );
        }

        // Insert into database
        const createCert = await prisma.certificate.create({
            data: {
                title: body.title,
                start_time: body.start_time,
                end_time: body.end_time,
                status: body.status
            }
        });

        return NextResponse.json(
            { certificate: createCert },
            { status: 201, headers: noCacheHeaders }
        );
    } catch (error) {
        console.error("POST Error:", error);
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500, headers: noCacheHeaders }
        );
    }
};

export const GET = async () => {
    try {
        const certificates = await prisma.certificate.findMany();

        return NextResponse.json(certificates, {
            status: 200,
            headers: noCacheHeaders
        });
    } catch (error) {
        console.error("GET Error:", error);
        return NextResponse.json(
            { error: "Failed to fetch certificates" },
            { status: 500, headers: noCacheHeaders }
        );
    }
};

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





import { notFound } from "next/navigation";
import { prisma } from "@/prisma/client";
import Form from "../form";


const FormEdit = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id; // No need to use `await params`
  
  const cert = await prisma.certificate.findUnique({
      where: { id: parseInt(id) } // Ensure proper conversion
  });

  if (!cert) return notFound();
  
  return (
      <div>
        <Form cert={cert} />
      </div>
  );
};

export default FormEdit

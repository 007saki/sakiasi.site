

import { z } from "zod";

export const certificateSchema = z.object({
  
  id: z.number().optional(), // Matches Prisma's `Int @id @default(autoincrement())`
  date: z.union([z.string().datetime(), z.date()]), // Allow both DateTime strings and Date objects
  institution: z.string().min(1, "Institution is required"), 
  qualificationType: z.string().min(1, "Qualification Type is required"), 
  category: z.string().min(1, "Category is required"), // Assuming stored as a string
  status: z.string().min(1, "Status is required"), // Assuming stored as a string
  certificate_desc: z.string().min(1, "Certificate description is required"), 
  name: z.string().min(1, "Name is required"), 
  certificate_id: z.string().nullable().optional(),
  
});
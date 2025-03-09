

import { z } from "zod";

export const certificateSchema = z.object({
  id: z.number().optional(), // Matches Prisma's `Int @id @default(autoincrement())`
  date: z.string().or(z.date()), // Prisma uses DateTime, so allow both string and Date
  institution: z.string().nullable().optional(), // Matches `String?`
  qualificationType: z.string().nullable().optional(), // Matches `String?`
  category: z.string().min(1), // Assuming Category is an enum stored as a string
  status: z.string().min(1), // Assuming Status is an enum stored as a string
  certificate_desc: z.string().nullable().optional(), // Matches `String?`
  name: z.string().nullable().optional(), // Matches `String?`
});

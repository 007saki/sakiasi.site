


import { z } from "zod";

export const experienceSchema = z.object({
    position: z.string().min(1, 'Required'),
    company: z.string().min(1, 'Required'),
    department: z.string().nullable(),
    startDate: z.union([z.date(), z.string()]),
    endDate: z.union([z.date(), z.string()]),
    description: z.string(),
    employer_logo : z.string().nullable(),
    image_id: z.number()
})

export type experienceType = z.infer<typeof experienceSchema>



import { z } from "zod";

export const experienceSchema = z.object({
    id: z.number(),
    position: z.string().min(1, 'Required'),
    company: z.string().min(1, 'Required'),
    department: z.string().nullable(),
    startDate: z.date(),
    endDate: z.date().nullable(),
    description: z.string().nullable(),
    employer_logo : z.string().nullable(),
    image_id: z.number()
})

export type experienceType = z.infer<typeof experienceSchema>
import { z } from "zod";

export const experienceSchema = z.object({
    position: z.string().min(1, 'Required'),
    company: z.string().min(1, 'Required'),
    startDate: z.string().min(1, 'Required').refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid date format",
    }),
    endDate: z.string().optional().refine((date) => !date || !isNaN(Date.parse(date)), {
        message: "Invalid date format",
    }).optional(),
    description: z.string().min(1, 'Required').optional(),
    employer_logo : z.string().min(1, 'Required').optional(),
    images        : z.string().min(1, 'Required').optional()
});


export type experienceType = z.infer<typeof experienceSchema>
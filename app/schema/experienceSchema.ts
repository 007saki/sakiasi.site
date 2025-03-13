import { z } from "zod";


export const experienceSchema = z.object({
    position: z.string().min(1,'Required'),
    company: z.string().min(1,'Required'),
    startDate: z.string().datetime(),
    endDate  : z.string().datetime().optional(),
    description: z.string().min(1,'Required'),
})
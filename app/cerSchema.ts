

import z from 'zod'


export const certificateSchema = z.object({
        date: z.string(),
        institution: z.string().optional(),
        qualificationType: z.string().optional(),
        category : z.string().min(1),
        status : z.string().min(1),
        certificate_desc : z.string().min(1),
        name: z.string().min(1)
    })
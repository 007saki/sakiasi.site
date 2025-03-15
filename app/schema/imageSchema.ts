


import { z } from "zod";

export const imageSchema = z.object({
        name: z.string().min(1, 'Required'),
        google_id: z.string().min(1, 'Required'),

    })

export type imageType = z.infer<typeof imageSchema>
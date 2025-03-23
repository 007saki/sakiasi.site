


import { z } from "zod";

export const imageSchema = z.object({
    google_id: z.string(),
})

export const imageDetailSchema = z.object({
    name: z.string(),
    image_description: z.string(),
    image_id: z.number()
})

export type imageDetailType = z.infer<typeof imageDetailSchema>
export type imageType = z.infer<typeof imageSchema>
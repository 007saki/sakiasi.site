import { z } from "zod";


export const cerSchema = z.object({
    title: z.string().min(1,'Required').max(255),
    start_time: z.string().min(1).max(255),
    end_time: z.string().min(1,'Required').max(255),
    status: z.string().min(1,'Required').max(255)
})
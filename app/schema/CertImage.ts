import { z } from "zod";
import { imageSchema } from "./imageSchema";
import { experienceSchema } from "./experienceSchema";



export const combineImageExperienceSchema = z.object({
    imageSchema:imageSchema,
    experienceSchema: experienceSchema
})

export type combineImageExperienceType = z.infer<typeof combineImageExperienceSchema>
import { z } from "zod";

export const recordSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    label: z.string({ message: "Label is required" }).or(z.number({ message: "Label is required" })),
    importance: z.number({ message: "Importance is required" }),
    isStepsDefined: z.boolean(),
    theme: z.enum(["white", "yellow", "blue", "turquoise", "red", "violet"]),
    isPinned: z.boolean(),
})
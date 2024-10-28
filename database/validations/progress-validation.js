import { z } from "zod";

export const progressSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    label: z.string({ message: "Label is required" }).or(z.number({ message: "Label is required" })),
    importance: z.number({ message: "Importance is required" }),
    isStepsDefined: z.boolean(),
    steps: z.array(z.object({
        id: z.number(),
        value: z.string()
    })).min(1, { message: "Steps are required" }),
    theme: z.enum(["white", "yellow", "blue", "turquoise", "red", "violet"]),
    isDeadlineSet: z.boolean(),
    deadline: z.date({ message: "Deadline is required" }),
    isPinned: z.boolean(),
})
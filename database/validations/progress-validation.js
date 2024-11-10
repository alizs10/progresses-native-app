import { z } from "zod";

export const progressSchema = z.object({
    name: z.string().min(1, { message: "Progress name is required" }),
    label: z.string({ message: "Label is required" }).or(z.number({ message: "Label is required" })),
    importance: z.number({ message: "Importance is required" }),
    isStepsDefined: z.boolean(),
    steps: z.array(z.object({
        id: z.string(),
        value: z.string()
    })).min(1, { message: "Progress should have at least 1 step" }),
    theme: z.enum(["black", "white", "yellow", "blue", "turquoise", "red", "violet"]),
    isDeadlineSet: z.boolean(),
    deadline: z.number({ message: "Deadline is required" }),
    isPinned: z.boolean(),
})
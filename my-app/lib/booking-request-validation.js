import {z} from "zod";

export const reopenRequestSchema = z.object({
  requestId: z.string().trim().min(1, "Request ID is required"),
  description: z
  .string()
  .trim()
  .min(10, "Please describe the recurring issue in at least 10 characters")
  .max(2000, "Description must be 2000 characters or fewer"),
});

export const followUpNoteSchema = z.object({
  requestId: z.string().trim().min(1, "Request ID is required"),
  descritpion: z
  .string()
  .trim()
  .min(3, "Please enter a follow-up note")
  .max(2000, "Note must be 2000 characters or fewer"),
});
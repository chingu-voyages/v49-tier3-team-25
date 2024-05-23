import { z } from 'zod';

export const adminValidation = {
  signUp: z.object({
    body: z.object({
      fullName: z.string(),
      email: z.string().email(),
      password: z.string().min(8),
    }),
  }),
  login: z.object({
    body: z.object({
      email: z.string(),
      password: z.string(),
    }),
  }),
  update: z.object({
    body: z.object({
      fullName: z.string().optional(),
      email: z.string().email().optional(),
      password: z.string().min(8).optional(),
    }).strict().refine(
        (data) => {
          return data.fullName || data.email || data.password;
        },
        { message: "At least one of 'fullName', 'email', or 'password' must be provided" }
      ),
    }),
};
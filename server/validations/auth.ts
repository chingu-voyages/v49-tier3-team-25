import { z } from 'zod';

export const authValidation = {
  signUp: z.object({
    fullName: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
  }),
  login: z.object({
    email: z.string(),
    password: z.string().min(8),
  }),
};

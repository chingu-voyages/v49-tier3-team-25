import { z } from 'zod';

export const userValidation = {
  signUp: z.object({
    body: z.object({
      fullName: z.string(),
      email: z.string().email(),
      password: z.string().min(8),
    }) 
  }),
  login: z.object({
    body: z.object({
      email: z.string(),
      password: z.string(),
    }) 
  }),
};

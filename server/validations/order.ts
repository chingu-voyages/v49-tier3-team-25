import { z } from 'zod';

export const orderValidation = {
    checkout: z.object({
        body: z.object({
            recipientProfile: z.object({
                firstName: z.string(),
                lastName: z.string(),
                email: z.string().email(),
                phone: z.string(),
              }),
            recipientAddress: z.object({
                street: z.string(),
                city: z.string(),
                state: z.string(),
                zipCode: z.string(),
            }),
            paymentMethod: z.object({
                type: z.enum(['CREDIT_CARD', 'DEBIT_CARD', 'BANK_TRANSFER']),
                bankName: z.string(),
                cardHolderName: z.string(),
            }),
        }),
    }),
    status: z.object({
        body: z.object({
            orderId: z.string(),
            status: z.enum(['CONFIRMED', 'PROCESSING', 'ON_DELIVERY', 'DELIVERED', 'CANCELED']),
        }),
    }),
}
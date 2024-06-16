import { z } from 'zod';

export const bookValidation = {
    create: z.object({
        body: z.object({
            title: z.string(),
            author: z.string(),
            description: z.string(),
            imageUrls: z.array(z.string().url()),
            genres: z.array(z.string()),
            sku: z.string(),
            stockQuantity: z.number().int().nonnegative(),
            costPrice: z.number().nonnegative(),
            salePrice: z.number().nonnegative(),
            discount: z.number().min(0).max(1),
            tags: z.array(z.string())
        }),
    }),
    update: z.object({
        body: z.object({
            title: z.string().optional(),
            author: z.string().optional(),
            description: z.string().optional(),
            imageUrls: z.array(z.string().url()).optional(),
            genres: z.array(z.string()).optional(),
            sku: z.string().optional(),
            stockQuantity: z.number().int().nonnegative().optional(),
            costPrice: z.number().nonnegative().optional(),
            salePrice: z.number().nonnegative().optional(),
            discount: z.number().min(0).max(1).optional(),
            tags: z.array(z.string()).optional(),
        }).strict().refine(
            (data) => {
                return data.title 
                || data.author 
                || data.description 
                || data.imageUrls 
                || data.genres 
                || data.sku 
                || data.stockQuantity !== undefined 
                || data.costPrice !== undefined 
                || data.salePrice !== undefined 
                || data.discount !== undefined 
                || data.tags;
            },
            { message: 'At least one valid field must be provided' }
        ),
    }),
}
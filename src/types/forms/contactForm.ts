import { z } from 'zod';

export const formSchema = z.object({
    email: z.string()
        .email('Please enter a valid email address')
        .min(1, 'Email is required'),
    title: z.string()
        .min(1, 'Title is required')
        .max(100, 'Title must be less than 100 characters'),
    message: z.string()
});

export type ContactFormValues = z.infer<typeof formSchema>;

export interface ContactFormStatus {
    type: '' | 'success' | 'error';
    message: string;
}
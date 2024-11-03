import { Box, Text } from '@/components';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import {
    ContactFormStatus,
    ContactFormValues,
    formSchema,
} from '@/types/forms/contactForm';
import { Button } from '@/components/ui';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { cn } from '@/lib/utils';

const ContactUs = () => {
    const [status, setStatus] = useState<ContactFormStatus>({
        type: '',
        message: '',
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            title: '',
            message: '',
        },
    });

    // const onSubmit = async (data: ContactFormValues): Promise<void> => {
    //     setStatus({ type: '', message: '' });

    //     setStatus({
    //         type: 'success',
    //         message: 'Message sent successfully!',
    //     });
    //     reset();
    //     console.log(status);
    // };
    const onSubmit = async (): Promise<void> => {
        setStatus({ type: '', message: '' });

        setStatus({
            type: 'success',
            message: 'Message sent successfully!',
        });
        reset();
        console.log(status);
    };

    return (
        <Box className='p-8 items-center w-full flex-col md:flex-row gap-8 md:gap-0'>
            <Box
                variant='column'
                className='w-full  px-4 items-center md:items-start justify-start'
            >
                <Text variant='h2'>Message me</Text>
                <Text variant='lead' className='w-[80%]'>
                    Please feel free to reach out and write to me anytime!
                    Whether you have questions, need assistance, or just want to
                    connect, I'm here and always open to engaging conversations.
                    I truly enjoy helping others and exploring new ideas, so
                    don't hesitate to drop me a message. Looking forward to
                    connecting!
                </Text>
            </Box>
            <Box className='w-full justify-center md:justify-start'>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='w-[80%] flex flex-col gap-8'
                >
                    {status.message && (
                        <Alert
                            variant={
                                status.type === 'error' ? 'error' : 'success'
                            }
                        >
                            <AlertDescription>
                                <Text variant='mid'>{status.message}</Text>
                            </AlertDescription>
                        </Alert>
                    )}
                    <Box variant='column' className='w-full items-start'>
                        <Text variant='lead'>Email</Text>
                        <Input
                            {...register('email')}
                            type='email'
                            placeholder='Your email address'
                            className={errors.email ? 'border-red-500' : ''}
                        />
                        {errors.email && (
                            <Text className='text-sm text-red-500 mt-1'>
                                {errors.email.message}
                            </Text>
                        )}
                    </Box>
                    <Box variant='column' className='w-full items-start'>
                        <Text variant='lead'>Title</Text>
                        <Input
                            {...register('title')}
                            placeholder='Message title'
                            className={errors.title ? 'border-red-500' : ''}
                        />
                        {errors.title && (
                            <Text className='text-sm text-red-500 mt-1'>
                                {errors.title.message}
                            </Text>
                        )}
                    </Box>
                    <Box variant='column' className='w-full items-start'>
                        <Text variant='lead'>Message</Text>
                        <Textarea
                            {...register('message')}
                            rows={10}
                            placeholder='Your message'
                            className={cn(
                                'resize-none',
                                errors.message ? 'border-red-500' : '',
                            )}
                        />
                        {errors.message && (
                            <Text className='text-sm text-red-500 mt-1'>
                                {errors.message.message}
                            </Text>
                        )}
                    </Box>
                    <Button
                        type='submit'
                        disabled={isSubmitting}
                        className='w-full'
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default ContactUs;

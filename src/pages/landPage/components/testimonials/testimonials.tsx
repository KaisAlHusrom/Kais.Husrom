import { Box, SectionTitle } from '@/components';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui';
import Autoplay from 'embla-carousel-autoplay';

import testimontials from './constants/testimonials';
import TestimonialCard from './components/TestimonialCard';
import { useInView } from '@/hooks';
import { cn } from '@/lib/utils';

const Testimonials = () => {
    const { inView, ref } = useInView();

    return (
        <Box
            id='testimonials'
            ref={ref}
            className={cn('w-full', inView && 'animate-fadeIn')}
        >
            <Box variant='container'>
                <Box variant='center' className='w-full p-4'>
                    <SectionTitle>Testimonials</SectionTitle>
                </Box>
                <Box className='w-full p-4'>
                    <Carousel
                        className='w-full'
                        opts={{
                            loop: true,
                            dragFree: false,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 2000,
                            }),
                        ]}
                    >
                        <CarouselContent>
                            {testimontials.map((item, index) => {
                                return (
                                    <CarouselItem
                                        key={index}
                                        className='basis-full md:basis-1/3 xl:basis-1/4'
                                    >
                                        <TestimonialCard testimonial={item} />
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                        {/* <CarouselPagination /> */}
                        <CarouselNext />
                        <CarouselPrevious />
                    </Carousel>
                </Box>
            </Box>
        </Box>
    );
};

export default Testimonials;

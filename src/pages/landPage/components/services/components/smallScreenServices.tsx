import { Box } from '@/components'

import { services } from '../constants'


import Autoplay from "embla-carousel-autoplay"


import ServiceCard from './serviceCard';
import { Carousel, CarouselContent, CarouselItem, CarouselPagination } from '@/components/ui';


const SmallScreenServices = () => {
    return (
        <Box variant='column' className='w-full'>
            <Box variant='row' className='w-[90%]'>
                <Carousel 
                    className="w-full"
                    opts={{
                        loop: true,
                        dragFree: false,
                        
                    }}
                    plugins={[
                        Autoplay({
                            delay: 3000,

                        }),
                        
                    ]}
                >
                    <CarouselContent className="w-full h-full">
                        {
                            services.map((service, index) => (
                                <CarouselItem key={index} className='basis-full'>
                                    <ServiceCard
                                        service={service}
                                    />
                                </CarouselItem>
                                
                            ))
                        }
                    </CarouselContent>
                    <CarouselPagination />
                </Carousel>
            </Box>
        </Box>
    )
}

export default SmallScreenServices

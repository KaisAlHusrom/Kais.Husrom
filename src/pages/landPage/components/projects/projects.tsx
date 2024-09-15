import { Box, SectionTitle } from "@/components"

import Autoplay from "embla-carousel-autoplay"



import projects from "./constants/projects";
import ProjectItem from "./components/ProjectItem";
import { Images } from "@/assets";
import { Carousel, CarouselContent, CarouselItem, CarouselPagination } from "@/components/ui";

const Projects = () => {
    return (
        <Box className="w-full h-screen relative">
            <Box
                variant='center'
                className="
                    absolute 
                    top-0 
                    w-full 
                    h-full 
                    z-[-1] 
                    rotate-180
                    
                    "
                style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 80%, transparent 100%)',
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 80%, transparent 100%)',
                }}
                >
                <img
                    src={Images.heroBackground}
                    alt=""
                    className="
                    w-full
                    h-full
                    object-cover
                    "
                />
            </Box>

            <Box variant='container' className="h-full">
                <Box variant='column' className="my-4">
                    <Box variant='center' className="w-full p-4">
                        <SectionTitle>
                            Last Projects
                        </SectionTitle>
                    </Box>
                    <Box variant='row' className="w-full">
                        <Carousel 
                        className="w-full"
                        opts={{
                            loop: true,
                            dragFree: false,
                            
                        }}
                        plugins={[
                            Autoplay({
                                delay: 6000,

                            }),
                            
                        ]}
                        >
                            <CarouselContent className="w-full h-full">
                                {
                                    projects.map((project, index) => (
                                        <CarouselItem key={index} className='
                                        w-full
                                        h-[83vh]
                                        basis-full
                                        
                                        '>
                                            <ProjectItem
                                                project={project}
                                            />
                                        </CarouselItem>
                                        
                                    ))
                                }
                            </CarouselContent>
                            <CarouselPagination />
                        </Carousel>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Projects

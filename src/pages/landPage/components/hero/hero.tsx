import { Box, Text } from '@/components'

import { Images } from '@/assets'
import { Button } from '@/components/ui'

const Hero = () => {
    return (
        <Box variant='rowBetween'  className='
            h-screen 
            w-full 
            mt-[-80px] 
            bg-no-repeat 
            bg-left 
            bg-full 
            bg-cover
            2xs:flex-col-reverse justify-center
            md:flex-row
            2xl:flex-row
            transition-all
            animate-first-appearance
        ' style={{
            backgroundImage: `url(${Images.heroBackground})`
        }}>
            <Box variant='column'>
                <Box variant='column' className='items-center md:items-start'>
                    <Text variant='h4' className='font-p tracking-widest capitalize'>
                        Software Developer
                    </Text>
                    <Text variant='h1' className='tracking-wider capitalize hidden md:flex'>
                        Hello I'm
                    </Text>
                    <Text variant='h1' className='
                    mt-[0px]
                    text-primary-light 
                    tracking-wider 
                    capitalize 
                    text-4xl 
                    animate-typewriter 
                    overflow-hidden 
                    whitespace-nowrap 
                    border-r-4 
                    border-primary 
                    lg:text-8xl lg:mt-[-30px]
                    '>
                        Kais Al Husrom
                    </Text>
                    <Text variant='p' className=' 
                    hidden 
                    md:block w-[380px] 
                    lg:w-[500px]'
                    >
                        <Text variant='p' className='font-pbold'>
                        Unlock Your Project's Potential with a Laravel & React Specialist!
                        </Text>
                        Are you struggling to find a developer who truly understands your vision and can bring it to life? 
                        If you're looking to elevate your web and app development projects with cutting-edge solutions,
                        you're in the right place
                    </Text>
                </Box>
                <Box className='justify-start w-[100%] mt-2 flex-col md:flex-row'>
                    <Box>
                        <Button size="lg" variant='default' >
                            Download CV
                        </Button>
                    </Box>
                    <Box>

                    </Box>
                </Box>
            </Box>
            <Box variant='center' className='
            2xs:w-[300px] mb-16
            sm:w-[500px]
            2xl:w-[500px]
            
            '
            style={{
                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent)',
                maskImage: 'linear-gradient(to bottom, black 80%, transparent)',
            }}
            >
                    <img src={Images.kaisImage} alt="hero image" width='100%' height='100%' className='object-contain' />
            </Box>
        </Box>
    )
}

export default Hero
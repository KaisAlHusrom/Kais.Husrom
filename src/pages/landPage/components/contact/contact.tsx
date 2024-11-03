import { Box } from '@/components';
import { useInView } from '@/hooks';
import { cn } from '@/lib/utils';

import { Images } from '@/assets';
import GetInTouch from './components/getInTouch';
import ContactUs from './components/contactUs';

const Contact = () => {
    const { inView, ref } = useInView();

    return (
        <Box
            id='contact'
            ref={ref}
            className={cn(
                'w-full relative min-h-[120vh] items-start pt-20',
                inView && 'animate-fadeIn',
            )}
        >
            <Box
                variant='center'
                className='
                    absolute 
                    top-0 
                    -left-[180px]
                    w-full 
                    h-full 
                    z-[-1] 
                    
                    '
                style={{
                    WebkitMaskImage:
                        'linear-gradient(to bottom, transparent 0%, black 10%, black 80%, transparent 100%)',
                    maskImage:
                        'linear-gradient(to bottom, transparent 0%, black 10%, black 80%, transparent 100%)',
                }}
            >
                <img
                    src={Images.heroBackground}
                    alt=''
                    className='
                    w-full
                    h-full
                    object-cover
                    '
                />
            </Box>
            <Box variant='container'>
                <Box variant='column' className='w-full items-start gap-20'>
                    <GetInTouch />
                    <ContactUs />
                </Box>
            </Box>
        </Box>
    );
};

export default Contact;

import { Box } from '@/components';
import {
    Hero,
    Projects,
    Statics,
    Services,
    Testimonials,
    Contact,
    Footer,
    ScrollToTopButton,
} from '../components';

const LandPage = () => {
    return (
        <Box
            variant='column'
            className='items-start justify-start gap-32 w-full relative'
        >
            <Hero />
            <Statics />
            <Services />
            <Projects />
            <Testimonials />
            <Contact />
            <Footer />
            <ScrollToTopButton />
        </Box>
    );
};

export default LandPage;

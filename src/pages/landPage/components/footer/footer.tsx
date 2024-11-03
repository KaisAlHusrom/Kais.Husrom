import { Box, Text } from '@/components';
import SocialMedia from '@/components/socialMedia/socialMedia';

const Footer = () => {
    return (
        <Box variant='center' className='w-full p-10'>
            <Box variant='column'>
                <Box variant='column'>
                    <Text variant='h4' className='text-primary-dark'>
                        Kais Al Husrom
                    </Text>
                    <Text variant='muted'>
                        Unlock Your Project's Potential with a Laravel & React
                        Specialist!
                    </Text>
                </Box>
                <Box>
                    <SocialMedia />
                </Box>
                <Box>
                    <Text variant='p'>
                        &copy; 2023 Kais Al Husrom. All rights reserved.
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;

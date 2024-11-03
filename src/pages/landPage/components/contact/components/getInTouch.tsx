import { Box, SectionTitle, Text } from '@/components';
import contactInfo from '../constants/contactInfo';
import { NavLink } from 'react-router-dom';

const GetInTouch = () => {
    return (
        <>
            <Box variant='center' className='w-full p-4'>
                <SectionTitle>Get In Touch</SectionTitle>
            </Box>
            <Box className='w-full p-4 mt-8'>
                <Box className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-2 w-full '>
                    {contactInfo.map((info, key) => (
                        <Box key={key} variant='column'>
                            <info.icon
                                size={64}
                                className='text-primary-light mb-4'
                            />
                            <Text
                                variant='h3'
                                className='font-semibold mb-2 text-center'
                            >
                                {info.name}
                            </Text>
                            <Text
                                variant='lead'
                                className='text-gray-600 dark:text-gray-300 text-center line-clamp-2'
                            >
                                {info.link ? (
                                    <NavLink
                                        to={info.value}
                                        target='_blank'
                                        className='hover:text-primary-light transition-colors'
                                    >
                                        {info.caption}
                                    </NavLink>
                                ) : (
                                    info.value
                                )}
                            </Text>
                        </Box>
                    ))}
                </Box>
            </Box>
        </>
    );
};

export default GetInTouch;

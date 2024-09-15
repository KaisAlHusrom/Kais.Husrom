import { Box, Text } from '@/components'
import IService from '../types/Iservice';

interface ServiceContentProps {
    selectedService: IService;
    angle?: number;
}

const ServiceContent = (props: ServiceContentProps) => {
    const {
        selectedService,
        angle
    } = props;

    return (
        <Box variant='column' className={`w-full z-0`} style={{
            transform: `rotate(${angle ? -angle : 0}rad)`,
        }}>
            <Box variant='center' className='w-[200px] h-[200px]'>
                {
                    <selectedService.icon size={150} className="text-primary-light bg-clip-text " />
                }
            </Box>
            <Box variant='column'>
                <Text variant='h3' className='text-primary-light font-pbold'>
                    {selectedService.text}
                </Text>
                <Text variant='p' className='w-[65%] text-center line-clamp-4'>
                    {
                        selectedService.description
                    }
                </Text>
            </Box>
        </Box>
    )
}

export default ServiceContent

import { Box, Text } from "@/components";
import {  services } from "../constants";
import IService from "../types/Iservice";
import { Dispatch, SetStateAction } from "react";
import { useResponsiveRadius } from "@/hooks";

interface ServicePropsType {
    service: IService,
    angle: number;
    index: number;
    selectedServiceState: {
        selectedService: IService,
        setSelectedService: Dispatch<SetStateAction<IService>>;
    }
}

const Service = (
    props : ServicePropsType
) => {
    const {
        service,
        angle,
        index,
        selectedServiceState: {
            setSelectedService,
            selectedService
        }
    } = props
    const radius = useResponsiveRadius();

    const serviceAngle = (index / services.length) * 2 * Math.PI;
    const x = radius + radius * Math.cos(serviceAngle) - 80;
    const y = radius + radius * Math.sin(serviceAngle) - 92;

    const Logo = service.icon;

    return (
        <Box
        variant='center'
        style={{
            left: `${x}px`, 
            top: `${y}px`,
            transform: `rotate(${-angle}rad)`,
            position: 'absolute'
        }}
        >
            <Box
                key={index}
                onClick={() => setSelectedService(service)}
                variant='column'
                className={`
                    border-primary 
                    border-2 
                    rounded-full 
                    overflow-hidden 
                    transition-all
                    cursor-pointer
                    z-[1000]
                    w-[60px]
                    h-[60px] 
                    md:w-[124px]
                    md:h-[124px]
                    
                    ${selectedService?.id === service.id && 'bg-secondary-dark'}
                    ${selectedService?.id === service.id && 'scale-115'}
                    hover:bg-secondary
                    hover:scale-125
                `}
                
            >
                <Box variant="column" className="m-4 justify-start md:justify-center md:items-center">
                    <Box variant="center" className="text-primary sm:text-[1rem]"> 
                        <Logo />
                    </Box>
                    <Box variant="center" className="hidden md:flex">
                        <Text variant='mid' className="text-center select-none text-secondary-foreground">{service.text}</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Service;
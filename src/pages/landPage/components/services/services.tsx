import React, { useEffect, useRef, useState } from 'react';
import { Box, SectionTitle } from '@/components';
import {
    friction,
    minVelocity,
    sensitivityFactor,
    services,
} from './constants';
import Service from './components/service';
import IService from './types/Iservice';
import { useInView, useMediaQuery } from '@/hooks';
import SmallScreenServices from './components/smallScreenServices';
import ServiceContent from './components/serviceContent';
import { Images } from '@/assets';

const Services = () => {
    const { ref, inView } = useInView();
    const [isViewd, setIsViewd] = useState(inView);
    useEffect(() => {
        if (inView) return;

        setIsViewd(true);
    }, [inView]);

    const [selectedService, setSelectedService] = useState<IService>(
        services[0],
    );

    const circleRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [angle, setAngle] = useState<number>(0);
    const [velocity, setVelocity] = useState<number>(0.004);
    const [lastMousePos, setLastMousePos] = useState<{
        x: number;
        y: number;
    } | null>(null);
    const [lastUpdateTime, setLastUpdateTime] = useState<number>(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsDragging(true);
        setLastMousePos({ x: e.clientX, y: e.clientY });
        setLastUpdateTime(Date.now());
        setVelocity(0); // Reset velocity when starting a new drag
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging || !lastMousePos || !circleRef.current) return;

        const currentTime = Date.now();
        const deltaTime = (currentTime - lastUpdateTime) / 1000; // Convert to seconds
        const rect = circleRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const lastAngle = Math.atan2(
            lastMousePos.y - centerY,
            lastMousePos.x - centerX,
        );
        const currentAngle = Math.atan2(
            e.clientY - centerY,
            e.clientX - centerX,
        );

        let deltaAngle = currentAngle - lastAngle;

        // Normalize deltaAngle to be between -π and π
        if (deltaAngle > Math.PI) deltaAngle -= 2 * Math.PI;
        if (deltaAngle < -Math.PI) deltaAngle += 2 * Math.PI;

        // Apply sensitivity factor
        deltaAngle *= sensitivityFactor;

        // Calculate new velocity
        const newVelocity = deltaAngle / deltaTime;

        setAngle((prevAngle) => prevAngle + deltaAngle);
        setLastMousePos({ x: e.clientX, y: e.clientY });
        setLastUpdateTime(currentTime);
        setVelocity(newVelocity);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setLastMousePos(null);
    };

    useEffect(() => {
        let animationFrameId: number;

        const updateMomentum = () => {
            if (!isDragging && Math.abs(velocity) > minVelocity) {
                setAngle((prevAngle) => prevAngle + velocity);
                setVelocity((prevVelocity) => prevVelocity * friction);
                animationFrameId = requestAnimationFrame(updateMomentum);
            }
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            updateMomentum();
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isDragging]);

    //change selected service automatically
    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextIndex = (selectedService.id + 1) % services.length;
            setSelectedService(services[nextIndex]);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [selectedService.id]);

    const isMd = useMediaQuery('md');

    return (
        <Box
            id='services'
            className='
        bg-no-repeat 
        bg-cover
        bg-center
        md:bg-transparent 
        overflow-hidden
        w-full
        '
            style={
                isMd
                    ? {
                          backgroundImage: `url(${Images.services_background})`,
                          WebkitMaskImage:
                              'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
                          maskImage:
                              'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
                      }
                    : {}
            }
        >
            <Box variant='container' className='my-8'>
                <Box
                    variant='column'
                    className={`p-2 ${inView && `animate-fadeIn`}`}
                    ref={ref}
                >
                    <SectionTitle>Services</SectionTitle>
                    {!isMd ? (
                        <SmallScreenServices />
                    ) : (
                        <Box
                            variant='center'
                            className={`
                        w-full 
                        p-4 
                        relative 
                        mt-20 
                        ${isViewd && 'animate-accorion-right'}`}
                        >
                            <Box
                                variant='center'
                                ref={circleRef}
                                onMouseDown={handleMouseDown}
                                className={`
                                w-[550px]
                                h-[550px]
                                md:w-[550px]
                                md:h-[550px]
                                lg:w-[650px]
                                lg:h-[650px]
                                xl:w-[750px] 
                                xl:h-[750px] 
                                bg-transparent
                                border-[48px]
                                border-secondary
                                rounded-full
                                relative
                                cursor-grab
                                active:cursor-grabbing
                                
                                `}
                                style={{
                                    transform: `rotate(${angle}rad)`,
                                    transition: isDragging
                                        ? 'none'
                                        : 'transform 0.1s',
                                }}
                            >
                                {services.map((service, index) => {
                                    return (
                                        <Service
                                            service={service}
                                            key={index}
                                            angle={angle}
                                            index={index}
                                            selectedServiceState={{
                                                selectedService,
                                                setSelectedService,
                                            }}
                                        />
                                    );
                                })}
                                <ServiceContent
                                    selectedService={selectedService}
                                    angle={angle}
                                />
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default Services;

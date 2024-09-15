import { Box, Logo, ModeToggle, Text } from '@/components'
import LangToggle from '@/components/langToggle/langToggle'
import { Button, Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui'
import { navItems } from '@/constants'
import { useLangContext } from '@/hooks'

import { Menu } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const SmallScreenNavBar = () => {
    const {direction} = useLangContext();

    return (
        <Box variant='rowBetween' className="
        p-2 
        w-full
        flex
        sm:hidden
        ">
            <Logo />
            <Sheet >
                <SheetTrigger>
                    <Menu />
                </SheetTrigger>
                <SheetContent className='w-[300px]' side={direction === "rtl" ? 'left' : 'right'}>
                    <SheetHeader>
                        <SheetTitle>
                            <Box variant='center'>
                                <Logo size='md' />
                            </Box>
                        </SheetTitle>
                        <SheetDescription>
                        </SheetDescription>
                    </SheetHeader>
                    <Box variant='columnBetween' className='min-h-[90vh]'>
                        <Box variant='column' className='w-full items-start '>
                                {
                                    navItems.map(link => (
                                        <NavLink key={link.title} to={link.to} className={'w-full'}>
                                            <Button variant='link' className='w-full'>
                                                <Text className="capitalize w-full text-start">{link.title}</Text>
                                            </Button>
                                        </NavLink>
                                    ))
                                }
                        </Box>
                        <Box variant='column' className='w-full gap-4 self-end mb-2 items-start'>
                            <ModeToggle />
                            <LangToggle />
                            <Button variant='default'>
                                Sing in
                            </Button>
                        </Box>
                    </Box>
                </SheetContent>
            </Sheet>

        </Box>
    )
}

export default SmallScreenNavBar

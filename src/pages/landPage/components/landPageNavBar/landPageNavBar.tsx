

import { Text, Box, ModeToggle, Logo } from "@/components"
import LangToggle from "@/components/langToggle/langToggle"
import { Button } from "@/components/ui"
import { NavLink } from "react-router-dom"
import { SmallScreenNavBar } from "./components"
import { navItems } from "@/constants"



const LandPageNavBar = () => {
    return (
        <Box variant='row' className="p-4 h-[80px] relative z-50">
            <Box variant='container'>
                <Box variant='rowBetween' className="p-2 hidden sm:flex">
                    <Box className="gap-12">
                        <Logo size="lg" />
                        <Box fitContent className="gap-0">
                            {
                                navItems.map(link => (
                                    <NavLink key={link.title} to={link.to}>
                                        <Button variant='link'>
                                            <Text className="capitalize">{link.title}</Text>
                                        </Button>
                                    </NavLink>
                                ))
                            }
                        </Box>

                    </Box>
                    <Box fitContent>
                        <ModeToggle />
                        <LangToggle />
                        <Button variant='default'>
                            Sing in
                        </Button>
                    </Box>
                </Box>
                {/* small screens */}
                <SmallScreenNavBar />
            </Box>
        </Box>
    )
}

export default LandPageNavBar
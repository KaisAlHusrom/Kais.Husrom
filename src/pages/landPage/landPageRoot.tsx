import { Outlet } from "react-router-dom"


import { LandPageNavBar } from "./components"
import { Box, Seo } from "@/components"


const LandPageRoot = () => {
    return (
        <>
            <Seo
                title="Kais Al Husrom"
                description="Experienced Software Engineer specializing in front-end and back-end technologies, 
                with expertise in Laravel, React.js, and database management.
                Proven track record in developing e-commerce sites, web builder platforms, 
                and mobile applications, delivering high-quality and scalable software solutions."
                name="Software Engineer"
                type=""
                canonical="/"
                keywords="Software Engineer, Software Services, Software Products, e-commerce"
            />


            <LandPageNavBar />
            <Box variant="container">
                <Outlet />
            </Box>
        </>
    )
}

export default LandPageRoot
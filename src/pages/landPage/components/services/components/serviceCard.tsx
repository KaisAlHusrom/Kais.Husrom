import { Box, Text } from "@/components"
import IService from "../types/Iservice"

import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui"

interface ServiceCardProps {
    service: IService
}

const ServiceCard = (props: ServiceCardProps) => {
    const {service} = props


    return (
        <Card className="my-8 rounded-xl">
            <CardHeader>
                <CardTitle className="my-4 tracking-wider">
                    <Box variant='center' className="w-full h-[225px]">
                        {
                            <service.icon size={225} className="text-primary-light" />
                        }
                    </Box>
                    {service.text}
                </CardTitle>
            </CardHeader>
            <CardContent className="h-[130px]">
                <Text variant='p' className="line-clamp-4">
                    {service.description}
                </Text>
            </CardContent>
            <CardFooter className="justify-end mx-4">
                <Button className="self-end">
                    See Examples
                </Button>
            </CardFooter>
        </Card>

    )
}

export default ServiceCard

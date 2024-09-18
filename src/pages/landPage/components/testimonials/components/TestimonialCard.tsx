import { Box, Rate, Text } from '@/components'
import { Avatar, AvatarFallback, AvatarImage, Card, CardContent, CardFooter, CardHeader } from '@/components/ui'
import ITestimonial from '@/types/ITestimonials'


type TestimonialCardProps = {
    testimonial: ITestimonial
}

const TestimonialCard = ({testimonial} : TestimonialCardProps) => {
    return (
        <Card className='animate-testimonial'>
            <CardHeader>
                <Box>
                    <Avatar>
                        <AvatarImage src={testimonial.user.image + '/80'} />
                        <AvatarFallback>{testimonial.user.name[0]}</AvatarFallback>
                    </Avatar>
                    <Box>
                        <Text>{testimonial.user.name}</Text>
                    </Box>
                </Box>
            </CardHeader>
            <CardContent className='min-h-[120px]'>
                <Text variant='p' className='line-clamp-3'>{testimonial.message}</Text>
            </CardContent>
            <CardFooter>
                <Rate value={testimonial.rate}  />
            </CardFooter>
        </Card>
    )
}

export default TestimonialCard

import { Box, Text } from "@/components"
import { useInView, useNumberAnimation } from "@/hooks"

const data = [
    {
        name: 'Customers',
        number: 20,
    },
    {
        name: 'Experience',
        number: 4,
    },
    {
        name: 'Completed Projects',
        number: 30,
    },
    {
        name: 'Honors and Awards',
        number: 8,
    },
]


const Statics = () => {
    const {ref, inView} = useInView();
    

    return (
        <Box variant='container' className="mt-4">
            <Box variant='rowBetween' ref={ref} className={`
                w-full
                p-2
                ${inView? 'animate-fadeIn' : 'opacity-0'}
                flex-col
                sm:flex-row
            `}>
                {data.map((item, index) => {
                    // Use the custom hook to animate each number
                    
                    return (
                        <CountBox key={index} item={item} inView={inView} />
                    );
                })}
            </Box>
        </Box>
    )
}

export default Statics

const CountBox = ({ item, inView } : 
    {
        item: {
            number:number,
            name: string,
        }, 
        inView: boolean
    }
) => {
    const currentNumber = useNumberAnimation(inView, item.number);

    return (
        <Box variant="column" className="p-4">
            <Text variant="h4">{item.name}</Text>
            <Text variant="h2">{item.name === "Experience" ? '+'+currentNumber : currentNumber}</Text>
        </Box>
    )
}
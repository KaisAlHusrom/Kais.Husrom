import {Box, Text} from "@/components";

const SectionTitle = ({children}: {children:string}) => {
    return (
        <Box variant='center' className="w-full">
            <Text variant='title' className="
            bg-gradient-to-r 
            from-primary-dark 
            to-primary-light 
            bg-clip-text 
            text-transparent
            border-b-primary
            border-b-2
            rounded-r-3xl
            ">
                {children}
            </Text>
        </Box>
    )
}

export default SectionTitle

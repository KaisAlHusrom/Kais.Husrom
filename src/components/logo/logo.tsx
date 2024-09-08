import { useTheme } from '@/hooks'
import Box from '../box/box'
import { Images } from '@/assets'

const Logo = () => {
    const { theme } = useTheme()
    
    return (
        <Box variant='center' className='w-[80px] h-[50px]'>
            <img src={theme === "dark" ? Images.darkLogo : Images.lightLogo} width='100%' height='100%' className='object-contain' />
        </Box>
    )
}

export default Logo
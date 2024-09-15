import { useTheme } from '@/hooks'
import Box from '../box/box'
import { Images } from '@/assets'
import { useMemo } from 'react'

const Logo = (props: { size?: "sm" | "md" | "lg" }) => {
    const {
        size = "md"
    } = props
    
    const { theme } = useTheme()
    
    const fixedSize = useMemo(() => {
        return {
            width: size === "sm" ? '60px' : size === "md" ? '80px' : '100px',
            height: size === "sm" ? '30px' : size === "md" ? '50px' : '80px'
        }
    }, [size])

    return (
        <Box variant='center' style={fixedSize}>
            <img 
                src={theme === "dark" ? Images.darkLogo : Images.lightLogo} 
                alt="Logo"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
        </Box>
    )
}

export default Logo
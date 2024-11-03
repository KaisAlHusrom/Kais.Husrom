import { Github, Linkedin, Phone } from 'lucide-react';
import { Button } from '../ui';
import { NavLink } from 'react-router-dom';

const socialMedia = [
    {
        name: 'linkedin',
        href: 'https://www.linkedin.com/in/kais-al-husrom-943b48233/',
        Icon: Linkedin,
    },
    {
        name: 'github',
        href: 'https://github.com/KaisAlHusrom',
        Icon: Github,
    },
    {
        name: 'whatsapp',
        href: 'https://wa.me/+905372957830',
        Icon: Phone,
    },
];

const SocialMedia = () => {
    return socialMedia.map((socialMedia, key) => {
        return (
            <Button
                key={key}
                variant='link'
                size='icon'
                className='hover:text-primary'
            >
                <NavLink target='_blank' to={socialMedia.href}>
                    <socialMedia.Icon />
                </NavLink>
            </Button>
        );
    });
};

export default SocialMedia;

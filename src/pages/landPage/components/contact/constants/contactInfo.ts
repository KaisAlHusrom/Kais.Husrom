import IContactInfo from "@/types/IContactInfo";
import { LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";

const contactInfo : IContactInfo[] = [
    {
        icon: PhoneIcon,
        name: 'Phone',
        value: '+905372957830'
    },
    {
        icon: MailIcon,
        name: 'Email',
        value: 'kais.al.husrom@gmail.com'
    },
    {
        icon: LinkedinIcon,
        name: 'LinkedIn',
        value: 'https://www.linkedin.com/in/kais-al-husrom-943b48233/',
        link: true,
        caption: "My LinkedIn profile"
    },
    
]

export default contactInfo;
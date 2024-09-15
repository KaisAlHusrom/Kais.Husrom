import { BracesIcon, CircleDollarSignIcon, HeadsetIcon, PanelsTopLeftIcon, ProportionsIcon, SquareCodeIcon } from "lucide-react";
import IService from "./types/Iservice";

const radius = 250; // Half of the Box width/height (700px / 2)
const sensitivityFactor = 0.005; // Adjust this value to control rotation sensitivity
const friction = 0.95; // Friction factor (0-1), lower values will make it stop faster
const minVelocity = 0.001; // Minimum velocity to keep rotating

const services : Array<IService> = [
    { 
        id: 1, 
        icon: SquareCodeIcon, 
        text: "Application Development",
        description: `
        Transforming ideas into intuitive, high-performing mobile applications with clean, 
        efficient code. From concept to deployment, custom app solutions are designed to deliver 
        seamless user experiences and meet specific needs.
        `
    },
    {
        id: 2, 
        icon: PanelsTopLeftIcon, 
        text: "Web Development",
        description: `
        Transforming ideas into dynamic, responsive websites with clean, 
        effective code. From simple landing pages to complex web apps, 
        custom solutions are crafted to bring visions to life.
        `,
    },
    { 
        id: 3, 
        icon: CircleDollarSignIcon, 
        text: "SEO Optimization",
        description: `
        Enhancing online visibility with expert SEO services. Tailored strategies 
        improve search engine rankings, drive organic traffic, and increase your website's authority. 
        Comprehensive SEO solutions include keyword optimization, content creation, and technical 
        enhancements to boost your digital presence and attract more relevant visitors.
        `
    },
    {
        id: 4,
        icon: ProportionsIcon,
        text: "Responsive Design",
        description: `
        Ensuring websites and applications are fully responsive and optimized for all devices. 
        Custom solutions adapt seamlessly to various screen sizes, providing an exceptional user experience 
        across desktops, tablets, and mobile devices.
        `
    },
    {
        id: 5,
        icon: BracesIcon, 
        text: "Clean Code",
        description: `
        Delivering clean, maintainable code that ensures high performance and easy scalability. 
        Emphasis is placed on writing code that is well-organized, efficient, and easy to understand, 
        facilitating long-term project success and adaptability.
        `
    },
    {
        id: 6,
        icon: HeadsetIcon, 
        text: "Prompt Support",
        description: `
        Providing fast and effective communication to address any queries or issues. 
        Responsive support ensures that all client needs are promptly met, facilitating smooth project 
        management and quick resolution of any concerns.
        `
    }
    // Add more services as needed
];


export {
    radius,
    sensitivityFactor,
    friction,
    minVelocity,
    services
};

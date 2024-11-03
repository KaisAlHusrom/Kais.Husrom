import ChatNotif from "@/assets/images/ChatNotif";
import cliserImages from "@/assets/images/Cliser";
import EduMeeting from "@/assets/images/EduMeeting";
import itsnoloji from "@/assets/images/itsnoloji";
import stylexpo from "@/assets/images/stylexpo";
import { describe } from "node:test";

const projects = [
    {
        id: 1,
        name: "CLISER - Customizable Website Builder",
        description: `
        CLISER is a powerful website builder offering complete control over styling and content. Key features include intuitive design tools, flexible updates, access to default and custom templates, and dedicated admin tools for easy template management. With fully responsive designs, users enjoy ease of use, creative freedom, and the ability to produce high-quality, professional websites effortlessly
        `,
        // github: "https://github.com/Kais-Alfonso/chat-application",
        stack: ["React", "Redux", "Laravel", "Material UI", "MySql"],
        images: cliserImages,
    },
    {
        id: 2,
        name: "Chat Web Application",
        description: `
        This conversational application has undergone meticulous development employing the React Framework and Java Spring Boot This reflects a dedicated pursuit of advanced technology and robust security measures.

The platform adeptly converges user-friendliness with stringent security protocols. At its core, the application relies on an advanced friendship system, offering a unique avenue for engaging with your contacts.
`,
        github: "https://github.com/KaisAlHusrom/CHATNOTIF_CLIENT",
        stack: ["React", "Redux", "Socket.IO", "Spring Boot", "Java", "PostgreSQL", "Full Stack Development"],
        images: ChatNotif,
    },
    {
        id: 3,
        name: "Premium Social Media Services ",
        description: `
         A cutting-edge e-commerce platform specializing in social media services and custom digital cards, designed to elevate online engagement and offer personalized digital solutions.
`,
        github: "https://github.com/KaisAlHusrom/Premium_Social_Media_Services_Client",
        stack: ["React", "Redux", "Laravel", "PHP", "Material UI"],
        images: itsnoloji,
    },
    {
        id: 4, 
        name: "CCServices web application",
        description: `Explore the world with the CCServices web application, offering city information, real-time weather updates, and currency conversion. Enjoy a seamless experience across all devices with a responsive design and intuitive state management.
        `,
        github: 'https://github.com/KaisAlHusrom/CityWeatherService',
        stack: ['React', "javascript", "Redux", "API", "Material UI"],
        images: []
    }, 
    {
        id: 5,
        name: "E-commerce web project (full-stack laravel)",
        description: `An e-commerce website developed with Laravel delivers a seamless online shopping experience. It features secure management of user data, product information, and orders. The admin can easily manage site settings, content, and categories, ensuring a well-organized and efficient platform for both buyers and sellers.`,
        // github: 'https://github.com/KaisAlHusrom/CityWeatherService',
        stack: ["Laravel", "PHP", "MySql", "Javascript", "JQuery"],
        images: stylexpo
    },
    {
        id: 6,
        name: "Edu Meeting Land page",
        description: `Discover an innovative educational website built with the power of React, featuring two core pages designed for seamless navigation and user engagement:
1- Homepage:
An engaging landing page that showcases detailed information about the website and its offerings.

2- Educational Meetings Page:
An organized space where all meetings are displayed as individual pages, complete with a convenient search function to help users find the exact meetings they're looking for through intuitive categories.`,
        github: 'https://kaisalhusrom.github.io/first_front_end_react_project/',
        stack: ["React", "CSS", "HTML", "Javascript"],
        images: EduMeeting,
    },
]

export default projects;
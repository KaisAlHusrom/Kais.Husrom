// src/assets/images/Cliser/index.ts

const chatNotifImages = import.meta.glob('./*.{png,jpg,jpeg,gif,svg}', { 
    eager: true,
    as: 'url'
});

export default Object.values(chatNotifImages);
// src/assets/images/Cliser/index.ts

const cliserImages = import.meta.glob('./*.{png,jpg,jpeg,gif,svg}', { 
    eager: true,
    as: 'url'
});

export default Object.values(cliserImages);
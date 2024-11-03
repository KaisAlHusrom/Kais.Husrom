

const itsnologyImages = import.meta.glob('./*.{png,jpg,jpeg,gif,svg}', { 
    eager: true,
    as: 'url'
});

export default Object.values(itsnologyImages);
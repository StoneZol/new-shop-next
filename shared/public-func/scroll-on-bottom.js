const scrollOnBottom = (e, func, additionalConditions) => {
    let threshold;
    const screenWidth = window.innerWidth;
    switch (true) {
        case screenWidth <= 770:
            threshold = 2602;
            break;
        case screenWidth <= 1199:
            threshold = 1498;
            break;
        default:
            threshold = 1192;
            break;
    }
    const remainingScroll = e.target.documentElement.scrollHeight - 
        (e.target.documentElement.scrollTop + window.innerHeight);
    if (remainingScroll <= threshold && additionalConditions()) {
        func();
    }
};

export default scrollOnBottom;

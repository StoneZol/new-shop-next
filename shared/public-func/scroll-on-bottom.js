const scrollOnBootom = (e, func, additionalConditions) => {
    const scrollOffset =
        e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight);
    if (scrollOffset < 10 && additionalConditions()) {
        func();
    } 
};

export default scrollOnBootom
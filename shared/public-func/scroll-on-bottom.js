const scrollOnBootom = (e, limit ,func, additionalConditions) => {
    const scrollOffset =
        e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight);
    if (scrollOffset < limit && additionalConditions()) {
        func();
    }
};

export default scrollOnBootom
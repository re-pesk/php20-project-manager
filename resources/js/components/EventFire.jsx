const eventFire = (el, etype) => {
    if (el.fireEvent) {
        el.fireEvent(`on${etype}`);
    } else {
        const evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
};

export default eventFire;

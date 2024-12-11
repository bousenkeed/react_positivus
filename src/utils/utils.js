// прокрутка по ссылке по странице

const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
};
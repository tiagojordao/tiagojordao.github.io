function goToByIdWithScroll(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}
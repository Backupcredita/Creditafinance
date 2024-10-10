document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.banks-affiliated');
    const content = document.querySelector('.banks-strip');
    let isHovered = false;

    // Pause and resume animation on hover
    container.addEventListener('mouseover', () => {
        isHovered = true;
        content.style.animationPlayState = 'paused'; // Pause the animation
    });

    container.addEventListener('mouseout', () => {
        isHovered = false;
        content.style.animationPlayState = 'running'; // Resume the animation
    });

    // Control scroll position with mouse movement
    container.addEventListener('mousemove', (event) => {
        if (isHovered) {
            const containerRect = container.getBoundingClientRect();
            const offsetX = event.clientX - containerRect.left;
            const scrollPercentage = offsetX / containerRect.width;
            const maxScroll = content.scrollWidth - containerRect.width;
            content.style.transform = `translateX(${-scrollPercentage * maxScroll}px)`;
        }
    });
});

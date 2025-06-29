function scrollBestSellers(direction) {
    const container = document.querySelector('.product-grid');
    const scrollAmount = 220; // Adjust based on card width
    container.scrollLeft += direction * scrollAmount;
}



function toggleDescription(descriptionId, imageId) {
    const descriptionElement = document.getElementById(descriptionId);
    const imageElement = document.getElementById(imageId);

    if (descriptionElement.style.display === 'none' || descriptionElement.style.display === '') {
        descriptionElement.style.display = 'block'; // Show the description
        imageElement.style.display = 'block'; // Show the image
    } else {
        descriptionElement.style.display = 'none'; // Hide the description
        imageElement.style.display = 'none'; // Hide the image
    }
}


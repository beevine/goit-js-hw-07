import { galleryItems } from "./gallery-items.js";
// Change code below this line

// gallery markup
const galleryContainer = document.querySelector(".gallery");

const markup = galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" 
            alt="${description}" />
        </a>`;
});

galleryContainer.insertAdjacentHTML("beforeend", markup.join(""));

console.log(galleryItems);

var lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});

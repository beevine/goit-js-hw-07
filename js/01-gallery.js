// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента < img > в модальному вікні перед відкриттям.
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

import { galleryItems } from "./gallery-items.js";
// Change code below this line

//gallery markup
const galleryContainer = document.querySelector(".gallery");

const markup = galleryItems.map(({ preview, original, description }) => {
  return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`;
});

galleryContainer.insertAdjacentHTML("beforeend", markup.join(""));

// allows images to be opened in modal
galleryContainer.addEventListener("click", openModal);
let instance = basicLightbox.create(`<img src="" width="800" height="600">`);

function openModal(event) {
  event.preventDefault();
  console.log(event);
  if (event.target.nodeName !== "IMG") return;
  instance.element().querySelector("img").src = event.target.dataset.source;
  instance.show();
}

// closes img on esc:
window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    instance.close();
  }
});

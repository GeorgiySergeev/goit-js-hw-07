import { galleryItems } from "./gallery-items.js";

const galleryBox = document.querySelector(".gallery");

const markup = galleryItems.map(
  ({ preview, original, description }) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`
);
galleryBox.insertAdjacentHTML("beforeend", markup.join(""));

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

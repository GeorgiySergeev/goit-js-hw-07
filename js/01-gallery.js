import { galleryItems } from "./gallery-items.js";

const galleryBox = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");

galleryBox.insertAdjacentHTML("beforeend", markup);

galleryBox.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const curretElement = evt.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${curretElement}">
`);
  instance.show();

  galleryBox.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") instance.close();
  });
}

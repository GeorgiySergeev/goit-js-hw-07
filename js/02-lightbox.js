import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector(".gallery");
console.log(galleryBox);

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`
  )
  .join("");

galleryBox.insertAdjacentHTML("beforeend", markup);

galleryBox.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();

  let description = evt.srcElement.alt;

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
 

    new SimpleLightbox(".gallery a", {
   
    captionType: description,
  
    captionDelay: 250,
  });
  
}

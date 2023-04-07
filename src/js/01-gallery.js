// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
// Change code below this line
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createGallery } from '../helpers/createGallery';

const galleryContainer = document.querySelector('.gallery');
const galleryCards = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryCards);


const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});



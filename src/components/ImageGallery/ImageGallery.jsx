import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li key={image.id} className={styles.galleryItem}>
          <ImageCard
            imageUrl={image.urls.small}
            alt={image.alt_description}
            onClick={() => onImageClick(image.urls.regular)} 
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;


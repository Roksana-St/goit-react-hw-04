import React, { useState } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import ImageModal from '../ImageModal/ImageModal';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (imageUrl, alt) => {
    setSelectedImage({ imageUrl, alt });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <ul className={styles.gallery}>
        {images.map(image => (
          <li key={image.id}>
            <ImageCard
              image={image}
              onClick={() => openModal(image.urls.regular, image.alt_description)} 
            />
          </li>
        ))}
      </ul>

      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          imageUrl={selectedImage.imageUrl}
          alt={selectedImage.alt}
        />
      )}
    </>
  );
};

export default ImageGallery;

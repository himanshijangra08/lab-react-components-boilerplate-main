// ImageGallery.jsx
import React from 'react';
import './ImageGallery.css'; // Import CSS for image gallery styling

const ImageGallery = ({ imageData }) => {
  return (
    <div className="image-gallery">
      {imageData.map(image => (
        <div key={image.id} className="column">
          <img src={image.img} alt=""></img>
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;

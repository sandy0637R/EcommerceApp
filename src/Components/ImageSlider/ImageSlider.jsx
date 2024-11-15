import React, { useEffect, useState } from 'react';
import './ImageSlider.css'; 

const ImageSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const images = [
    { src: '/assets/banner1.webp', alt: 'Image 1', caption: '' },
    { src: '/assets/banner2.webp', alt: 'Image 2', caption: '' },
    { src: '/assets/banner3.webp', alt: 'Image 3', caption: '' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images]);

  const showSlides = (n) => {
    setSlideIndex(n);
  };

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => (prevIndex + n + images.length) % images.length);
  };

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div className={`mySlides fade ${index === slideIndex ? 'active' : ''}`} key={index}>
          <div className="numbertext">{index + 1} / {images.length}</div>
          <img src={image.src} alt={image.alt} className="slide-image" />
          <div className="text">{image.caption}</div>
        </div>
      ))}

      {/* Next and previous buttons */}
      <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
      <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>

      {/* The dots/circles */}
      <div style={{ textAlign: 'center' }}>
        {images.map((_, index) => (
          <span className="dot" key={index} onClick={() => showSlides(index)}></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

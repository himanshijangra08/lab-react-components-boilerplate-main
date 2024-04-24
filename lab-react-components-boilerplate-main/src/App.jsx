import React from 'react';
import './App.css';
import lake from "./image/lake.JPG";
import Header from './components/Header';
import ImageGallery from './components/ImageGallery';
import Footer from './components/Footer';

const imageData = [
  {
    id: 1,
    img: lake
  },
  {
    id: 2,
    img: lake
  },
  {
    id: 3,
    img: lake
  },
  {
    id: 4,
    img: lake
  }
];

function App() {
  return (
    <div>
      <Header />
      <div className="image-gallery">
        <ImageGallery imageData={imageData} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

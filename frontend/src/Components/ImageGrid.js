import React, { useState, useEffect } from 'react';
import axios from 'axios';
import loaderGif from "./loader.gif";
import errorIcon from "./error.png";

const ImageGrid = ({ query }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=> {
    let isMounted = true;
    setLoading(true);
    setError(null);
    axios.get(
      `https://image-quest-backend.onrender.com/images?q=${encodeURIComponent(query)}`
      )
      .then((response)=>{
        const fetchedImages = response.data;
        if(isMounted){
          setImages(fetchedImages);
          setLoading(false);
        }
      })
      .catch((error)=>{
        setError("Sorry, an error occurred while fetching the images.");
        setLoading(false);
      })
      return ()=>{
      isMounted = false;
     }
  },[query])

  if (loading) { 
    return <div className='info'>
      <img className='info-img' src={loaderGif} alt="Loading..." />
      Loading images...
      </div>;
   }
  if (error) {
    return <div className='info'>
          <img className='error-img' src={errorIcon} alt="Loading..." />
      {error}
      </div>;
  }
  if (images.length === 0) {
    return <div className='info'>No images found for "{query}"</div>;
  }

  return (
    <div className="image-grid">
      {images.map((image) => (
        <img key={image.id} src={image.webformatURL} alt={image.tags} />
      ))}
    </div>
  );
};

export default ImageGrid;
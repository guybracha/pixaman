import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, useLocation } from 'react-router-dom';


export default function Pixa() {
    const [searchTerm, setSearchTerm] = useState('');
    const [images, setImages] = useState([]);
    const location = useLocation();

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(()=>{
        const searchParams = new URLSearchParams(location.search);
        const query = searchParams.get('s');
        if(query){
            setSearchTerm(query);
            handleSubmit(query);
        }
    },[location.search]);

    const handleSubmit = async () => {
        try {
            const response = await fetch(`https://pixabay.com/api/?key=37725425-2e21d60d6e733a35f95696bf6&q=${searchTerm}&image_type=photo`);
            const data = await response.json();
            setImages(data.hits);
        } catch(error) {
            console.error('Error fetching', error);
        }
    }
    
    return (
        <div className='container window-Pixa'>
          <input type="text" value={searchTerm} onChange={handleChange} />
          <button onClick={() => handleSubmit(searchTerm)} className="btn btn-primary">Search</button>
          <div className="row">
            {images.map((image, index) => (
              <div key={image.id} className="col-md-3">
                <div className="card mb-4">
                  <a href={image.largeImageURL} target="_blank" rel="noopener noreferrer">
                    <img src={image.webformatURL} alt={image.tags} className="card-img-top" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
}
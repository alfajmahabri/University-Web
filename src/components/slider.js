import "./slider.css";
import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Slider() {
  
  const images = [
    'https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/Press-Advt-slider-scaled.jpg',
    'https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/Visiom-Waves-scaled.jpg',
    'https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/1000549504-scaled.jpg',
    'https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/1000549506-scaled.jpg',
    'https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/Liberal-Learning-scaled.jpg',
    'https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/Mr-Sanjay-Mohanty-Pramoted-in-Militory-scaled.jpg',
    'https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/1000542777-scaled.jpg'
  ];

  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, [images.length]);

  
  useEffect(() => {
    const onEsc = (e) => { if (e.key === 'Escape') setShowModal(false); };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, []);

  const prev = () => setIndex(i => (i - 1 + images.length) % images.length);
  const next = () => setIndex(i => (i + 1) % images.length);
  // eslint-disable-next-line no-unused-vars
  const goTo = (i) => setIndex(i);

  const closeModal = () => setShowModal(false);
  const handleEnquire = () => {
    setShowModal(false);
    
  };

  return (
    <div className="sliderbox">
      {showModal && (
        <div className="modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close">×</button>
            <h2>Admission Open</h2>
            <button className="enquire-btn" onClick={handleEnquire}>Enquire Now</button>
          </div>
        </div>
      )}

      <div className="slider">
        <div
          className="slides"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <div className="slide" key={i}>
              <img src={src} alt={`slide-${i}`} />
            </div>
          ))}
        </div>

        <button className="prev" onClick={prev} aria-label="Previous">‹</button>
        <button className="next" onClick={next} aria-label="Next">›</button>

      </div>

      <div className="card">
        <div className="info">
            <Card>
              <CardContent>
                  <Typography variant="h5" component="div">
                        29K+
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      Students
                  </Typography>
              </CardContent>
          </Card>
        </div>
        <div className="info">
            <Card>
              <CardContent>
                  <Typography variant="h5" component="div">
                        100%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      Placement
                  </Typography>
              </CardContent>
          </Card>
        </div>
        <div className="info">
            <Card>
              <CardContent>
                  <Typography variant="h5" component="div">
                        64 LPA
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      Highesh Package
                  </Typography>
              </CardContent>
          </Card>
        </div>
        <div className="info">
            <Card>
              <CardContent>
                  <Typography variant="h5" component="div">
                        4.9LPA
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      Average Package
                  </Typography>
              </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}



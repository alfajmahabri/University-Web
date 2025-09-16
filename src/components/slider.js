import "./slider.css";
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Slider() {
  return (
    <div className="sliderbox"> 
        <img src="https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/Slider-1-2-1-scaled.jpg"></img>
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



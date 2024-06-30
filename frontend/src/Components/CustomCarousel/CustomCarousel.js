import React from 'react';
import { Box, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS
import "./styles.css"; // Custom styles
import thumbnail1 from '../../assets/thumbnails/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnails/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnails/thumbnail3.png';

const CustomCarousel = () => {
  return (
    <Box sx={{ margin: 'auto' }}>
      <Carousel showThumbs={false} infiniteLoop autoPlay interval={3000} showStatus={false}>
        <Box className="carousel-slide" sx={{ position: 'relative' }}>
          <img src={thumbnail1} alt="Slide 1" />
          <Typography variant="h4" className="carousel-caption">Best Deal on Laptops Refurbished</Typography>
        </Box>
        <Box className="carousel-slide" sx={{ position: 'relative' }}>
          <img src={thumbnail2} alt="Slide 2" />
          <Typography variant="h4" className="carousel-caption">Save Big on Tech!</Typography>
        </Box>
        <Box className="carousel-slide" sx={{ position: 'relative' }}>
          <img src={thumbnail3} alt="Slide 3" />
          <Typography variant="h4" className="carousel-caption">Quality Refurbished Laptops</Typography>
        </Box>
      </Carousel>
    </Box>
  );
};

export default CustomCarousel;

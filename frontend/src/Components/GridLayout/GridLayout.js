// GridLayout.js
import React from 'react';
import { Grid } from '@mui/material';
import BoxComponent from './BoxComponent';
import banner1 from '../../assets/banners/banner1.png';
import banner2 from '../../assets/banners/banner2.png';
import banner3 from '../../assets/banners/banner3.png';
import { useNavigate } from 'react-router-dom';

const GridLayout = () => {
    const navigate = useNavigate();

    return (
        <Grid
            container
            spacing={2}
            sx={{
                padding: 2,
                '@media (max-width: 800px)': {
                    flexDirection: 'column',
                },
            }}
        >
            <Grid item xs={12} md={4}>
                <BoxComponent imageSrc={banner1} onClick={() => navigate("/main")}/>
            </Grid>
            <Grid item xs={12} md={4}>
                <BoxComponent imageSrc={banner2} onClick={() => navigate("/main")}/>
            </Grid>
            <Grid item xs={12} md={4}>
                <BoxComponent imageSrc={banner3} onClick={() => navigate("/main")}/>
            </Grid>
        </Grid>
    );
};

export default GridLayout;

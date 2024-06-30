// GridLayout.js
import React from 'react';
import { Grid } from '@mui/material';
import BoxComponent from './BoxComponent';
import banner1 from '../../assets/banners/banner1.png';
import banner2 from '../../assets/banners/banner2.png';
import banner3 from '../../assets/banners/banner3.png';

const GridLayout = () => {
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
                <BoxComponent imageSrc={banner1} />
            </Grid>
            <Grid item xs={12} md={4}>
                <BoxComponent imageSrc={banner2} />
            </Grid>
            <Grid item xs={12} md={4}>
                <BoxComponent imageSrc={banner3} />
            </Grid>
        </Grid>
    );
};

export default GridLayout;

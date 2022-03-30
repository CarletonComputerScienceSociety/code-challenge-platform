import React, {useEffect, useRef} from 'react';
import lottie from 'lottie-web';
import {Container, Box, Grid, Paper} from '@mui/material';


const HeaderAnimation = () => {
    const lottieDiv = useRef(null)
    useEffect(()=>{
        lottie.loadAnimation({
            container: lottieDiv.current,
            renderer: 'svg',
            loop: true,
            autoplay:true,
            animationData: require('./animation.json')
        })
    }, [])

    return (
        <Box ref={lottieDiv} sx={{ maxWidth: 480,
            textIndent: -20,
            maxHeight: 480,
            overflow: 'hidden',
        }}>        
        </Box>
    )

};


export { HeaderAnimation };
import React from 'react';
import "./style.css";
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Scan = () => {
    
  return (
    <>
    <Box>
       <Box 
        sx={{
            textAlign: 'center',
            paddingTop: '80px',
            paddingBottom: '90px',
            backgroundColor: "#71266c",
            '@media (max-width: 768px)' :{
                paddingTop: '40px',
            },
        }}
       >
        <img src="assets/images/vimto-logo.png" width="200" alt="vimto" />
        
       </Box>
       <Box className="main_bg">
         <img src="assets/images/App_bg.jpg" alt="bg" />
       </Box>
    </Box>
    <Box 
        className="camera_img"
        sx={{
          textAlign: "center",
        }}
    >
        <img src="assets/images/camera.jpg" alt="camera" />
    </Box>
    <Box
    sx={{
            textAlign: "center",
            padding: "20px 0",
        }} 
    >  
       <Link to="/" style={{ textDecoration: "none" }}>
       <Button 
        variant="contained"
        color="success"
        sx={{
            padding: '14px 40px',
            fontSize: '20px',
            backgroundColor: "#63a844",
            borderRadius: "10px",
            }}
        >
         BACK
       </Button>
       </Link>
    </Box>
    <Box
     className="bottom-bg"
     sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 20px",
        }}
    >
       <img src="assets/images/App_bg-1.png" />
       <img src="assets/images/App_bg-2.png" />
    </Box>
    </>
  )
}

export default Scan;

import React from 'react';
import "./style.css";
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';

const Home = () => {
  return (
    <>
    <Box>
       <Box 
        sx={{
            textAlign: 'center',
            paddingTop: '80px',
            paddingBottom: '20px',
            backgroundColor: "#71266c",
            '@media (max-width: 768px)' :{
                paddingTop: '40px',
            },
        }}
       >
        <img src="assets/images/vimto-logo.png" width="200" />
        <Typography 
         variant="h4"
         sx={{
            color: "#fff",
            fontSize: "38px",
            fontWeight: "600",
            marginTop: "20px",
            '@media (max-width: 768px)': {
                fontSize: "28px",
            },
         }}
         >
        Scan to see if you are a winner
        </Typography>
       </Box>
       <Box className="main_bg">
         <img src="assets/images/App_bg.jpg" />
       </Box>
    </Box>
    <Box
    sx={{
            textAlign: "center",
            padding: "20px 0",
        }} 
    >  
       <Link to="/scan" style={{ textDecoration: "none" }}>
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
         SCAN
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
       <Link to="/settings">
        <SettingsIcon />       
       </Link>
       <img src="assets/images/App_bg-2.png" />
    </Box>
    </>
  )
}

export default Home

import React from 'react';
import "./style.css";
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Winner = () => {
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
        Congratulations!
        </Typography>
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
        You are a winner 
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
        color="error"
        sx={{
            padding: '14px 40px',
            fontSize: '20px',
            // backgroundColor: "#4c4085",
            borderRadius: "10px",
            }}
        >
         HOMEPAGE
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

export default Winner;

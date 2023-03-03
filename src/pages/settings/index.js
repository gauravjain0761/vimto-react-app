import React from 'react';
import "./style.css";
import { styled } from '@mui/material/styles';
import { Box, Button, Stack, Switch, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';

const Settings = () => {

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));
    
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
        Settings Manual <SettingsIcon />
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
            '@media (max-width: 768px)':{
              display: "block",
            }
          }}
        >
          <Typography 
            variant="h6"
            sx={{
                color: "#fff",
                fontSize: "30px",
                fontWeight: "600",
                marginTop: "20px",
                '@media (max-width: 768px)': {
                    fontSize: "18px",
                },
            }}
            >
            Random winner between
            </Typography>
            <Box 
              sx={{ 
                display: "flex", 
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "10px",
                }}>
            <TextField 
              id="standard-basic" 
              label="2" 
              variant="standard"
              color="secondary" 
              style = {{width: "50px"}} 
              />
          <Typography 
            variant="h6"
            sx={{
                color: "#fff",
                fontSize: "30px",
                fontWeight: "600",
                marginTop: "20px",
                marginRight: "10px",
                marginLeft: "10px",
                '@media (max-width: 768px)': {
                    fontSize: "18px",
                },
            }}
            >
            and
            </Typography>
            <TextField 
              id="standard-basic" 
              label="4" 
              variant="standard"
              color="secondary" 
              style = {{width: "50px"}} 
              />
            <Typography 
            variant="h6"
            sx={{
                color: "#fff",
                fontSize: "30px",
                fontWeight: "600",
                marginTop: "20px",
                marginLeft: "10px",
                '@media (max-width: 768px)': {
                    fontSize: "18px",
                },
            }}
            >
            scans
            </Typography>
            </Box>
        </Box>
        <Box 
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
            '@media (max-width: 768px)':{
              display: "block",
            }
            }}
          >
          <Typography 
          variant="h6"
          sx={{
              color: "#fff",
              fontSize: "30px",
              fontWeight: "600",
              '@media (max-width: 768px)': {
                  fontSize: "18px",
              },
          }}
          >
          Force next scan to winner page
          </Typography>
          <Box>
          <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Typography
              sx={{
                  color: "#fff",
                  fontSize: "30px",
                  fontWeight: "600",
                  marginLeft: "20px",
                  marginRight: "6px",
                  '@media (max-width: 768px)': {
                      fontSize: "18px",
                  },
              }}
            >
            On
            </Typography>
            <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
            <Typography
              sx={{
                    color: "#fff",
                    fontSize: "30px",
                    fontWeight: "600",
                    marginLeft: "6px",
                    '@media (max-width: 768px)': {
                        fontSize: "18px",
                    },
                }}
            >
            Off
            </Typography>
          </Box>
          </Box>
      </Box>
       </Box>
       <Box className="main_bg">
         <img src="assets/images/App_bg.jpg" alt="bg" />
       </Box>
    </Box>
    <Box 
        className="setting_btn"
        sx={{
          textAlign: "center",
        }}
    >
        <Link to="/" style={{ textDecoration: "none" }}>
        <Button 
          variant="contained"
          color="error"
          sx={{
              padding: '14px 40px',
              fontSize: '20px',
              // backgroundColor: "#63a844",
              borderRadius: "10px",
              }}
          >
          HOMEPAGE
        </Button>
        </Link>
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
          RESET
        </Button>
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

export default Settings;

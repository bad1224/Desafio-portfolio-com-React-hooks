import { Box, Typography, Stack, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
      
        width: '100%',            
        minHeight: '182px',       
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',     
        bgcolor: 'background.default',
        opacity: 1,               
        pt: 20, 
        pb: 20,
  
        mr: { xs: 0, md: 20 }  

      }}
    >
      <Stack 
        direction="row" 
        spacing={4} 
        justifyContent="center" 
        sx={{ mb: 3 }}
      >
        {[
          { icon: <FacebookIcon sx={{ fontSize: 45 }} />, link: "https://www.facebook.com" },
          { icon: <InstagramIcon sx={{ fontSize: 45 }} />, link: "https://www.instagram.com" },
          { icon: <TwitterIcon sx={{ fontSize: 45 }} />, link: "https://www.twitter.com" },
          { icon: <LinkedInIcon sx={{ fontSize: 45 }} />, link: "https://www.linkedin.com/in/rudson-reiler-silva-santana-2078a634b" },
        ].map((item, index) => (
          <IconButton 
            key={index}
            href={item.link}
            target="_blank"           
            rel="noopener noreferrer" 
            sx={{ 
              color: (theme) => theme.palette.mode === 'light' ? '#21243D' : '#FFFFFF',
              '&:hover': { opacity: 0.7 }
            }}
          >
            {item.icon}
          </IconButton>
        ))}
      </Stack>

      <Typography 
        variant="body2" 
        sx={{ 
          
          fontFamily: 'Heebo, sans-serif', 
          fontWeight: 400,                 
          fontSize: '16px',               
          lineHeight: '100%',              
          letterSpacing: '0px',           
          textAlign: 'center',             
          color: 'text.primary'
        }}
      >
        Copyright ©2026 All rights reserved 
      </Typography>
    </Box>
  );
};

export default Footer;
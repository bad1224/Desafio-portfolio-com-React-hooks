import { Box, Stack, Typography, Link } from '@mui/material'; // 👈 Adicionamos o 'Link' aqui

const Header = () => {
  return (
    <Box 
      component="header" 
      sx={{ 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'flex-end', 
        pt: 3, 
        pr: { xs: 3, md: 10 }, 
        boxSizing: 'border-box' 
      }}
    >
      <Stack direction="row" spacing={4}>
        {['Projetos', 'Blog', 'Contato'].map((item) => (
         <Link 
            key={item} 
            href={`#${item.toLowerCase() === 'projetos' ? 'projects' : item.toLowerCase()}`} 
            sx={{ textDecoration: 'none' }}
          >
            <Typography 
              sx={{ 
                fontFamily: '"Heebo", sans-serif', 
                fontWeight: 700, 
                fontSize: '20px', 
                cursor: 'pointer',
                color: 'text.primary', 
                '&:hover': { color: '#FF6464' }
              }}
            >
              {item}
            </Typography>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default Header;
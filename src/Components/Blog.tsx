import { Box, Container, Typography, Stack, Paper, Link } from '@mui/material';
import './blog.css';

const Blog = () => {
  return (
  <Box 
    id="blog"
    sx={{ 
      backgroundColor: (theme) => 
        theme.palette.mode === 'light' ? '#EDF7FA' : '#181924', 
      boxShadow: (theme) => 
        theme.palette.mode === 'light' 
          ? '0px 4px 20px rgba(0,0,0,0.08)' 
          : '0px 10px 30px rgba(0,0,0,0.5)', 
      
      width: '100%', 
     
      ml: { xs: 0, md: -10 },
      mr: { xs: 0, md: 5 },

      minHeight: '250px', 
      display: 'flex',
      alignItems: 'center', 
      py: { xs: 5, md: 10 },
      borderRadius: '8px',
      
      overflow: 'visible' 
    }}>

      <Container 
        maxWidth={false}
        sx={{ 
          
          pl: { xs: 2, md: 43 }, 
          display: 'flex',
          flexDirection: 'column'
        }}
      > 
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
          <Typography variant="h6" sx= {{ color: 'text.primary', fontWeight: 400 }}>
            Blog
          </Typography>
          <Link href="blog" sx= {{ color: '#00A8CC', textDecoration: 'none' }}></Link>
           </Stack>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={10}>
          
          {/* Card 1 */}
          <Paper sx={{ 
            p: 6, 
            flex: { xs: '1 1 auto', md: '0 0 500px' }, 
            borderRadius: '4px', 
            boxShadow: '0px 4px 20px rgba(0,0,0,0.08)',
            minHeight: '350px', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center' 
          }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
              Criando um sistema de design do <br /> zero
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, fontSize: '18px' }}>
              25 Mar 2026  &nbsp;  &nbsp; Design, Rudson
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Neste artigo, exploro o processo de construção<br />
              de um Design System robusto . Escalável focando <br />
              na criação de componentes . Reutilizáveis e na consistência visual para aplicações modernas<br />
              utilizando React e Material UI.
            </Typography>
          </Paper>

          {/* Card 2 */}
          <Paper sx={{ 
            p: 6, 
            flex: { xs: '1 1 auto', md: '0 0 500px' }, 
            borderRadius: '4px', 
            boxShadow: '0px 4px 20px rgba(0,0,0,0.08)',
            minHeight: '350px', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
              Criando ícones perfeitos em pixels <br /> no Figma
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, fontSize: '18px' }}>
              25 Mar 2026 &nbsp;  &nbsp; Figma, Design de Ícones
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Uma análise sobre as tendências de interfaces de usuário
              focando em como o uso de cores.Tipografia <br />
              e espaçamento pode transformar. A experiência do usuário em plataformas 
              digitais de alto desempenho. digitais de alto desempenho
            </Typography>
          </Paper>

        </Stack>
      </Container>
    </Box>
  );
};

export default Blog;
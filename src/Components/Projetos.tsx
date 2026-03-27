import { Box , Typography, Stack, Divider, Chip } from '@mui/material';
import { Container } from '@mui/material';

const Projetos = () => {
  return (
    <Container maxWidth="xl" id="projects">
      <Box sx={{ mt: { xs: 5, md: 10 }, mb: 10, textAlign: 'left' }}></Box>
      
      <Typography 
        variant="h4" 
        sx={{ 
          fontWeight: 'bold', 
          mb: 4, 
          fontFamily: '"Heebo", sans-serif',
          color: '#21243D',
          textAlign: 'left',
          width: '100%',
          display: 'block'
        }}
      >
        Trabalhos em Destaque
      </Typography>

      <Stack spacing={4} sx={{ width: '100%' }}>
        {/* PROJETO 1 */}
        <Box sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' } }}>
          <Box
            component="img"
            src="/projeto1.jpg" 
            sx={{ 
              width: { xs: '100%', md: 246 }, 
              height: 180, 
              borderRadius: '6px', 
              objectFit: 'cover' 
            }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, fontFamily: '"Heebo", sans-serif' }}>
              Dashboard de Gestão
            </Typography>
            
            <Stack direction="row" alignItems="center" spacing={3} sx={{ mb: 2 }}>
              <Chip label="2026" sx={{ bgcolor: '#142850', color: 'white', fontWeight: 'bold', height: 25 }} />
              <Typography sx={{ color: 'text.secondary', fontFamily: '"Heebo", sans-serif' }}>Software Engineering</Typography>
            </Stack>

            <Typography sx={{ color: 'text.primary', lineHeight: 1.7, fontFamily: '"Heebo", sans-serif' }}>
              Desenvolvimento de interfaces focadas em performance e experiência do usuário. 
              Utilizando React e Material UI para criar soluções robustas e escaláveis.
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* PROJETO 2 */}
        <Box sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' } }}>
          <Box
            component="img"
            src="/projeto2.jpg" 
            sx={{ 
              width: { xs: '100%', md: 246 }, 
              height: 180, 
              borderRadius: '6px', 
              objectFit: 'cover' 
            }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, fontFamily: '"Heebo", sans-serif' }}>
              The Dev News
            </Typography>
            
            <Stack direction="row" alignItems="center" spacing={3} sx={{ mb: 2 }}>
              <Chip label="2026" sx={{ bgcolor: '#142850', color: 'white', fontWeight: 'bold', height: 25 }} />
              <Typography sx={{ color: 'text.secondary', fontFamily: '"Heebo", sans-serif' }}>Automação</Typography>
            </Stack>

            <Typography sx={{ color: 'text.primary', lineHeight: 1.7, fontFamily: '"Heebo", sans-serif' }}>
              Portal de notícias dinâmico integrado com APIs para fornecer informações 
              em tempo real sobre o mundo da tecnologia.
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />
      </Stack>
    </Container>
  );
};

export default Projetos;
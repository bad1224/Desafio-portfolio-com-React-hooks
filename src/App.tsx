import { useState, useEffect } from 'react'; 
import { ThemeProvider, createTheme, CssBaseline, Container, Box, Typography, Button, Divider, Stack, Chip } from '@mui/material';

import Header from './Components/Header';
import Blog from './Components/Blog';
import Footer from './Components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    console.log("O tema foi alterado!");
    document.title = `Portfólio Rudson - Modo ${darkMode ? 'Escuro' : 'Claro'}`;
  }, [darkMode]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#FF6464', 
      },
      background: {
        default: darkMode ? '#121212' : '#FFFFFF',
      }
    },
    typography: {
      fontFamily: 'Heebo, sans-serif',
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      
      <Header />

      {/* Seção Hero */}
      <Container maxWidth="xl">
        <Box sx={{ mt: { xs: 5, md: 10 }, mb: 10, textAlign: 'left' }}>
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ fontWeight: 'bold', color: 'text.primary', mb: 2 }}
          >
            Olá, eu sou Rudson <br />
            Desenvolvedor Front-end
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ 
              color: (theme) => theme.palette.mode === 'dark' ? '#fff' : '#21243D', 
              maxWidth: '700px', 
              mb: 4, 
              fontSize: '19px',      
              lineHeight: '1.6',     
              textAlign: 'left' 
            }}
          >
            Desenvolvedor focado em criar soluções digitais inteligentes e automações 
            de alto impacto. Com domínio das tecnologias fundamentais HTML5, CSS3 e 
            JavaScript , utilizo o ecossistema React com TypeScript e Node.js para 
            construir interfaces modernas e sistemas eficientes. Meu objetivo é 
            transformar lógica em código de alto desempenho e experiências intuitivas.
          </Typography>

          {/* ✅ BOTÃO DE DOWNLOAD */}
          <a 
            href="/curriculo-rudson.pdf" 
            download="curriculo_Rudson_FrontEnd.pdf" 
            style={{ textDecoration: 'none' }}
          >
            <Button 
              variant="contained" 
              size="large"
              sx={{ 
                backgroundColor: '#FF6464', 
                color:'#FFFFFF',
                '&:hover': { backgroundColor: '#e55a5a' },
                textTransform: 'none',
                borderRadius: '2px',
                px: 6,
                py: 1.5,
                fontSize: '20px',
                fontWeight: '500',
                boxShadow: '0 4px 10px rgba(255, 100, 100, 0.3)',
              }}
            >
              Download Resume
            </Button>
          </a>
  
          <Box sx={{ mt: 5 }}>
            <Button onClick={() => setDarkMode(!darkMode)} variant="outlined" size="small">
              Alternar para modo {darkMode ? 'Claro' : 'Escuro'}
            </Button>
          </Box>
          
          <Box sx={{ mt: 6 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: 'text.primary' }}>
              Minhas Habilidades & Tecnologias
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              <Chip label="React" variant="outlined" color="primary" sx={{ fontWeight: 'bold' }} />
              <Chip label="JavaScript" variant="outlined" color="primary" sx={{ fontWeight: 'bold' }} />
              <Chip label="TypeScript" variant="outlined" color="primary" sx={{ fontWeight: 'bold' }} />
              <Chip label="HTML5" variant="outlined" color="primary" sx={{ fontWeight: 'bold' }} />
              <Chip label="CSS3" variant="outlined" color="primary" sx={{ fontWeight: 'bold' }} />
              <Chip label="Material UI" variant="outlined" color="primary" sx={{ fontWeight: 'bold' }} />
              <Chip label="Node.js" variant="outlined" color="primary" sx={{ fontWeight: 'bold' }} />
              <Chip label="Git" variant="outlined" color="primary" sx={{ fontWeight: 'bold' }} />
            </Stack>
          </Box>
        </Box>
      </Container>
      
      <Blog />

      {/* Seção Projetos */}
      <Container maxWidth="xl" id="projects" sx={{ py: 8 }}>
        <Typography variant="h6" sx={{ mb: 4, fontWeight: 400 }}>
          Projetos 
        </Typography>

        <Stack spacing={4}>
          {/* PROJETO 1 */}
          <Box sx={{ display: 'flex', gap: 10, flexDirection: { xs: 'column', md: 'row' } }}>
            <Box
              component="img"
              src="https://img.freepik.com/vetores-gratis/modelo-de-painel-do-usuario-do-painel_52683-31485.jpg"         
              sx={{ width: { xs: '100%', md: 246 }, height: 180, borderRadius: '6px', objectFit: 'cover' }}
            />
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                Dashboard de Tarefas Inteligente
              </Typography>
              
              <Stack direction="row" alignItems="center" spacing={3} sx={{ mb: 2 }}>
                <Chip label="2025" sx={{ bgcolor: '#142850', color: 'white', fontWeight: 'bold', height: 25 }} />
                <Typography sx={{ color: 'text.primary' }}>Desenvolvimento Web</Typography>
              </Stack>

              <Typography sx={{ color: 'text.primary', lineHeight: 1.7 }}>
                Sistema de gestão de produtividade integrado à API Sheet Monkey para persistência de dados em tempo real. 
                Focado em manipulação dinâmica de DOM e arquitetura limpa em JavaScript para controle de fluxo de trabalho. 
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* PROJETO 2 */}
          <Box sx={{ display: 'flex', gap: 10, flexDirection: { xs: 'column', md: 'row' } }}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=246&h=180&fit=crop" 
              sx={{ width: { xs: '100%', md: 246 }, height: 180, borderRadius: '6px', objectFit: 'cover' }}
            />
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                The Dev News Portal de Conteúdo Tecnológico
              </Typography>
              
              <Stack direction="row" alignItems="center" spacing={3} sx={{ mb: 2 }}>
                <Chip label="2025" sx= {{ bgcolor: '#142850', color: 'white', fontWeight: 'bold', height: 25 }} />
                <Typography sx={{ color: 'text.primary' }}>Arquitetura && UI/UX </Typography>
              </Stack>

              <Typography sx={{ color: 'text.primary', lineHeight: 1.7 }}>
               Desenvolvimento de um portal responsivo com foco em arquitetura de 
               informação e fidelidade ao design (Figma).CSS e HTML avançado
               (Flexbox/Grid) e Media Queries para garantir uma experiência fluida em 
               qualquer dispositivo.
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 4 }} />
            
          {/* PROJETO 3 */}
          <Box sx={{ display: 'flex', gap: 10, flexDirection: { xs: 'column', md: 'row' } }}>
            <Box
              component="img"
              src="https://img.freepik.com/vetores-gratis/pagina-de-destino-de-tecnologia-minima-de-design-plano_23-2149056378.jpg" 
              sx={{ width: { xs: '100%', md: 246 }, height: 180, borderRadius: '6px', objectFit: 'cover' }}
            />
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                Landing Page Tecnologia & Performance
              </Typography>
              
              <Stack direction="row" alignItems="center" spacing={3} sx={{ mb: 2 }}>
                <Chip label="2025" sx={{ bgcolor: '#142850', color: 'white', fontWeight: 'bold', height: 25 }} />
                <Typography sx={{ color: 'text.primary' }}> UI/UX </Typography>
              </Stack>

              <Typography sx={{ color: 'text.primary', lineHeight: 1.7 }}>
                Desenvolvimento de uma página de captura otimizada para conversão, com foco em design responsivo e estética moderna. 
                Implementação de elementos visuais estratégicos e chamadas para ação (CTAs) baseadas em princípios de experiência do usuário.
                HTML5 , CSS3 e JavaScript.
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ my: 4 }} />
        </Stack>
      </Container>

      <Box id="contato">
        <Footer /> 
      </Box>

    </ThemeProvider>
  );
}

export default App;
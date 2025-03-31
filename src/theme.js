import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8B1F2C', // Rich burgundy
      light: '#A63D48',
      dark: '#6B0F1A',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#C4B1A8', // Warm taupe
      light: '#D8CBC4',
      dark: '#A69086',
      contrastText: '#2D1518',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FBF9F9',
    },
    text: {
      primary: '#2D1518', // Deep burgundy text
      secondary: '#594145', // Muted burgundy
    },
    grey: {
      100: '#F5F2F2',
      200: '#E8E3E3',
      300: '#D1C7C8',
      400: '#B3A5A7',
      500: '#957D80',
      600: '#715B5E',
      700: '#594145',
      800: '#2D1518',
    },
    burgundy: {
      50: '#FDF5F6',
      100: '#F9E4E6',
      200: '#F0BFC4',
      300: '#E69AA1',
      400: '#D6707A',
      500: '#C24552',
      600: '#A63D48',
      700: '#8B1F2C',
      800: '#6B0F1A',
      900: '#4A0910',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      color: '#2D3748',
      letterSpacing: '-0.02em',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      color: '#2D3748',
      letterSpacing: '-0.01em',
      '@media (max-width:600px)': {
        fontSize: '1.8rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      color: '#2D3748',
      letterSpacing: '-0.01em',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
      color: '#4A5568',
      letterSpacing: '0.01em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          textTransform: 'none',
          padding: '12px 28px',
          fontSize: '1rem',
          fontWeight: 500,
          transition: 'all 0.2s ease-in-out',
        },
        contained: {
          boxShadow: '0 2px 4px rgba(139, 31, 44, 0.15)',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(139, 31, 44, 0.25)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderWidth: 2,
          borderColor: 'rgba(139, 31, 44, 0.5)',
          '&:hover': {
            borderWidth: 2,
            borderColor: '#8B1F2C',
            backgroundColor: 'rgba(139, 31, 44, 0.05)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 2px 6px rgba(139, 31, 44, 0.08)',
          transition: 'all 0.3s ease-in-out',
          border: '1px solid',
          borderColor: 'rgba(139, 31, 44, 0.1)',
          backgroundColor: '#FFFFFF',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 6px 16px rgba(139, 31, 44, 0.12)',
          },
        },
      },
    },
  },
});

export default theme;

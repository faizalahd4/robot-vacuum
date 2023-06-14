/**
 * Theme
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
import { createTheme }  from '@mui/material/styles';

const theme = createTheme({
    palette: {
        text: {
          primary: '#2d3436',
        },
        primary: {
          main: '#1876d2', 
        },
        secondary: {
          main: '#c0392b', 
          light: '#e3e5e7',
          dark: '#dfe3e6',
        },
        background: {
          default: '#d9d9d9', 
          paper: '#FFFFFF', 
        },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            '&:hover': {
              backgroundColor: '#1876d2',
              color: '#fff',
            },
          },
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
})
export default theme
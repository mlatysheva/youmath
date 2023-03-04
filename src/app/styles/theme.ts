import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
  palette: {
    primary: {
      main: '#245353', // Dark green
      light: '#CDE2D9', // Light green
      contrastText: '#fff', //white
    }, 
    secondary:  {
      main: '#3E5372', // Dark blue
      light: '#CDE2D9', // Light green    
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 20,
          height: '2.5rem',
          fontWeight: 600,
          fontSize: '1rem',
          lineHeight: '1.5rem',
          padding: '0.5rem 1rem',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          color: '#fff',
          backgroundColor: '#245353',
          '&:hover': {
            backgroundColor: '#245353',
          },
        },
        containedSecondary: {
          color: '#245353',
          backgroundColor: '#f5f5f5',
          '&:hover': {
            backgroundColor: '#f5f5f5',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            '& fieldset': {
              borderColor: '#245353',
            },
            '&:hover fieldset': {
              borderColor: '#245353',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#245353',
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#245353',
          '&.Mui-focused': {
            color: '#245353',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused fieldset': {
            borderColor: '#245353',
          },
        },
      },
    },
    
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: '#245353',
          height: '2.5rem',
          fieldset: {
            borderRadius: 20,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#245353',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#245353',
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: '#245353',
        },
      },
    },
  },
});
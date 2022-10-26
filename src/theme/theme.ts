import { createTheme } from '@mui/material';

const black = '#292D33';
const white = '#ffffff';
const error = '#c86464';
const primary = '#185CFF';
const secondary = '#9497A1';
const border = '#607D94';

export const themeParams = {
  spaces: ['0', '4px', '8px', '16px', '32px', '64px', '128px'],
  borderRadiuses: ['0', '5px', '10px', '20px'],
  defaultTransition: '100ms',
  bgColor: {
    default: white,
    grey: '#F1F6FA',
    dark: '#002B4E',
  },
  weatherIconSize: '30px',
  slimBorder: `1px solid ${border}`,
  wideBorder: `2px solid ${border}`,
  footerHeight: '30%',
  headerHeight: '126px',
  logoSize: ['141px', '46px'],
  raisedEffect:
    'box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);',
  colors: {
    primary,
    secondary,
    border,
    black,
    white,
    error,
  },
};

let theme = createTheme({});
theme = createTheme({
  palette: {
    primary: {
      main: '#185CFF',
      contrastText: '#fff',
    },
    secondary: {
      main: '#9497A1',
      contrastText: '#fff',
    },
    success: {
      main: '#607D94',
      contrastText: '#fff',
    },
    error: {
      main: '#C14040',
      contrastText: '#fff',
    },
  },

  typography: {
    fontFamily: '"Manrope", "Open Sans", sans-serif',
    fontSize: 14,
    allVariants: {
      color: black,
    },
    subtitle1: {
      color: '#9497A1',
      fontSize: '14px',
    },
    subtitle2: {
      fontSize: '14px',
      fontWeight: 400,
    },
    body1: {
      color: '#9497A1',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '28px',
    },
    body2: {
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '28px',
    },
    h1: {
      fontSize: '46px',
      fontWeight: 800,
      lineHeight: '60px',
    },
    h2: {
      fontSize: '38px',
      fontWeight: 800,
      lineHeight: '56px',
    },
    h3: {
      fontSize: '30px',
      fontWeight: 800,
      lineHeight: '42px',
    },
    h4: {
      fontSize: '22px',
      fontWeight: 700,
      lineHeight: '33px',
    },
    h5: {
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: '30px',
    },
    h6: {
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '24px',
    },
    button: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '24px',
      color: white,
      textTransform: 'initial',
    },
  },
  transitions: {
    duration: {
      standard: 300,
    },
  },
});

export default theme;

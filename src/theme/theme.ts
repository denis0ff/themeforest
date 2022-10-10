import { createTheme } from '@mui/material';

const font = 'sans-serif';

const black = '#000000';
const white = '#ffffff';
const error = '#c86464';
const primary = '#185CFF';
const secondary = '#727272';
const border = '#607D94';

export const themeParams = {
  font,
  fontColor: black,
  spaces: ['0', '4px', '8px', '16px', '32px', '64px', '128px'],
  fontSizes: ['12px', '14px', '16px', '20px', '24px', '32px', '40px', '56px'],
  fontWeights: [200, 400, 600],
  borderRadiuses: ['0', '5px', '10px', '20px'],
  webkitScrollBarWidth: '5px',
  defaultTransition: '100ms',
  boxShadow: `0 0 20px 5px ${black}`,
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
  buttonOptions: `width: 185px; height: 54px; background-color: ${primary}; color: ${white}; border: none`,
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
  typography: {
    fontFamily: `"Manrope", "Open Sans", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    allVariants: {
      color: black,
    },
  },
});

export default theme;

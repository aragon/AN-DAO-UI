import { createMuiTheme } from '@material-ui/core/styles';

interface CustomTheme {
  gradients: {
    aragon: string;
    challenge: string;
  };
  plain: {
    blue: string;
    cyan: string;
    sapphire: string;
    amethyst: string;
  };
  greyscale: {
    solid: string;
    medium: string;
    soft: string;
    light: string;
  };
  informative: {
    green: string;
    orange: string;
    yellow: string;
    red: string;
  };
  light: {
    cream: string;
    skin: string;
    sky: string;
    grass: string;
    violet: string;
  };
  black: string;
  white: string;
}

// https://material-ui.com/customization/theming/#custom-variables
declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    custom: CustomTheme;
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    custom: CustomTheme;
  }
}

const typography = {
  fontFamily: 'Manrope',
  h1: {
    fontSize: 40,
    fontWeight: 600,
    letterSpacing: '-0.02em',
  },
  h2: {
    fontSize: 36,
    fontWeight: 500,
    letterSpacing: '-0.01em',
  },
  h3: {
    fontSize: 24,
    fontWeight: 500,
    letterSpacing: '-0.01em',
  },
  h4: {
    fontSize: 18,
    fontWeight: 600,
  },
  h5: {
    fontSize: 12,
    fontWeight: 600,
  },
  text: {
    normal: {
      fontSize: 16,
      fontWeight: 500,
      color: '#7483B2',
    },
    link: {
      fontSize: 16,
      fontWeight: 500,
      color: '#0176FF',
    },
    bold: {
      fontSize: 16,
      fontWeight: 500,
      color: '#20232C',
    },
    small: {
      fontSize: 14,
      fontWeight: 500,
      color: '#20232C',
    },
  },
};

const custom = {
  gradients: {
    aragon: 'linear-gradient(107.79deg, #00C2FF 1.46%, #01E8F7 100%)',
    challenge: 'linear-gradient(92.89deg, #F7B201 -16.92%, #FF7A00 100%)',
  },
  plain: {
    blue: '#00C2FF',
    cyan: '#01E8F7',
    sapphire: '#0176FF',
    amethyst: '#865BFF',
  },
  greyscale: {
    solid: '#7483B2',
    medium: '#B0BDE6',
    soft: '#D9E0F5',
    light: '#F5F7FF',
  },
  informative: {
    green: '#18D179',
    orange: '#FF7A00',
    yellow: '#FFC83A',
    red: '#FF5823',
  },
  light: {
    cream: '#FFF9EF',
    skin: '#FFF1ED',
    sky: '#ECFAFF',
    grass: '#EFFFF7',
    violet: '#F3F4FF',
  },
  black: '#20232C',
  white: '#FFFFFF',
};
const breakpoints = {
  values: {
    xs: 320,
    sm: 768,
    md: 964,
    lg: 964,
    xl: 964,
  },
};
export const lightTheme = createMuiTheme({
  custom,
  palette: {
    background: {
      default: '#fff',
    },
  },
  typography,
  breakpoints,
});
export const test = 'abc';

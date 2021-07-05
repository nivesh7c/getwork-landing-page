import { createMuiTheme } from "@material-ui/core";

const Theme = createMuiTheme({
  palette: {
    type: "light",
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    primary: {
      main: "#007BFF",
      hover: "#0069D9",
      disable: "#58AAFF",
      contrastText:"#fff",
    },
    secondary: {
      main: "#6C757D",
      hover: "#5A6268",
      disable: "#B0B6BA",
    },
    success: {
      main: "#28A745",
      hover: "#218838",
      disable: "#74C686",
    },
    text: {
      primary: "#424242",
      secondary: "#828282",
    },
    error: {
      main: "#DC3545",
      hover: "#C82333",
      disable: "#E97B86",
    },
    warning: {
      main: "#FFC107",
      hover: "#E0A800",
      disable: "#FFD75E",
    },

    grey: {
      50: "#F2F2F2",
    },
  },
  typography: {
    fontFamily: "Nunito",
    h1: {
      fontSize: '3em',
      letterSpacing: '0px',
      wordSpacing: '0px',
      fontWeight: '400',
      textDecoration: 'none', 
      fontStyle: 'normal',
      fontVariant: 'normal',
      textTransform: 'none',
    },
    h2: {
      fontSize: '34px',
      letterSpacing: '0px',
      wordSpacing: '0px',
      fontWeight: '400',
      textDecoration: 'none', 
      fontStyle: 'normal',
      fontVariant: 'normal',
      textTransform: 'none',
    },
    h3: {
    
      fontSize: '24px',
      letterSpacing: '0px',
      wordSpacing: '0px',
      fontWeight: '400',
      textDecoration: 'none', 
      fontStyle: 'normal',
      fontVariant: 'normal',
      textTransform: 'none',
    },
    h4: {
      fontSize: '20px',
      letterSpacing: '0px',
      wordSpacing: '0px',
      fontWeight: '600',
      textDecoration: 'none', 
      fontStyle: 'normal',
      fontVariant: 'normal',
      textTransform: 'none',
    },
    h5: {
     
      fontSize: '18px',
      letterSpacing: '0px',
      wordSpacing: '0px',
      fontWeight: '600',
      textDecoration: 'none', 
      fontStyle: 'normal',
      fontVariant: 'normal',
      textTransform: 'none',
    },
    h6: {
      
      fontSize: '16px',
      letterSpacing: '0px',
      wordSpacing: '0px',
      fontWeight: '600',
      textDecoration: 'none', 
      fontStyle: 'normal',
      fontVariant: 'normal',
      textTransform: 'none',
    },
    body1: {
      color: "#000000",
      fontSize: '16px',
      letterSpacing: '0px',
      wordSpacing: '0px',
      fontWeight: '400',
      textDecoration: 'none', 
      fontStyle: 'normal',
      fontVariant: 'normal',
      textTransform: 'none',
    },
    body2: {
      color: "#000000",
      fontSize: '14px',
      letterSpacing: '0px',
      wordSpacing: '0px',
      fontWeight: '400',
      textDecoration: 'none', 
      fontStyle: 'normal',
      fontVariant: 'normal',
      textTransform: 'none',
    },
    body3: {
      fontSize: '12px',
      letterSpacing: '0px',
      wordSpacing: '0px',
      fontWeight: '400',
      textDecoration: 'none', 
      fontStyle: 'normal',
      fontVariant: 'normal',
      textTransform: 'none',
    },
    subtitle1: {
      fontSize: '16px',
      letterSpacing: '0px',
      wordSpacing: '0px',
      fontWeight: '400',
      textDecoration: 'none', 
      fontStyle: 'normal',
      fontVariant: 'normal',
      textTransform: 'none',
    },
    subtitle2: {
      fontSize: '14px',
      letterSpacing: '0px',
      wordSpacing: '0px',
      fontWeight: '600',
      textDecoration: 'none', 
      fontStyle: 'normal',
      fontVariant: 'normal',
      textTransform: 'none',
    },
    caption: {
      fontSize: '12px',
      letterSpacing: '0px',
      wordSpacing: '0px',
      fontWeight: '400',
      textDecoration: 'none', 
      fontStyle: 'normal',
      fontVariant: 'normal',
      textTransform: 'none',
    },
    overline: {
      fontSize: '10px',
      letterSpacing: '0px',
      wordSpacing: '0px',
      fontWeight: '400',
      textDecoration: 'none', 
      fontStyle: 'normal',
      fontVariant: 'normal',
      textTransform: 'none',
    },
    button: {
      fontSize: '16px',
      letterSpacing: '0px',
      wordSpacing: '0px',
      fontWeight: '400',
      textDecoration: 'none', 
      fontStyle: 'normal',
      fontVariant: 'normal',
      textTransform: 'none',
    },
    buttonmob: {
      fontSize: '14px',
      letterSpacing: '0px',
      wordSpacing: '0px',
      fontWeight: '400',
      textDecoration: 'none', 
      fontStyle: 'normal',
      fontVariant: 'normal',
      textTransform: 'none',
    },
  },
  overrides: {
    MuiButton: {
      label: {
        textTransform: "capitalize",
        fontSize: "20px",
      },
      contained: {
        "&$disabled": {
          color: "#FFF",
          backgroundColor: "#EE7D66",
        },
      },
      text: {
        color: "#EE7D66",
      },
    },
 
    MuiFab: {
      root: {
        backgroundColor: "#EE7D66",
        color: "#FFF",
      },
    },
    MuiTab: {
      wrapper: {
        color: "#6c757d",
      },
      textColorInherit: {
        color: "#FFF",
      },
    },
  },
});

export default Theme;

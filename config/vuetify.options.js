let darkMode = false
if (typeof Storage !== 'undefined') { // eslint-disable-line
  darkMode = localStorage.getItem('MedFoodDarkMode') || false
}

export default {
  rtl: false,
  theme: {
    dark: darkMode === 'true',
    themes: {
      dark: {
        background: '#1c1c1c',
        bg: "#1c1c1c", // body bg
        surface: "#2B2D5B", // card and all box
        bggrey: '#001e26',
        primary: '#356DFF',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        default: '#356DFF',
      },
      light: {
        background: '#f7f8f9',
        bg: "#f7f8f9",
        surface: "#ffffff",
        bggrey: '#faf7f2',
        primary: '#356DFF',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        default: '#356DFF',
      },

    },
    options: {
      customProperties: true
    }
  }
}

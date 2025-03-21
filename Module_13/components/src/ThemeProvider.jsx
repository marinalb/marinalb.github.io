import React, { useState, createContext, useContext } from 'react';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';

// Definindo os temas
export const lightTheme = {
  background: '#c3c3c3',
  color: '#000000',
  buttonBackground: '#007bff',
  buttonHover: '#0056b3'
};

export const darkTheme = {
  background: '#333333',
  color: '#ffffff',
  buttonBackground: '#007bff',
  buttonHover: '#0056b3'
};

// Criando o contexto para o tema
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const setLightTheme = () => {
    setTheme(lightTheme);
  };

  const setDarkTheme = () => {
    setTheme(darkTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setLightTheme, setDarkTheme }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
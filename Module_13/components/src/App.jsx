import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ThemeProvider, useTheme } from './ThemeProvider';
import './index.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};
`;

const Button = styled.button`
  background-color: ${props => props.theme.buttonBackground};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.buttonHover};
  }
`;

const ThemeSwitcher = () => {
  const { setLightTheme, setDarkTheme } = useTheme();
  return (
    <div>
      <Button onClick={setLightTheme}>Light Theme</Button>
      <Button onClick={setDarkTheme}>Dark Theme</Button>
    </div>
  );
};

const App = () => {
  const { theme } = useTheme();
  const [themeName, setThemeName] = useState('Light Theme');

  useEffect(() => {
    setThemeName(theme.background === '#c3c3c3' ? 'Light Theme' : 'Dark Theme');
  }, [theme]);

  return (
    <Container>
      <h1>Control Color Panel</h1>
      <h2>{themeName}</h2>
      <ThemeSwitcher />
    </Container>
  );
};

const Root = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default Root;
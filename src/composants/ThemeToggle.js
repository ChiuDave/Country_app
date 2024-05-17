import React from 'react';
import { useTheme } from '../context/ThemeContexte';
import { Button } from 'semantic-ui-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} theme
    </Button>
  );
};

export default ThemeToggle;

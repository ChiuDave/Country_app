import React from 'react';
import { useTheme } from '../context/ThemeContexte';

import { NavLink } from 'react-router-dom';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <NavLink to="#" onClick={(e) => {
        e.preventDefault();
        toggleTheme();
      }}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      Switch to {theme === 'light' ? 'dark' : 'light'} theme
    </NavLink>
  );
};

export default ThemeToggle;

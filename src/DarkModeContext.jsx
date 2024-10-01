import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const DarkModeContext = createContext();

const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        {children}
      </div>
    </DarkModeContext.Provider>
  );
};

// props validation
DarkModeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DarkModeContextProvider;

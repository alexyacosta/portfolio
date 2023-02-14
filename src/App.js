import './App.css';
import { Container } from 'reactstrap';
import { ThemeContext, themes } from './contexts/themeContext';
import React from 'react';
import ToggleDark from './components/toggleDark';

import About from './components/About';
import Header from './components/Header';

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <div className="App">
          <Header />
    </div>
  );
}

export default App;
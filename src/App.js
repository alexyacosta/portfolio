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
      <header className="App-header">
        <h1 className="text-warning">Alexya Costa</h1>
      </header>
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <ToggleDark
            toggleDark={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          />
        )}
      </ThemeContext.Consumer>

      <footer className="center footer">
        <Container>
          <Header />
        </Container>
      </footer>
      <About />
    </div>
  );
}

export default App;
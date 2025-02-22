import React, {useState, useEffect} from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import './styles.css'

function App() {

  // const [theme, setTheme] = useState('light');

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  // };

  // // Actualizamos la clase del body cuando cambia el tema
  // useEffect(() => {
  //   document.body.className = theme;
  // }, [theme]);

  return (
    <ThemeProvider>
      <Router>
        <div id='root-container'>
          <Header />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

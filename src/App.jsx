import React, { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Profile } from './components/Profile';
import About from './components/About';
import Services from './components/Services';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(false);
   const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    setIsDark(savedTheme === 'dark');
  }, []);
  return (
    <div >
 <Navbar  isDark={isDark} toggleTheme={toggleTheme}/>
 <Profile isDark={isDark} toggleTheme={toggleTheme} />
 <About isDark={isDark} toggleTheme={toggleTheme} />
 <Services isDark={isDark} toggleTheme={toggleTheme} />
 <MyWork isDark={isDark} toggleTheme={toggleTheme} />
 <Contact isDark={isDark} toggleTheme={toggleTheme} />
 <Footer isDark={isDark} toggleTheme={toggleTheme} />
    </div>
  )
}

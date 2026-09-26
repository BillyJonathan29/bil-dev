import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Organization from './components/Organization';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div
        className="min-h-screen flex flex-col"
        style={{ background: 'var(--background)', color: 'var(--foreground)' }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <TechStack />
          <Experience />
          <Projects />
          <Achievements />
          <Organization />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

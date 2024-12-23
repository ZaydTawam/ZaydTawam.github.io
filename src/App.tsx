import { useRef, useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const sectionContainerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div id="page-container">
      <div style={{ flex: 1 }}>
        <Header
          activeSection={activeSection}
          sectionContainer={sectionContainerRef}
        />
        <MainContent
          sectionContainerRef={sectionContainerRef}
          setActiveSection={setActiveSection}
        />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

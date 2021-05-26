import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import './App.scss';
import { useState } from 'react';


function App() {
  const [ menuOpen , setMenuOpen ] = useState(false);
  return (
    <div className="app">
      <Topbar open={menuOpen} setOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;

import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="sections">
        <Intro />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;

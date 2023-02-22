import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact' 
import './App.css';
//NEED TO FIX GRID FOR LARGER SCREENS
function App() {
  return (
      <div className="App">
          <Header />

          <h2 className="projects-title">Projects</h2>
          <Projects />
          <Skills />
          <Contact />
      </div>
  );
}

export default App;

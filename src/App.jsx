import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'



function App() {
  return (
    <>
    <Nav/>
    <Router>
      <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
    </>
  )
}

export default App

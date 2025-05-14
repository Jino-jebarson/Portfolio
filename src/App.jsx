import './App.css'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Contact from './components/contact'
import Education from './components/education'
import Hero from './components/hero'
import Project from './components/project'
import Skills from './components/skills'
function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='education' element={<Education />} />
      <Route path='skills' element={<Skills />} />
      <Route path='projects' element={<Project />} />
      <Route path='contact' element={<Contact />} />
    </Routes>
    </>
  )
}
  

export default App

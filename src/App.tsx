import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import AboutMe from './pages/about-me/AboutMe';
import Settings from './pages/settings/Settings';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about-me' element={<AboutMe />} />
      <Route path='/settings' element={<Settings />} />
    </Routes>
  )
}

export default App

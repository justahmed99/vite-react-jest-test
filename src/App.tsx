import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import AboutMe from './pages/about-me/AboutMe';
import Settings from './pages/settings/Settings';
import UserInput from './pages/user-input/UserInput';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about-me' element={<AboutMe />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/user-input' element={<UserInput />} />
    </Routes>
  )
}

export default App

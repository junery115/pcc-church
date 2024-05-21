import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layouts/index'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Events from './pages/events/Events'
import Contact from './pages/contact/Contact'


function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App


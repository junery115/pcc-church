import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { About, Contact, Events, Gallery, GalleryImage, Home,Event,Profile, EditEvent, CreateEvent, Testimony, CreateTestimony, Testimonies } from './pages'
import { Navbar,Footer,ProtectedRoute } from './components'
const App = () => {
  return (
    
    <div className='App'>
        <Navbar/>
       <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about-us' element={<About/>}/>
       <Route path='/contact-us' element={<Contact/>}/>
       <Route path='/gallery' element={<Gallery/>}/>
       <Route path='/gallery/:id' element={<GalleryImage/>}/>
       <Route path='/events' element={<Events/>}/>
       <Route path='/event/:id' element={<Event/>}/>
       <Route path='/testimonies' element={<Testimonies/>}/>
       <Route path='/create-testimony' element={<CreateTestimony/>}/>
       <Route path='/testimony/:id' element={<Testimony/>}/>
       <Route element={<ProtectedRoute />}>
       <Route path='/profile' element={<Profile/>}/>
       <Route path='/edit-event/:id' element={<EditEvent/>}/>
       <Route path='/create-event/:id' element={<CreateEvent/>}/>
       </Route>
        </Routes> 
        <Footer/>
    </div>
  )
}

export default App
import React from 'react'
import './app.css'
import { Routes, Route } from 'react-router-dom'
import { About, Contact, Events, Gallery, GalleryImage, Home,Event,Profile, EditEvent, CreateEvent } from './pages'
import { Navbar,Footer,ProtectedRoute } from './components'
const App = () => {
  return (
    
    <div className='App'>
        <Navbar/>
       <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route exact path='/about-us' element={<About/>}/>
       <Route exact path='/contact-us' element={<Contact/>}/>
       <Route exact path='/gallery' element={<Gallery/>}/>
       <Route exact path='/gallery/:id' element={<GalleryImage/>}/>
       <Route exact path='/events' element={<Events/>}/>
       <Route exact path='/event/:id' element={<Event/>}/>
       <Route element={<ProtectedRoute />}>
       <Route exact path='/profile' element={<Profile/>}/>
       <Route exact path='/edit-event/:id' element={<EditEvent/>}/>
       <Route exact path='/create-event/:id' element={<CreateEvent/>}/>
       </Route>
       <Footer/>
        </Routes> 
    </div>
  )
}

export default App
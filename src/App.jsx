<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layouts/index'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Events from './pages/events/Events'
import Contact from './pages/contact/Contact'
=======
import React, { useState, useEffect, lazy,Suspense} from 'react'
import useScrollPosition from "@react-hook/window-scroll";
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { About, Contact, GalleryImage, Home, Event, Profile, EditEvent, CreateEvent, Testimony, CreateTestimony, Testimonies, Login } from './pages'
import { Navbar, Footer, ProtectedRoute } from './components'
import StraightIcon from '@mui/icons-material/Straight';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from './firebaseConfig';
>>>>>>> e288b893d78c4dd123f36bc81a91f0eee3cf7848

const Events = lazy(() => import('./pages/events/Events'));
const Gallery = lazy(() => import('./pages/gallery/Gallery'));

function App() {

  return (
<<<<<<< HEAD
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
=======

    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/gallery/:id' element={<GalleryImage />} />
        <Route path='/events' element={<Events />} />
        {/* <Route path='/profile' element={<Events/>}/> */}
        <Route path='/event/:id' element={<Event />} />
        <Route path='/testimonies' element={<Testimonies />} />
        <Route path='/create-testimony' element={<CreateTestimony />} />
        <Route path='/testimony/:id' element={<Testimony />} />
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoute />}>
        <Route path='/profile/:name' element={<Profile />} />
          <Route path='/edit/:id' element={<EditEvent />} />
          <Route path='/create-event/:id' element={<CreateEvent />} />
        </Route>
      </Routes>
      {
        displayScroll && (
      <a href="#top">
       <div className="app__topIcon">
         <StraightIcon
           fontSize='small'
           className=""
           onClick={scrollToTop}
         />
       </div>
   </a>
        )
      }
      <Footer />
    </Suspense>
>>>>>>> e288b893d78c4dd123f36bc81a91f0eee3cf7848
  )
}

export default App


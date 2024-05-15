import React, { useState, useEffect } from 'react'
import useScrollPosition from "@react-hook/window-scroll";
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { About, Contact, Events, Gallery, GalleryImage, Home, Event, Profile, EditEvent, CreateEvent, Testimony, CreateTestimony, Testimonies, Login } from './pages'
import { Navbar, Footer, ProtectedRoute } from './components'
import StraightIcon from '@mui/icons-material/Straight';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from './firebaseConfig';


function App() {
  const [displayScroll, setDisplayScroll] = useState(false);
  const scrollY = useScrollPosition(60 /*frames per second*/);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const data = query(
      collection(db, "posts"),
      orderBy("timestamp", "desc")
    );
    const getData = async () => {
      await onSnapshot(data, (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          id: doc?.id,
          post: doc?.data(),
        }))
        const events = newData?.filter(({ post }) => post?.action?.match("event"))
        const gallery = newData?.filter(({ post }) => post?.action?.match("gallery"))
        localStorage.setItem("events", JSON.stringify(events))
        localStorage.setItem("gallery", JSON.stringify(gallery))

      })
    }
    getData()
  }, [])

  useEffect(() => {
    if (scrollY >= 1530) {
      setDisplayScroll(true);
    } else {
      setDisplayScroll(false);
    }
  }, [scrollY]);
  return (

    <>
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
    </>
  )
}

export default App
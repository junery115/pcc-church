import React, { useState } from 'react'
import {  serverTimestamp, updateDoc, doc } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import { useLocation, useNavigate,useParams } from 'react-router-dom';
import { CircularProgress} from "@mui/material";



const EditEvent = () => {
  const { state } = useLocation()
  const { id } = useParams()
  const {
    eventTitle,
    description,
    startDate,
    endDate,
    time,
    action,
    venue
  } = state
  
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
 
  const [error, setError] = useState("");
  const [updatedData, setUpdatedData] = useState({
    eventTitle: eventTitle,
    description:description,
    startDate: startDate,
    endDate: endDate,
    time: time,
    venue:venue,
    postedBy: "PCC Belts-Ville",
    action:action
  })

  const handleInputChange = (e) => {
    const value = e.target.value;
    setUpdatedData({ ...updatedData, [e.target.name]: value });
  };

  const handlePostUpdate = async (e) => {
   e.preventDefault();
   setLoading(true);
   const {
    eventTitle,
    description,
    startDate,
    endDate,
    time,
    postedBy,
    action,
    venue
  } = updatedData
  const taskDocRef = doc(db, "posts", id);
   try {
    await updateDoc(taskDocRef, {
            timestamp: serverTimestamp(),
            postedBy: postedBy,
            eventTitle: eventTitle,
            description: description,
            startDate: startDate,
            endDate: endDate,
            time: time,
            venue:venue,
            action:action
    
          })
          setLoading(false);
          navigate("/");
        
   } catch (error) {
    console.log(error)
    setError(error.message)
   }
  }
  return (
    <div className='main'>
    <div className="">
    <div className="main__header">
      <h3>{updatedData.action === "event"? "CREATE EVENT":"SAVE TO GALLERY"}</h3>
      <div className="main__input">
            <select name="action" value={updatedData.action} onChange={handleInputChange}>
              <option value="gallery">Save to Gallery</option>
              <option value="event">Create Event</option>
            </select>
          </div>
    </div>
    </div>
    <div className="main__container">
    
      <div className="main__create">
        <form onSubmit={handlePostUpdate} className="main__form">
          <div className="main__input">
            <label>Title:</label>
            <input placeholder=''
              type="text" name="eventTitle" value={updatedData.eventTitle} onChange={handleInputChange} required
            />

          </div>
         {
          updatedData.action === "event" && (
            <>
             <div className="main__input">
            <label>Start Date:</label>
            <input
              type="date" name="startDate" value={updatedData.startDate} onChange={handleInputChange}
            />
          </div>
          <div className="main__input">
            <label>End Date:</label>
            <input
              type="date" name="endDate" value={updatedData.endDate} onChange={handleInputChange}
            />
          </div>
          <div className="main__input">
            <label>Time:</label>
            <input
              type="text" name="time" value={updatedData.time} onChange={handleInputChange} required
            />
          </div>
          <div className="main__input">
            <label>Venue:</label>
            <input
              type="text" name="venue" value={updatedData.venue} onChange={handleInputChange} required
            />
          </div>
            </>
          )
         }
          <div className="main__input">
          <label>Description:</label>
            <textarea placeholder='Event description' cols="35" rows="3"
              type="text" name="description" value={updatedData.description} onChange={handleInputChange} required
            >

            </textarea>
          </div>
          <div className="login__button">
            {
              updatedData.eventTitle && (
                <button type="submit">POST</button>
              )
            }
          </div>
          {
          loading && (
           <div className="loader">
           <CircularProgress color="inherit" />
           </div>
          )
        }
        {
          error && (
            <span className="submit__error">{error}</span>
          )
        }
        </form> 
      </div>
    </div>
  </div>
  )
}

export default EditEvent
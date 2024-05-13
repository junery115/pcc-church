import React, { useState } from 'react'
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { storage,db } from '../../firebaseConfig';
import './admin.css'
import { useNavigate } from 'react-router-dom';
import { Box, IconButton, LinearProgress ,CircularProgress} from "@mui/material";
import  CameraAltIcon from '@mui/icons-material/CameraAlt';
// import { CloseTwoTone } from '@mui/icons-material';


const CreateEvent = () => {
  const navigate = useNavigate()
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState(null);
  const [previewImages, setPreviewImages] = useState([]);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    eventTitle: "",
    description: "",
    startDate: "",
    endDate: "",
    time: "",
    venue:"",
    postedBy: "PCC Belts-Ville",
    action:"gallery"
  })

  const handleInputChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };
  const removeImage = (index) => {
    const newPreviews = previewImages.filter((_, i) => i !== index);
    setPreviewImages(newPreviews);
  };
  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      setPreviewImages((prev) => [
        ...prev,
        URL.createObjectURL(e.target.files[i]),
      ]);
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  const handlePost = (e) => {
   e.preventDefault();
   setLoading(true);
   try {
    const {
      eventTitle,
      description,
      startDate,
      endDate,
      time,
      postedBy,
      action,
      venue
    } = formData
    if(action === "events"){
      addDoc(collection(db, `/events`), {
        timestamp: serverTimestamp(),
        imageUrls: urls,
        postedBy: postedBy,
        eventTitle: eventTitle,
        description: description,
        startDate: startDate,
        endDate: endDate,
        time: time,
        venue:venue

      })
      setLoading(false);
        navigate("/");
    }else{
      const promises = [];
      images.map((image) => {
        if (!image) {
          setError("upload error");
        } else {
          setError("");
        
          const storageRef = ref(storage, `/galleryMedia/${image.name}`);
          const uploadTask = uploadBytesResumable(storageRef, image);
          promises.push(uploadTask);
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              setProgress(percent);
            },
            (err) => {
              const errorMessage = err.message;
              setError(errorMessage);
            },
            async () => {
              await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                setUrls((prevState) => [...prevState, url]);
              });
            }
          );
        
          }
        return null
      });
  
      Promise.all(promises)
        .then(() => {
          setMessage("upload success");
        })
        .catch((err) => console.log(err));
      if (message === "upload success") {
          addDoc(collection(db, `/gallery`), {
            timestamp: serverTimestamp(),
            imageUrls: urls,
            eventTitle: eventTitle,
            description: description,
          })
        }
        setProgress(0);
        setPreviewImages(null);
        setLoading(false);
        navigate("/");
    }
      
   } catch (error) {
    console.log(error)
    setLoading(false);
   }
  }
  return (
    <div className='main'>
    <div className="main__header">
      <h3>{formData.action === "event"? "CREATE EVENT":"SAVE TO GALLERY"}</h3>
      <div className="main__input">
            <select name="action" value={formData.action} onChange={handleInputChange}>
              <option value="gallery">Save to Gallery</option>
              <option value="event">Create Event</option>
            </select>
          </div>
    </div>
    <div className="main__container">
    
      <div className="main__create">
        <form onSubmit={handlePost} className="main__form">
        {
          formData.action === "gallery" && (
         <>
          <div className="">
          {/* <label>Upload Images:</label> */}
          <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input
                hidden
                accept="image/*"
                type="file"
                multiple
                onChange={handleChange}
              />
              <CameraAltIcon size={20} color="inherit" />
            </IconButton>
          </div>
          <div className="preview__container">
            {previewImages?.map(
              (preview, index) =>
                preview && (
                  <div className="my-2">
                    <div className="preview__imageContainer">
                      <img
                        key={index}
                        className="previewImage"
                        src={preview}
                        alt=""
                        onClick={() => removeImage(index)}
                      />
                    </div>
                  </div>
                )
            )}
          </div>
         </>
          )}
          {previewImages?.map(
          (image, index) =>
            image && (
              <Box sx={{ width: "100%", margin: "10px 0px" }}>
                <LinearProgress
                  variant="determinate"
                  value={progress}
                  key={index}
                />
              </Box>
            )
        )}
          <div className="main__input">
            <label>Title:</label>
            <input placeholder=''
              type="text" name="eventTitle" value={formData.eventTitle} onChange={handleInputChange} required
            />

          </div>
         {
          formData.action === "event" && (
            <>
             <div className="main__input">
            <label>Start Date:</label>
            <input
              type="date" name="startDate" value={formData.startDate} onChange={handleInputChange}
            />
          </div>
          <div className="main__input">
            <label>End Date:</label>
            <input
              type="date" name="endDate" value={formData.endDate} onChange={handleInputChange}
            />
          </div>
          <div className="main__input">
            <label>Time:</label>
            <input
              type="text" name="time" value={formData.time} onChange={handleInputChange} required
            />
          </div>
          <div className="main__input">
            <label>Venue:</label>
            <input
              type="text" name="venue" value={formData.venue} onChange={handleInputChange} required
            />
          </div>
            </>
          )
         }
          <div className="main__input">
          <label>Description:</label>
            <textarea placeholder='Event description' cols="35" rows="3"
              type="text" name="description" value={formData.description} onChange={handleInputChange} required
            >

            </textarea>
          </div>
          <div className="login__button">
            {
              formData.eventTitle && (
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

export default CreateEvent
import React, { useState } from 'react'
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { db, storage } from '../../firebaseConfig';
import { Box, IconButton, LinearProgress ,CircularProgress} from "@mui/material";
import  CameraAltIcon from '@mui/icons-material/CameraAlt';
// import { CloseTwoTone } from '@mui/icons-material';

const CreateTestimony = () => {
  const navigate = useNavigate()
  const [image, setImage] = useState('');
  // const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  // const [message, setMessage] = useState(null);
  const [previewImage, setPreviewImage] = useState('');
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    testimony: "",
    country: "",
    city: "",
    title:"",
    homeAddress: "",
    phoneNumber: "",
  })

  const handleInputChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const onFileChangeHandler = (e) => {
    setImage(e.target.files[0]);
    if (e.target.files.length !== 0) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const removeImage = () => {
    setPreviewImage(null);
  };
  const handlePost = (e) => {
    e.preventDefault()
    const { fullName,
    testimony,
    country,
    city,
    title,
    homeAddress,
    phoneNumber
  } = formData
    if (!image) {
      setError("please upload a photo");
    } else {
      setError("");
      setLoading(true);
      const storageRef = ref(storage, `/testimonyImages/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
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
            addDoc(collection(db, `/testimonies`), {
              timestamp: serverTimestamp(),
              photo:url,
              fullName: fullName,
              testimony: testimony,
              country: country,
              city: city,
              homeAddress: homeAddress,
              phoneNumber: phoneNumber,
              title:title
            })
            setProgress(0);
            setPreviewImage(null);
            setImage(null);
            setLoading(false);
            navigate('/')
          });
        }
      );
    }
  }

  return (
    <div className='main'>
      <div className="main__header">
      <h3>SHARE YOUR STORY</h3>
    </div>
    <div className="main__container">
    
    <div className="main__create">
      <form onSubmit={handlePost} className="main__form">
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
              required
              onChange={onFileChangeHandler}
            />
            <CameraAltIcon size={20} color="inherit" />
          </IconButton>
        </div>
        <div className="preview__container">
          {previewImage && (
                <div className="my-2">
                  <div className="preview__imageContainer">
                    <img
                      className="previewImage"
                      src={previewImage}
                      alt=""
                      onClick={() => removeImage()}
                    />
                  </div>
                </div>
              
          )}
        </div>
        {image && (
            <Box sx={{ width: "100%", margin: "10px 0px" }}>
              <LinearProgress
                variant="determinate"
                value={progress}
              />
            </Box>
    
      )}
        <div className="main__input">
          <label>Full Name</label>
          <input placeholder=''
            type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required
          />

        </div>
           <div className="main__input">
          <label>Country</label>
          <input
            type="text" name="country" value={formData.country} onChange={handleInputChange}
          />
        </div>
        <div className="main__input">
          <label>City:</label>
          <input
            type="text" name="city" value={formData.city} onChange={handleInputChange}
          />
        </div>
        <div className="main__input">
          <label>Home Address</label>
          <input
            type="text" name="homeAddress" value={formData.homeAddress} onChange={handleInputChange}
          />
        </div>
        <div className="main__input">
          <label>Phone Number:</label>
          <input
            type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required
          />
        </div>
        <div className="main__input">
          <label>Title:</label>
          <input
            type="text" name="title" value={formData.title} onChange={handleInputChange}
            required
          />
        </div>
        <div className="main__input">
        <label>Description:</label>
          <textarea placeholder='Event description' cols="35" rows="3"
            type="text" name="testimony" value={formData.testimony} onChange={handleInputChange} required
          >

          </textarea>
        </div>
        <div className="login__button">
          {
            formData.fullName && (
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

export default CreateTestimony
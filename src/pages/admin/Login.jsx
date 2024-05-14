import React, { useState } from "react";
import { auth, db } from "../../firebaseConfig";
import { collection,
  getDoc,doc,
  //setDoc, 
  //query, onSnapshot, orderBy,addDoc,deleteDoc, serverTimestamp 
} from "firebase/firestore";
import './admin.css'
import {
  //createUserWithEmailAndPassword,

  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username:"pcc_beltsville",
    email: "pcc24@gmail.com",
    password: "123456789",
    firstName: 'pcc',
    lastName:'beltsville',
    phoneNumber:'',
   
  });

  // const register = () => {
  //   try {
  //     const {username,firstName, lastName, email, password,phoneNumber} = formData;
  //     createUserWithEmailAndPassword(auth, email, password)
  //     .then(()=>{
  //       const colRef = collection(db,"users")
  //       setDoc(doc(colRef,auth.currentUser.uid), {
  //         displayName: username,
  //         phoneNumber:phoneNumber,
  //         fullName: firstName + ' ' + lastName,
  //           email,
  //           id:auth.currentUser.uid
  //          })
  //       navigate("/")
  //          })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const handleInputChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault()
    try {
      const { email, password } = formData;
    signInWithEmailAndPassword(auth, email,password)
        .then(() => {
          const colRef = collection(db, "users");
    getDoc(doc(colRef, auth.currentUser?.uid)).then((snapshot) => {

const name = snapshot.data().displayName;
      localStorage.setItem("user",JSON.stringify(snapshot.data()))
        navigate(`/profile/${name}`)
    })
  })
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="main">
  {/* <button onClick={register}>Register</button> */}
      <div className="login__header">
        <h3>LOGIN ADMIN</h3>
      </div>
      <form onSubmit={handleFormSubmit} className="login__container">
<div className="login__input">
  <input type="email" placeholder="email" name="email" value={formData.email} onChange={handleInputChange} required/>
</div>
<div className="login__input">
  <input type="password" placeholder="password" name="password" value={formData.password} onChange={handleInputChange} required/>
</div>
<div className="login__button">
  <button type="submit">LOGIN</button>
</div>
      </form>
    </div>
  )
}

export default Login
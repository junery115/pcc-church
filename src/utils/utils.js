import { Timestamp
    ,doc,
    //getDoc,setDoc,addDoc,
    deleteDoc} from "firebase/firestore";
import moment from "moment";
import { db } from "../firebaseConfig";

export const convertTime = (timestamp) => {
    const fieldVal = timestamp;
    const timeStamp = new Timestamp(fieldVal?.seconds, fieldVal?.nanoseconds);
    const date = timeStamp.toDate();
     const finalDate = moment(date).startOf("second").fromNow();
     return finalDate
}
export const deletePost =  (id) => {
    const postDocRef = doc(db,"posts",id)
    deleteDoc(postDocRef)
}
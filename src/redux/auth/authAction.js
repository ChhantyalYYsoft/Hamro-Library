import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { setUserInfo } from "./authSlice";
import { COLLECTION } from "../../utils";
import { toast } from "react-toastify";

export const getUserInfoAction = (uid) => async (dispatch) => {
    try {
        const docRef = doc(db, COLLECTION.USERS, uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const userData = docSnap.data()
            dispatch(setUserInfo(userData))
        } else {
            console.log("No such document!");
        }
    } catch (e) {
        console.log(e)
    }
}
export const updateProfileAction = ({ uid, ...rest }) => async (dispatch) => {
    try {
        //console.log("Hello ", rest);
        const userRef = doc(db, COLLECTION.USERS, uid);
        const docPromise = setDoc(userRef, rest, { merge: true })
        toast.promise(docPromise, {
            pending: "In Progress..."
        })
        await docPromise;
        toast.success("Successfully Updated")
        // Update our state
        console.log("Before send")
        dispatch(getUserInfoAction(uid))
        console.log("After send")

    } catch (e) {
        toast.error(e.message)
        dispatch(getUserInfoAction())

    }
}
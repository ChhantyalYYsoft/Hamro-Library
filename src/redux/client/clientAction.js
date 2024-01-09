import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase-config";
import { COLLECTION } from "../../utils";
import { toast } from "react-toastify";
import { setClientList } from "./clientSlice"


// Fetching book list from firebase and saving it to redux state
export const getClientListAction = () => async (dispatch) => {
    try {

        const collectionRef = query(collection(db, COLLECTION.USERS), where('role', '==', 'client'));
        const querySnapshot = await getDocs(collectionRef);
        const clientArr = []
        querySnapshot.forEach((doc) => {
            const id = doc.id;
            const clientDetail = doc.data();
            clientArr.push({
                ...clientDetail,
                id
            })
        });

        // put the client to state
        dispatch(setClientList(clientArr))
    } catch (e) {
        toast.error(e.message)
    }
}
export const deleteClientAction = (id) => async (dispatch) => {
    try {
        const bookRef = doc(db, COLLECTION.USERS, id);
        const docPromise = deleteDoc(bookRef)
        toast.promise(docPromise, {
            pending: "In Progress..."
        })
        await docPromise;
        toast.success("Successfully Deleted")
        // Update our state
        dispatch(getClientListAction())
    } catch (e) {
        toast.error(e.message)
    }
}

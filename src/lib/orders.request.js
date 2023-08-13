import {db} from "./config.js";
import { collection, addDoc} from "firebase/firestore";

const ordersRef = collection(db,"Orders");

export const addOrder = async(order) => {
    const orderDoc = await addDoc(ordersRef,order);
    return orderDoc.id;
}
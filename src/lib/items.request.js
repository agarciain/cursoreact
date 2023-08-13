import { collection, getDocs, query, where, getDoc, doc, addDoc, writeBatch,increment} from "firebase/firestore";
import {db} from "./config.js";
  
const clotheRef = collection(db,"Items");

  export const getItems = async (category) => {
    const q = category 
      ? query(clotheRef, where('category', '==', category)): clotheRef;

    let clothes = [];
    const querRySnapshot = await getDocs(q);
    querRySnapshot.forEach((doc) => {
      clothes = [...clothes, {...doc.data() , id: doc.id}];
    });

    return clothes;
  };
  
  export const getItem = async (id) => {
    const document = doc(db, "Items", id);
    const docSnap = await getDoc(document);
    if (docSnap.exists()) return {id: docSnap.id, ...docSnap.data() }
    return null;
  }

  export const cargarData = async () => {
      ITEMS.forEach(async (item) => {
        await addDoc (clotheRef,item);
      })    
  }

  export const updateItem = async (id, item) => {
    const newBook = await updateDoc(doc(db, "Items", id), item);
    return;
  };

  export const deleteItem = async (id) => {
    return await deleteDoc(doc(db, "Items", id));
  };

  //OPERACION EN LOTE
  export const updateManyItems = async ( items ) => {
    const batch = writeBatch(db);  
    items.forEach(({id, cantidad})=>{ 
      batch.update(doc(db, "Items", id), {
        stock: increment(-cantidad)
      })
    })

    batch.commit();
  }
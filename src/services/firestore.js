// import {
//   addDoc,
//   collection,
//   deleteDoc,
//   doc,
//   getDoc,
//   getDocs,
//   updateDoc,
// } from "firebase/firestore";
// import { db } from "./firebase";

// const COLLECTION_NAME = "post";
// const COLLECTION = collection(db, COLLECTION_NAME);

// export const getDataFromFS = async () => {
//   const docArr = await getDocs(COLLECTION);
//   return docArr.docs;
// };

// export const getData = async (postId) => {
//   const docRef = await getDoc(doc(db, "posts", postId));
//   return docRef.data();
// };

// export const createData = async (post) => {
//   const docRef = await addDoc(COLLECTION, post);
//   return docRef;
// };

// export const updateData = async (postId, updatedData) => {
//   const postRef = doc(COLLECTION, postId);
//   await updateDoc(postRef, updatedData);
// };

// export const deleteData = async (postId) => {
//   const postRef = doc(COLLECTION, postId);
//   await deleteDoc(postRef);
// };

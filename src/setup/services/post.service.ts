import { Dispatch, SetStateAction } from "react";
import { getDocs, addDoc, updateDoc, deleteDoc, doc, collection } from 'firebase/firestore';
import { db } from "../config/firebase.config";

export class PostService {
    postCollection = collection(db, 'posts');

    getAll = async (setPostListState: Dispatch<SetStateAction<any>>) => {
        try {
        const data = await getDocs(this.postCollection);
        console.log(data);
        const filteredData = data.docs.map(doc => ({...doc.data(), id: doc.id}));
        return setPostListState(filteredData);
        } catch (err) {
            console.error(err);
        }
    };

    getOneById = async () => {};

    create = async (credentials: Object) => {
        try {
            await addDoc(this.postCollection, credentials);
        } catch (err) {
            console.error(err);
        }
    };

    update = async (id: string, credentials: any) => {
        try {
            const postDoc = doc(db, "posts", id);
            await updateDoc(postDoc, credentials);
        } catch(err) {
            console.log(err);
        }
    };

    delete = async (id: string) => {
        try {
            const postDoc = doc(db, "posts", id);
            await deleteDoc(postDoc);
        } catch(err) {
            console.error(err);
        }
    };
};
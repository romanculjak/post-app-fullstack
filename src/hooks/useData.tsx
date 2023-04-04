import { async } from "@firebase/util";
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, serverTimestamp, setDoc, updateDoc, } from "firebase/firestore"
import { db } from "../firebase"
import { useAuth } from "./useAuth";

export const useData = () => {

    const postCollectionRef = collection(db, "posts");

    const {user, loading} = useAuth();



    const updatePost = async (post : Post) => {

        if(!user || loading){
            return;
        }

        const myDocRef = doc(postCollectionRef, post.id);

        await updateDoc(myDocRef, {title:post.title, content: post.content} )


    }

    const createPost = async (post : Post) => {

        if(!user || loading){
            return;
        }

        const addingDoc = await addDoc(postCollectionRef, {
            ...post,
            ownerId: user?.uid,
            ownerName: user?.displayName,
            createdAt: serverTimestamp(),
        })

    }

    const deletePost = async (id: string) => {

        if(!user || loading){
            return;
        }

        const myDocRef = doc(postCollectionRef, id);

        await deleteDoc(myDocRef);

    }

    const getAllPosts = async () => {


        const docsSnap = await getDocs(query(postCollectionRef, orderBy('createdAt', 'desc')));

        console.log(docsSnap.docs)


        // return docsSnap.docs.map((doc) => ({...doc.data(), createdAt: doc.data().createdAt.toDate().toDateString(), id:doc.id}))

        const data = docsSnap.docs.map((doc) => ({...doc.data(),id:doc.id, createdAt:doc.data().createdAt.toDate().toDateString()})) as Post[];



        return data;

        // const q = query(postCollectionRef, orderBy("timestamp", "desc"));
        // const unsubscribe = onSnapshot(q, (snapshot) => {
        //     return snapshot.docs.map((doc) => ({...doc.data, id:doc.id}))
        // });

        // return unsubscribe;
    }

    const getMyPosts = () => {

    }

    return {updatePost, createPost, deletePost, getAllPosts, getMyPosts}
}
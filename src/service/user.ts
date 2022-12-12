import { addDoc, collection } from "@firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "@firebase/storage";
import { onSnapshot, query } from "firebase/firestore";
import { db, storage } from "../firebase/config";

export const addUsersData = (uid: string, userRegister: any) => {
  return addDoc(collection(db, "users", uid, "usersRegistered"), userRegister);
};

export const uploadImage = (file: any) => {
  const storageRef = ref(storage, `images/${file.name}`);

  return uploadBytes(storageRef, file);
};

export const getUsersRegisteredByUser = async (
  uid: string,
  fSnapshot: (usersReg: any) => void
) => {
  await onSnapshot(
    query(collection(db, "users", uid, "usersRegistered")),
    (snapshot) => {
      const usersReg: any = [];
      snapshot.forEach((doc) => {
        // console.log("DOC", doc.data());
        usersReg.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      console.log("USersReg:: ", usersReg);
      fSnapshot(usersReg);
    }
  );
};

export const getUrlImage = async (pathImage: string) => {
  return getDownloadURL(ref(storage, pathImage));
};

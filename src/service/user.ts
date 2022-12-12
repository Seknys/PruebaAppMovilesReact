import { addDoc, collection } from "@firebase/firestore";
import { db } from "../firebase/config";

export const addUsersData = (uid: string, userRegister: any) => {
  return addDoc(collection(db, "users", uid, "usersRegistered"), userRegister);
};

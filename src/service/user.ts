import { addDoc, collection, onSnapshot, query } from "@firebase/firestore";
import { db } from "../firebase/config";

export const addUsersData = (uid: string, userRegister: any) => {
  return addDoc(collection(db, "users", uid, "usersRegistered"), userRegister);
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

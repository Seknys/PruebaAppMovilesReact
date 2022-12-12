import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/userContext";
import { getUsersRegisteredByUser } from "../../service/user";

export default function DisplayUsers({ history }: any) {
  const [usersRegistered, setUsersRegistered] = useState<any>([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log("USer.uid: ", user?.uid);
    const usersRegisteredFunction = (snapshot: any) => {
      console.log("snapshot: ", snapshot);
      if (snapshot) {
        setUsersRegistered(snapshot);
      }
    };

    if (user) {
      getUsersRegisteredByUser(user.uid, usersRegisteredFunction);
    }
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PErsonas registradas</IonTitle>
        </IonToolbar>
      </IonHeader>
      {usersRegistered.map((user: any, index: number) => {
        console.log("USER: ", user);
        return (
          <div key={index} style={{ background: "#fff", width: "500px" }}>
            <IonCard key={index}>
              <img
                alt="Silhouette of mountains"
                src="https://ionicframework.com/docs/img/demos/card-media.png"
              />
              <IonCardHeader>
                <IonCardTitle>{user.name}</IonCardTitle>
                <IonCardSubtitle>{user.id}</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                Direccion:{user.dir}
                <br />
                Numero de familia:{user.numfam}
                <br />
                Apellido:{user.lastname}
              </IonCardContent>
            </IonCard>
          </div>
        );
      })}
    </IonPage>
  );
}

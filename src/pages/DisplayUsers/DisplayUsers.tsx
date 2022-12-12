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
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          width: "80%",
        }}
      >
        {usersRegistered.map((user: any, index: number) => {
          console.log("USER: ", user);
          return (
            <div
              key={index}
              style={{
                background: "#fff",
                width: "300px",
                marginLeft: "15px",
                marginRight: "15px",
                marginBottom: "25px",
              }}
            >
              <IonCard key={index}>
                <img alt={user.name} src={user.img} />
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
                  <br />
                  Ubicacion GPS:{user.ubication}
                </IonCardContent>
              </IonCard>
            </div>
          );
        })}
      </div>
    </IonPage>
  );
}

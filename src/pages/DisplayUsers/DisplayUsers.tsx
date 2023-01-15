import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/userContext";
import { getUsersRegisteredByUser } from "../../service/user";
import "./style.css";
import { Virtuoso } from "react-virtuoso";

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
      <IonContent>
        {/* <Virtuoso className="ion-content-scroll-host"> */}
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
                onClick={() => {
                  console.log("Value: ", user);
                }}
              >
                <IonCard key={index} className="user-deleteBttn">
                  <IonButton color="danger" size="small" className="deleteBtn">
                    x
                  </IonButton>

                  <img
                    alt={user.name}
                    src={user.img}
                    width="280"
                    height="220"
                    style={{
                      objectFit: "cover",
                    }}
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
                    <br />
                    Ubicacion GPS:{user.ubication}
                  </IonCardContent>
                </IonCard>
              </div>
            );
          })}
        </div>
        {/* </Virtuoso> */}
      </IonContent>
    </IonPage>
  );
}

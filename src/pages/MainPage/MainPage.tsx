import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Link } from "react-router-dom";
import ExploreContainer from "../../components/ExploreContainer";
import { signOutUser } from "../../service/auth";

export default function MainPage({ history }: any) {
  const logout = () => {
    // localStorage.clear();
    signOutUser();
    history.push("/login");
    console.log("logout");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CENSO</IonTitle>
        </IonToolbar>
        <IonButton onClick={logout}>
          <IonTitle>LOGOUT</IonTitle>
        </IonButton>
      </IonHeader>
      <IonContent
        fullscreen
        style={{
          width: "30%",
          display: "Flex",
          alignSelf: "center",
        }}
      >
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        {/* <ExploreContainer /> */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginTop: "20%",
            // backgroundColor: "red",
          }}
        >
          <Link to="/register-user-censo">
            <IonButton size="large" style={{ marginBottom: 55 }} shape="round">
              REGISTRAR USUARIOS
            </IonButton>
          </Link>

          <Link to="/view-users">
            <IonButton size="large" shape="round">
              VER USUARIOS
            </IonButton>
          </Link>
        </div>
      </IonContent>
    </IonPage>
  );
}

import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
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
        <IonToolbar style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <IonTitle>CENSO</IonTitle>
            <IonButton color="tertiary" onClick={logout}>
              <IonTitle>LOGOUT</IonTitle>
            </IonButton>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent
        style={{
          width: "80%",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginTop: "50px",
            // backgroundColor: "red",
          }}
        >
          <Link to="/register-user-censo">
            <IonButton
              color="tertiary"
              size="large"
              style={{ marginBottom: 55 }}
              shape="round"
            >
              REGISTRAR USUARIOS
            </IonButton>
          </Link>

          <Link to="/view-users">
            <IonButton color="tertiary" size="large" shape="round">
              VER USUARIOS
            </IonButton>
          </Link>
        </div>
      </IonContent>
    </IonPage>
  );
}

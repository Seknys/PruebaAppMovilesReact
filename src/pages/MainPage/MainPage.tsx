import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import ExploreContainer from "../../components/ExploreContainer";

export default function MainPage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CENSO</IonTitle>
        </IonToolbar>
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
          <IonButton size="large" style={{ marginBottom: 55 }} shape="round">
            REGISTRAR USUARIOS
          </IonButton>
          <IonButton size="large" shape="round">
            VER USUARIOS
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
}

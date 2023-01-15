import {
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";

function RegisterUserAuth({ history }: any) {
  const [email, setEmail] = useState<any>();
  const [pass, setPass] = useState<any>();

  return (
    <div>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Regiostrar un nuevo usuario </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonTitle class="ion-text-center" style={{ margin: "50px 0px" }}>
        Registrar
      </IonTitle>
      <IonItem
        color="tertiary"
        class="ion-margin"
        style={{ paddingInline: "30%" }}
      >
        <IonLabel position="floating">Correo electronico</IonLabel>
        <IonInput
          type="text"
          required
          onIonChange={(e) => setEmail(e.target.value)}
        ></IonInput>
      </IonItem>
      <IonItem
        color="tertiary"
        class="ion-margin"
        style={{ paddingInline: "30%" }}
      >
        <IonLabel position="floating">Contraseña</IonLabel>
        <IonInput
          type="text"
          required
          onIonChange={(e) => setPass(e.target.value)}
        ></IonInput>
      </IonItem>
    </div>
  );
}

export default RegisterUserAuth;

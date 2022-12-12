import { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/react";
import { userLogin } from "../../service/auth";
import { set } from "@firebase/database";

function Login({ history }: any) {
  const [email, setEmail] = useState<any>();
  const [password, setPassword] = useState<any>();
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const onSubmit = () => {
    setIsLoad(true);
    console.log("Submited?");
    userLogin(email, password)
      .then((res) => {
        console.log("login ", res);
        setTimeout(() => {
          setIsLoad(false);
          history.push("/main-page");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
    setIsLoad(false);
  };

  return (
    <div className="login-containter">
      <IonHeader>
        <IonToolbar>
          <IonTitle>LOGIN</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonTitle class="ion-text-center" style={{ margin: "50px 0px" }}>
        LOGIN
      </IonTitle>
      <IonItem
        color="tertiary"
        class="ion-margin"
        style={{ paddingInline: "30%" }}
      >
        <IonLabel position="floating">Email</IonLabel>
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
        <IonLabel position="floating">Password</IonLabel>
        <IonInput
          type="password"
          required
          onIonChange={(e) => setPassword(e.target.value)}
        ></IonInput>
      </IonItem>


      <IonButton
        disabled={isLoad}
        color={isLoad ? "dark" : "tertiary"}
        size="default"
        style={{ paddingInline: "47%" }}
        class="ion-padding-vertical"
        onClick={onSubmit}
      >
        ENTER
      </IonButton>
    </div>
  );
}

export default Login;

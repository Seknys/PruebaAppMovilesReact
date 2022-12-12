import { useContext, useState } from "react";
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonImg,
  IonButton,
  IonLoading,
} from "@ionic/react";
import { Link } from "react-router-dom";
import UserContext from "../../context/userContext";
import { addUsersData } from "../../service/user";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from "@capacitor/camera";
import { Filesystem, Directory } from "@capacitor/filesystem";
import { Preferences } from "@capacitor/preferences";
import { Capacitor } from "@capacitor/core";
import { camera, trash, close } from "ionicons/icons";
import { Geolocation, Geoposition } from "@ionic-native/geolocation";

function Register() {
  const [name, setName] = useState<any>();
  const [lastname, setLastname] = useState<any>();
  const [numfam, setNumfam] = useState<any>();
  const [dir, setdir] = useState<any>();
  const [id, setId] = useState<any>();
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const getLocation = async () => {
    setLoading(true);
  };

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
  };

  const submitRegister = () => {
    const newUserRegistered = {
      name: name,
      lastname: lastname,
      numfam: numfam,
      dir: dir,
      id: id,
    };
    if (user) {
      addUsersData(user.uid, newUserRegistered).then((res) => {
        console.log("res succes: ", res);
      });
    }
  };

  return (
    <div>
      <IonHeader>
        <IonToolbar>
          <IonTitle>REGISTRO</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonTitle class="ion-text-center" style={{ margin: "50px 0px" }}>
        REGISTRO INEC
      </IonTitle>
      <IonImg
        src="https://th.bing.com/th/id/R.48e1ec1ff0beca94a893d60208fcf360?rik=VIslwWPWkrdR%2bQ&riu=http%3a%2f%2fwww.ecuadorencifras.gob.ec%2fdocumentos%2fweb-inec%2fCalendario_Estadistico%2fCalendario_estaditico_2015%2fimages%2flogo+inec.png&ehk=6apOoaEuAeauNA%2bICrF1a9h2uR2uXRkNxy4XbKIoBK4%3d&risl=&pid=ImgRaw&r=0"
        alt="The Wisconsin State Capitol building in Madison, WI at night"
        style={{ width: "300px", marginLeft: "550px" }}
      ></IonImg>
      <IonItem
        color="tertiary"
        class="ion-margin"
        style={{ paddingInline: "30%" }}
      >
        <IonLabel position="floating">Nombres</IonLabel>
        <IonInput
          type="text"
          required
          onIonChange={(e) => setName(e.target.value)}
        ></IonInput>
      </IonItem>
      <IonItem
        color="tertiary"
        class="ion-margin"
        style={{ paddingInline: "30%" }}
      >
        <IonLabel position="floating">Apellidos</IonLabel>
        <IonInput
          type="text"
          required
          onIonChange={(e) => setLastname(e.target.value)}
        ></IonInput>
      </IonItem>
      <IonItem
        color="tertiary"
        class="ion-margin"
        style={{ paddingInline: "30%" }}
      >
        <IonLabel position="floating">Número de familiares</IonLabel>
        <IonInput
          type="text"
          required
          onIonChange={(e) => setNumfam(e.target.value)}
        ></IonInput>
      </IonItem>
      <IonItem
        color="tertiary"
        class="ion-margin"
        style={{ paddingInline: "30%" }}
      >
        <IonLabel position="floating">Cédula</IonLabel>
        <IonInput
          type="text"
          required
          onIonChange={(e) => setId(e.target.value)}
        ></IonInput>
      </IonItem>
      <IonItem
        color="tertiary"
        class="ion-margin"
        style={{ paddingInline: "30%" }}
      >
        <IonLabel position="floating">Dirección</IonLabel>
        <IonInput
          type="text"
          required
          onIonChange={(e) => setdir(e.target.value)}
        ></IonInput>
      </IonItem>

      <IonButton
        color="tertiary"
        size="default"
        style={{ paddingInline: "47%" }}
        class="ion-padding-vertical"
        onClick={submitRegister}
      >
        GUARDAR
      </IonButton>
      {/* <Link to="/Login">
        <IonButton
          color="tertiary"
          size="default"
          style={{ paddingInline: "46.8%" }}
          class="ion-padding-vertical"
        >
          SIGUIENTE
        </IonButton>
      </Link> */}
      <IonButton
        color="tertiary"
        size="default"
        style={{ paddingInline: "45%" }}
        class="ion-padding-vertical"
        onClick={() => takePhoto()}
      >
        FOTO DE LA CASA{" "}
      </IonButton>
      <IonLoading
        isOpen={loading}
        message={"Getting Location ...."}
        onDidDismiss={() => setLoading(false)}
      ></IonLoading>
      <IonButton
        color="tertiary"
        size="default"
        style={{ paddingInline: "46%" }}
        class="ion-padding-vertical"
        onClick={getLocation}
      >
        LOCALIZACIÓN
      </IonButton>
    </div>
  );
}

export default Register;

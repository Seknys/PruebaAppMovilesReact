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
  IonPage,
  IonContent,
} from "@ionic/react";
import { Link } from "react-router-dom";
import UserContext from "../../context/userContext";
import { addUsersData, getUrlImage, uploadImage } from "../../service/user";
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
function Register({ history }: any) {
  const [name, setName] = useState<any>();
  const [lastname, setLastname] = useState<any>();
  const [numfam, setNumfam] = useState<any>();
  const [dir, setdir] = useState<any>();
  const [id, setId] = useState<any>();
  const { user } = useContext(UserContext);

  const [loading, setLoading] = useState<boolean>(false);
  const [position, setPosition] = useState<Geoposition>();
  const [redirect, setRedirect] = useState<boolean>(false);
  const [file, setFile] = useState<any>();

  const geoLocation = async () => {
    setLoading(true);
    setRedirect(true);
    try {
      const position = await Geolocation.getCurrentPosition();
      setPosition(position);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  };

  const submitRegister = () => {
    console.log("FILE: ", file.name);
    const response = uploadImage(file);
    response.then((res) => {
      console.log("res: ", res.ref.fullPath);
      getUrlImage(res.ref.fullPath).then((url) => {
        console.log("url: ", url);
        const newUserRegistered = {
          name: name,
          lastname: lastname,
          numfam: numfam,
          dir: dir,
          id: id,
          img: url,
          ubication: `${position?.coords.latitude} ${position?.coords.longitude}`,
        };
        if (user) {
          addUsersData(user.uid, newUserRegistered).then((res) => {
            console.log("res succes: ", res);

            history.push("/main-page");
          });
        } else {
          console.log("no hay usuario");
        }
      });
    });
  };

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    const fileName = new Date().getTime() + ".jpeg";
    const newFile = {
      filepath: fileName,
      webviewPath: photo.webPath,
    };
    setFile(newFile);
    console.log("newFile: ", newFile);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Popeyes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonTitle class="ion-text-center" style={{ marginTop: "50px" }}>
          Añadir Nuevo popeye
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
          <IonLabel position="floating">Número de Cargo</IonLabel>
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

        <IonButton
          color="success"
          size="default"
          style={{ paddingInline: "47%" }}
          class="ion-padding-vertical"
          onClick={submitRegister}
        >
          GUARDAR
        </IonButton>
        <IonButton
          color="tertiary"
          size="default"
          style={{ paddingInline: "45%" }}
          class="ion-padding-vertical"
          // onClick={() => takePhoto()}
        >
          <input
            type="file"
            onChange={(e: any) => {
              const file = e.target.files[0];
              if (!file) {
                return;
              }
              setFile(file);
            }}
          ></input>
        </IonButton>
        <IonButton routerLink="/main-page">Menu Principal</IonButton>
      </IonContent>
    </IonPage>
  );
}

export default Register;

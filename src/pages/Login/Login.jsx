import { useState } from 'react'; 
import { IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput } from '@ionic/react';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div className="login-containter">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        LOGIN
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonTitle class="ion-text-center" style={{ margin: '50px 0px' }}>
                LOGIN
            </IonTitle>
            <IonItem color="tertiary" class="ion-margin" style={{ paddingInline: '30%' }}>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput type="text" required onIonChange={(e) => setEmail(e.target.value)}></IonInput>
            </IonItem>

            <IonItem color="tertiary" class="ion-margin" style={{ paddingInline: '30%' }}>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput type="text" required onIonChange={(e) => setPassword(e.target.value)}></IonInput>
            </IonItem>


            <ion-button color="tertiary" size="default" style={{ paddingInline: '47%' }} class="ion-padding-vertical">ENTER</ion-button>
        </div>
    )
}

export default Login
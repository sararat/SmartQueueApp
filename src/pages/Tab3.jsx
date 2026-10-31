
import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage
} from '@ionic/react';

const Tab3Page = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="smart-queue-toolbar">
          <IonTitle>Tab Three</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent />
    </IonPage>
  );
};

export default Tab3Page;

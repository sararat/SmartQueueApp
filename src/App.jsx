import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { setupIonicReact } from '@ionic/react';
import {
  homeOutline,
  ticketOutline,
  personCircleOutline,
} from 'ionicons/icons';

// Import Pages
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

// Ionic CSS
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

// Custom CSS
import './theme/variables.css';
import './theme/global.css';

setupIonicReact({
  mode: 'ios'
});

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route
              path="/tab1"
              element={<Tab1 />}
            />
            <Route
              path="/tab2"
              element={<Tab2 />}
            />
            <Route
              path="/tab3"
              element={<Tab3 />}
            />
            <Route
              path="/"
              element={<Navigate to="/tab1" replace />}
            />
          </IonRouterOutlet>
          <IonTabBar
            slot="bottom"
            className="smart-queue-tab-bar"
          >

            <IonTabButton
              tab="tab1"
              href="/tab1"
            >
              <IonIcon icon={homeOutline} />
              <IonLabel>หน้าหลัก</IonLabel>
            </IonTabButton>
            <IonTabButton
              tab="tab2"
              href="/tab2"
            >
              <IonIcon icon={ticketOutline} />
              <IonLabel>คิวของฉัน</IonLabel>
            </IonTabButton>
            <IonTabButton
              tab="tab3"
              href="/tab3"
            >
              <IonIcon icon={personCircleOutline} />
              <IonLabel>โปรไฟล์</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

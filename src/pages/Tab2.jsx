import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonIcon,
  IonBadge,
  IonButton,
  IonText,
} from '@ionic/react';

import {
  ticketOutline,
  timeOutline,
  restaurantOutline,
  checkmarkCircleOutline,
  closeCircleOutline,
  peopleOutline,
} from 'ionicons/icons';

import './Tab2.css';

const Tab2 = () => {
  // ตรวจสอบว่ามีคิวหรือไม่
  const hasQueue = true;
  // ข้อมูลคิวของลูกค้า
  const queue = {
    number: 'A-012',
    restaurant: 'ร้านอาหารอร่อยดี',
    peopleAhead: 7,
    estimatedWait: 20,
    status: 'กำลังรอคิว',
  };

  // ฟังก์ชันยกเลิกคิว
  const handleCancelQueue = () => {

    const confirmCancel = window.confirm(
      'คุณต้องการยกเลิกคิวนี้หรือไม่?'
    );
    if (confirmCancel) {
      alert('ตัวอย่างระบบ: ยกเลิกคิวสำเร็จ');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="smart-queue-toolbar">
          <IonTitle>คิวของฉัน</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="my-queue-content">
        <div className="my-queue-container">
          <div className="queue-welcome">
            <h1>คิวของฉัน 🎫</h1>
            <p>ตรวจสอบสถานะคิวของคุณได้ที่นี่</p>
          </div>
          {hasQueue ? (
            <IonCard className="my-queue-card">
              <div className="my-queue-banner">
                <IonIcon icon={ticketOutline} />
                <p>หมายเลขคิวของคุณ</p>
                <h2>{queue.number}</h2>
                <IonBadge color="warning">
                  {queue.status}
                </IonBadge>
              </div>
              <IonCardContent>

                <div className="queue-restaurant">
                  <IonIcon icon={restaurantOutline} />
                  <div>
                    <strong>{queue.restaurant}</strong>
                    <p>รายละเอียดการจองคิว</p>
                  </div>
                </div>
                <div className="queue-divider" />
                <div className="queue-detail-row">
                  <div className="queue-detail-icon">
                    <IonIcon icon={peopleOutline} />
                  </div>
                  <div className="queue-detail-text">
                    <span>จำนวนคิวก่อนหน้า</span>
                    <strong>{queue.peopleAhead} คิว</strong>
                  </div>
                </div>

                <div className="queue-detail-row">
                  <div className="queue-detail-icon">
                    <IonIcon icon={timeOutline} />
                  </div>
                  <div className="queue-detail-text">
                    <span>เวลารอโดยประมาณ</span>
                    <strong>{queue.estimatedWait} นาที</strong>
                  </div>
                </div>

                <div className="queue-notice">
                  <IonIcon icon={checkmarkCircleOutline} />
                  <IonText>
                    กรุณารอจนกว่าจะถึงคิวของคุณ
                  </IonText>
                </div>

                <IonButton
                  expand="block"
                  color="danger"
                  fill="outline"
                  onClick={handleCancelQueue}
                >
                  <IonIcon
                    slot="start"
                    icon={closeCircleOutline}
                  />
                  ยกเลิกคิว
                </IonButton>
              </IonCardContent>
            </IonCard>
          ) : (

            <IonCard className="empty-queue-card">
              <IonCardContent>
                <IonIcon
                  icon={ticketOutline}
                  className="empty-queue-icon"
                />
                <h2>คุณยังไม่มีคิว</h2>

                <p>
                  ไปที่หน้า Home เพื่อเลือกร้านอาหารและรับคิว
                </p>
              </IonCardContent>
            </IonCard>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

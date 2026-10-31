
import React from 'react';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonButton,
  IonIcon,
  IonBadge,
  IonText,
} from '@ionic/react';

import {
  restaurantOutline,
  peopleOutline,
  timeOutline,
  ticketOutline,
  arrowForwardOutline,
  checkmarkCircleOutline,
} from 'ionicons/icons';

import './Tab1.css';

const Tab1 = () => {

  // ข้อมูลร้านอาหาร
  const restaurantName = 'ร้านอาหารอร่อยดี';
  const waitingQueues = 8;
  const estimatedWait = 20;

  // ฟังก์ชันรับคิว
  const handleGetQueue = () => {
    alert('รับคิวสำเร็จ! หมายเลขคิว A-012');
  };

  return (
    <IonPage>

      {/* Header */}
      <IonHeader>
        <IonToolbar className="smart-queue-toolbar">
          <IonTitle>Smart Queue</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Main Content */}
      <IonContent className="home-content">

        <div className="home-container">

          {/* Welcome Section */}
          <div className="welcome-section">
            <p className="welcome-label">ยินดีต้อนรับ</p>
            <h1>หิวแล้วใช่ไหม?</h1>
            <p>จองคิวล่วงหน้า ไม่ต้องยืนรอ</p>
          </div>

          {/* Restaurant Card */}
          <IonCard className="restaurant-card">

            <div className="restaurant-banner">
              <IonIcon
                icon={restaurantOutline}
                className="restaurant-main-icon"
              />

              <IonBadge color="success" className="open-badge">
                เปิดให้บริการ
              </IonBadge>
            </div>

            <IonCardContent>

              <h2>{restaurantName}</h2>

              <p className="restaurant-description">
                อาหารอร่อย สดใหม่ บริการรวดเร็ว
              </p>

              {/* Restaurant Information */}
              <div className="restaurant-info">

                <div className="info-item">
                  <IonIcon icon={peopleOutline} />

                  <div>
                    <strong>{waitingQueues} คิว</strong>
                    <span>รออยู่ขณะนี้</span>
                  </div>
                </div>

                <div className="info-item">
                  <IonIcon icon={timeOutline} />

                  <div>
                    <strong>ประมาณ {estimatedWait} นาที</strong>
                    <span>เวลารอโดยประมาณ</span>
                  </div>
                </div>

              </div>

              {/* Get Queue Button */}
              <IonButton
                expand="block"
                size="large"
                onClick={handleGetQueue}
                className="get-queue-button"
              >
                <IonIcon
                  slot="start"
                  icon={ticketOutline}
                />

                รับคิวเลย

                <IonIcon
                  slot="end"
                  icon={arrowForwardOutline}
                />
              </IonButton>

            </IonCardContent>
          </IonCard>

          {/* Queue Status */}
          <div className="section-heading">
            <h2>สถานะคิวของร้าน</h2>
          </div>

          <IonCard className="queue-status-card">
            <IonCardContent>

              <div className="queue-status-header">

                <IonIcon
                  icon={checkmarkCircleOutline}
                  color="success"
                />

                <IonText color="dark">
                  <strong>ระบบรับคิวพร้อมใช้งาน</strong>
                </IonText>

              </div>

              <p>
                ขณะนี้มีลูกค้ารอรับบริการ {waitingQueues} คิว
              </p>

              <div className="queue-progress">
                <div className="queue-progress-bar" />
              </div>

              <div className="queue-footer">
                <span>คิวที่กำลังให้บริการ</span>
                <strong>A-004</strong>
              </div>

            </IonCardContent>
          </IonCard>

          {/* How to Use */}
          <div className="section-heading">
            <h2>ใช้งานง่ายใน 3 ขั้นตอน</h2>
          </div>

          <div className="steps-container">

            <div className="step-item">
              <div className="step-number">1</div>

              <div>
                <strong>เลือกร้านอาหาร</strong>
                <p>ดูจำนวนคิวที่กำลังรอ</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">2</div>

              <div>
                <strong>กดรับคิว</strong>
                <p>รับหมายเลขคิวของคุณ</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">3</div>

              <div>
                <strong>รอเรียกคิว</strong>
                <p>เตรียมตัวเมื่อใกล้ถึงคิว</p>
              </div>
            </div>

          </div>

        </div>

      </IonContent>

    </IonPage>
  );
};

export default Tab1;

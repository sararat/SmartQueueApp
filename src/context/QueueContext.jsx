
import React, { createContext, useContext, useState } from 'react';

const QueueContext = createContext(null);

export const QueueProvider = ({ children }) => {
  const [queue, setQueue] = useState(null);
  const [nextNumber, setNextNumber] = useState(1);

  // ฟังก์ชันรับคิว
  const takeQueue = () => {
    if (queue) {
      return queue;
    }

    const newQueue = {
      number: `A-${String(nextNumber).padStart(3, '0')}`,
      restaurant: 'ร้านอาหารอร่อยดี',
      peopleAhead: 8,
      estimatedWait: 20,
      status: 'กำลังรอคิว',
      createdAt: new Date().toLocaleString('th-TH'),
    };

    setQueue(newQueue);
    setNextNumber(prev => prev + 1);

    return newQueue;
  };

  // ฟังก์ชันยกเลิกคิว
  const cancelQueue = () => {
    setQueue(null);
  };

  return (
    <QueueContext.Provider
      value={{
        queue,
        takeQueue,
        cancelQueue,
      }}
    >
      {children}
    </QueueContext.Provider>
  );
};

// Hook สำหรับเรียกใช้ Context
export const useQueue = () => {
  const context = useContext(QueueContext);

  if (context === null) {
    throw new Error(
      'useQueue must be used within QueueProvider'
    );
  }

  return context;
};

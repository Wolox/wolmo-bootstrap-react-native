import Config from 'react-native-config';
import PushNotification from 'react-native-push-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

let lastId = 0;
const senderId = Config.NOTIFICATIONS_SENDER_ID;

export const getFirebaseToken = async () => {
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  if (!fcmToken) {
    fcmToken = await messaging().getToken();
    if (fcmToken) await AsyncStorage.setItem('fcmToken', fcmToken);
  }
  return fcmToken;
};

export const deleteFirebaseToken = async () => {
  await AsyncStorage.removeItem('fcmToken');
};

export const requestPermission = () =>
  messaging()
    .requestPermission()
    .then(() => {
      getFirebaseToken();
    })
    .catch(() => {
      // TODO: add a better handler for permissions rejection
      console.log('Error with permissions');
    });

export const checkPermission = async () => {
  const enabled = await messaging().hasPermission();
  if (enabled) getFirebaseToken();
  else requestPermission();
};

export const registerAppWithFCM = async () => {
  await messaging().registerForRemoteNotifications();
  checkPermission();
};

export const configPushNotifications = () => {
  PushNotification.configure({
    onRegister: async (token: string) => {
      if (token) await AsyncStorage.setItem('gcmToken', JSON.stringify(token));
    },
    senderID: senderId,
    permissions: {
      alert: true,
      badge: true,
      sound: true
    },
    popInitialNotification: true,
    requestPermissions: true
  });
};

// TODO this make us able to send notifications locally
export const setLocalNotifications = () => {
  lastId++;
  PushNotification.localNotification({
    id: `${lastId}`,
    autoCancel: true,
    vibration: 100,
    ongoing: false,
    title: 'Local Notification',
    message: 'Local Notification message',
    playSound: false,
    soundName: 'default',
    actions: '["Yes", "No"]'
  });
};

export const checkNotificationPermission = (cbk: any) => PushNotification.checkPermissions(cbk);

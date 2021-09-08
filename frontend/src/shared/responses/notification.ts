import {showNotification} from "stores/notifications";

interface PushNotification {
  msg: string;
}

const pushNotification = (params: PushNotification): void => {
  showNotification(params.msg);
};

export default pushNotification;
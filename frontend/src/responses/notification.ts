import {showNotification} from "stores/view/notifications";

interface Params { msg: string; }

const pushNotification = (params: Params): void => {
  showNotification(params.msg);
};

export default pushNotification;
import type {App} from "../../models/App";

interface Params {}

const signout = async (app: App, params: Params): Promise<void> => {
  console.log(params);
};

export default signout;
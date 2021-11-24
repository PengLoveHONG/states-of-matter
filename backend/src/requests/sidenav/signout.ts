import type {Services} from "../../models/Services";

interface Params {}

const signout = async (services: Services, params: Params): Promise<void> => {
  console.log(params);
};

export default signout;
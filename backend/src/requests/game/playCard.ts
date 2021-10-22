import type {App} from "../../models/App";

interface Params {
  field: string;
  gid: number;
  id: number;
  public_key: string;
  signature: string;
}

const playCard = async (app: App, params: Params): Promise<void> => {
  const {eos} = app;

  const transaction = await eos.pushAction("playcard", params);

  if (!transaction) { return; }
};

export default playCard;
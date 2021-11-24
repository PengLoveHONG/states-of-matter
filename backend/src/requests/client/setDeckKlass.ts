import type {Services} from "../../models/Services";

interface Params {
  id: number;
  klass: number;
  public_key: string;
  signature: string;
}

const setDeckKlass = async (services: Services, params: Params): Promise<void> => {
  const {blockchain, io} = services;
  const {id, klass} = params;

  const trx = await blockchain.transact("setdeckklass", params);

  if (!trx) { return; }

  io.emit("setDeckKlass", {id, klass});
};

export default setDeckKlass;
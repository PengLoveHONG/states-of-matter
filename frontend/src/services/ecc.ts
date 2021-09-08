declare const eosjs_ecc: any;

class EccService {
  public readonly ecc: any;

  constructor (ecc: any) {
    this.ecc = ecc;
  }

  async randomKey (): Promise<string> {
    try {
      return await this.ecc.randomKey();
    } catch (error) {
      console.error(error);
    }
  }

  sign (data: string, private_key: string): string {
    return this.ecc.sign(data, private_key);
  }

  toPublic (private_key: string): string {
    return this.ecc.privateToPublic(private_key);
  }
}

const eccService = new EccService(eosjs_ecc);

const generateBound = (publicKey: string): string => {
  const buffer = eosjs_ecc.PublicKey.fromString(publicKey).toBuffer();
  const hex = eosjs_ecc.sha256(buffer);

  return `0x${hex}`;
};

const generatePrivateKey = async (): Promise<string> => {
  try {
    return await eosjs_ecc.randomKey();
  } catch (err) {
    console.error(err);
  }
};

const generateSignature = (data: any, privateKey: string): string => {
  return eosjs_ecc.sign(data, privateKey);
};

const privateToPublic = (privateKey: string): string => {
  return eosjs_ecc.privateToPublic(privateKey);
};

export default eccService;

export {
  generateBound,
  generatePrivateKey,
  generateSignature,
  privateToPublic
};
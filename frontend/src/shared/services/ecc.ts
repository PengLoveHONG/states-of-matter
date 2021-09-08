declare const eosjs_ecc: any;

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

export {
  generateBound,
  generatePrivateKey,
  generateSignature,
  privateToPublic
};
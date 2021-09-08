declare const CryptoJS: any;

const decryptPrivateKeyHash = (
  privateKeyHash: string,
  password: string
): string => {
  const decrypted = CryptoJS.AES.decrypt(privateKeyHash, password);
  return decrypted.toString(CryptoJS.enc.Utf8);
};

const encryptPrivateKey = (privateKey: string, password: string): string => {
  return CryptoJS.AES.encrypt(privateKey, password).toString();
};

export {decryptPrivateKeyHash, encryptPrivateKey};
declare const CryptoJS: any;

class CryptoService {
  public readonly crypto: any;

  constructor (crypto: any) {
    this.crypto = crypto;
  }

  decrypt (private_key_hash: string, password: string): string {
    const decrypted = CryptoJS.AES.decrypt(private_key_hash, password);
    return decrypted.toString(CryptoJS.enc.Utf8);
  }

  encrypt (privateKey: string, password: string): string {
    return CryptoJS.AES.encrypt(privateKey, password).toString();
  }
}

const cryptoService = new CryptoService(CryptoJS);

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

export default cryptoService;
export {decryptPrivateKeyHash, encryptPrivateKey};
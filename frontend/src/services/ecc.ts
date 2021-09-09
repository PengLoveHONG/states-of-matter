declare const eosjs_ecc: any;

class EccService {
  private readonly _ecc: any;

  constructor () {
    this._ecc = eosjs_ecc;
  }

  async randomKey (): Promise<string> {
    try {
      return await this._ecc.randomKey();
    } catch (error) {
      console.error(error);
    }
  }

  sign (data: string, private_key: string): string {
    return this._ecc.sign(data, private_key);
  }

  toPublic (private_key: string): string {
    return this._ecc.privateToPublic(private_key);
  }
}

const eccService = new EccService();

export default eccService;
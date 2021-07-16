import CryptoTS from 'crypto-ts';

import{
    Password
} from "./password";


abstract class CryptoCoding extends Password{
    
    public abstract getText(): string;
}

export class CryptoEncoding extends CryptoCoding {
    password: Password;

    constructor(password: Password){
        super();
        this.password = password;
    }

    public getText(): string{
        return CryptoTS.AES.encrypt(this.password.getText(), "CSE4502").toString();
    }
}

export class CryptoDEcoding extends CryptoCoding {
    password: Password;

    constructor(password: Password){
        super();
        this.password = password;
    }

  public getText(): string {
    const bytes = CryptoTS.AES.decrypt(this.password.getText().toString(), "CSE4502");
    return bytes.toString(CryptoTS.enc.Utf8);
  }
}
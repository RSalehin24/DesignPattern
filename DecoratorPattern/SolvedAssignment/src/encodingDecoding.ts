import{
    Password
} from "./password";

import{
    LengthEncoding,
    LengthDecoding
} from "./lengthCoding";

import{
    CryptoEncoding,
    CryptoDEcoding
} from "./cryptoCoding"

let password = new Password();
password.setText("Reyan");
password = new CryptoEncoding(password);
password = new LengthEncoding(password);
console.log(password.getText());
password = new LengthDecoding(password);
password = new CryptoDEcoding(password);
console.log(password.getText());
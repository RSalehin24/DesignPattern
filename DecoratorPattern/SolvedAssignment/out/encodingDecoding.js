"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var password_1 = require("./password");
var lengthCoding_1 = require("./lengthCoding");
var cryptoCoding_1 = require("./cryptoCoding");
var password = new password_1.Password();
password.setText("Reyan");
password = new cryptoCoding_1.CryptoEncoding(password);
password = new lengthCoding_1.LengthEncoding(password);
console.log(password.getText());
password = new lengthCoding_1.LengthDecoding(password);
password = new cryptoCoding_1.CryptoDEcoding(password);
console.log(password.getText());

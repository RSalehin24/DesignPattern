"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoDEcoding = exports.CryptoEncoding = void 0;
var crypto_ts_1 = __importDefault(require("crypto-ts"));
var password_1 = require("./password");
var CryptoCoding = /** @class */ (function (_super) {
    __extends(CryptoCoding, _super);
    function CryptoCoding() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CryptoCoding;
}(password_1.Password));
var CryptoEncoding = /** @class */ (function (_super) {
    __extends(CryptoEncoding, _super);
    function CryptoEncoding(password) {
        var _this = _super.call(this) || this;
        _this.password = password;
        return _this;
    }
    CryptoEncoding.prototype.getText = function () {
        return crypto_ts_1.default.AES.encrypt(this.password.getText(), "CSE4502").toString();
    };
    return CryptoEncoding;
}(CryptoCoding));
exports.CryptoEncoding = CryptoEncoding;
var CryptoDEcoding = /** @class */ (function (_super) {
    __extends(CryptoDEcoding, _super);
    function CryptoDEcoding(password) {
        var _this = _super.call(this) || this;
        _this.password = password;
        return _this;
    }
    CryptoDEcoding.prototype.getText = function () {
        var bytes = crypto_ts_1.default.AES.decrypt(this.password.getText().toString(), "CSE4502");
        return bytes.toString(crypto_ts_1.default.enc.Utf8);
    };
    return CryptoDEcoding;
}(CryptoCoding));
exports.CryptoDEcoding = CryptoDEcoding;

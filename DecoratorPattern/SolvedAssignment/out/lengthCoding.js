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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LengthDecoding = exports.LengthEncoding = void 0;
var password_1 = require("./password");
var LengthCoding = /** @class */ (function (_super) {
    __extends(LengthCoding, _super);
    function LengthCoding() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LengthCoding;
}(password_1.Password));
var LengthEncoding = /** @class */ (function (_super) {
    __extends(LengthEncoding, _super);
    function LengthEncoding(password) {
        var _this = _super.call(this) || this;
        _this.password = password;
        return _this;
    }
    LengthEncoding.prototype.getText = function () {
        return this.password.getText().replace(/(.)\1+/g, function (capture) { return (capture.length > 1 ? capture.length : "") + capture[0]; });
    };
    return LengthEncoding;
}(LengthCoding));
exports.LengthEncoding = LengthEncoding;
var LengthDecoding = /** @class */ (function (_super) {
    __extends(LengthDecoding, _super);
    function LengthDecoding(password) {
        var _this = _super.call(this) || this;
        _this.password = password;
        return _this;
    }
    LengthDecoding.prototype.getText = function () {
        return this.password.getText().replace(/([0-9]+)(.)/g, function (_match, count, char) {
            return char.repeat(Number(count));
        });
    };
    return LengthDecoding;
}(LengthCoding));
exports.LengthDecoding = LengthDecoding;

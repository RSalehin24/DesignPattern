"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password = void 0;
var Password = /** @class */ (function () {
    function Password() {
        this.text = "";
    }
    Password.prototype.getText = function () {
        return this.text;
    };
    ;
    Password.prototype.setText = function (text) {
        this.text = text;
    };
    ;
    return Password;
}());
exports.Password = Password;

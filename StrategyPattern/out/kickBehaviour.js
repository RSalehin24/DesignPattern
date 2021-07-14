"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoKick = exports.LightningKick = exports.TornadoKick = void 0;
//Concerte Strategy
var TornadoKick = /** @class */ (function () {
    function TornadoKick() {
    }
    TornadoKick.prototype.kick = function () {
        console.log("Tornado kicking");
    };
    return TornadoKick;
}());
exports.TornadoKick = TornadoKick;
var LightningKick = /** @class */ (function () {
    function LightningKick() {
    }
    LightningKick.prototype.kick = function () {
        console.log("Lightning kicking");
    };
    return LightningKick;
}());
exports.LightningKick = LightningKick;
var NoKick = /** @class */ (function () {
    function NoKick() {
    }
    NoKick.prototype.kick = function () {
        console.log("Has no kick");
    };
    return NoKick;
}());
exports.NoKick = NoKick;
//# sourceMappingURL=kickBehaviour.js.map
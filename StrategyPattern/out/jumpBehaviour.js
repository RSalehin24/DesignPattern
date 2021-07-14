"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoJump = exports.LongJump = exports.ShortJump = void 0;
var ShortJump = /** @class */ (function () {
    function ShortJump() {
    }
    ShortJump.prototype.jump = function () {
        console.log("Doing short jump");
    };
    return ShortJump;
}());
exports.ShortJump = ShortJump;
var LongJump = /** @class */ (function () {
    function LongJump() {
    }
    LongJump.prototype.jump = function () {
        console.log("Doing Long jump");
    };
    return LongJump;
}());
exports.LongJump = LongJump;
var NoJump = /** @class */ (function () {
    function NoJump() {
    }
    NoJump.prototype.jump = function () {
        console.log("Has no jump");
    };
    return NoJump;
}());
exports.NoJump = NoJump;
//# sourceMappingURL=jumpBehaviour.js.map
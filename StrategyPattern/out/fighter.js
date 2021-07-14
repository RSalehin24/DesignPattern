"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fighter = void 0;
var Fighter = /** @class */ (function () {
    function Fighter(name, kickBehaviour, jumpBehaviour) {
        this.name = name;
        this.kickBehaviour = kickBehaviour;
        this.jumpbehaviour = jumpBehaviour;
    }
    Fighter.prototype.display = function () {
        console.log(this.name + " is displaying.");
    };
    Fighter.prototype.setKickBehaviour = function (kickBehaviour) {
        this.kickBehaviour = kickBehaviour;
    };
    Fighter.prototype.setJumpBehaviour = function (jumpBehaviour) {
        this.jumpbehaviour = jumpBehaviour;
    };
    Fighter.prototype.roll = function () {
        console.log(this.name + " is rolling.");
    };
    Fighter.prototype.punch = function () {
        console.log(this.name + " is punching.");
    };
    Fighter.prototype.kick = function () {
        this.kickBehaviour.kick();
    };
    Fighter.prototype.jump = function () {
        this.jumpbehaviour.jump();
    };
    return Fighter;
}());
exports.Fighter = Fighter;
//# sourceMappingURL=fighter.js.map
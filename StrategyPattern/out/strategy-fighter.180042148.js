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
var ShortJump = /** @class */ (function () {
    function ShortJump() {
    }
    ShortJump.prototype.jump = function () {
        console.log("Doing short jump");
    };
    return ShortJump;
}());
var LongJump = /** @class */ (function () {
    function LongJump() {
    }
    LongJump.prototype.jump = function () {
        console.log("Doing Long jump");
    };
    return LongJump;
}());
var NoJump = /** @class */ (function () {
    function NoJump() {
    }
    NoJump.prototype.jump = function () {
        console.log("Has no jump");
    };
    return NoJump;
}());
//Concerte Strategy
var TornadoKick = /** @class */ (function () {
    function TornadoKick() {
    }
    TornadoKick.prototype.kick = function () {
        console.log("Tornado kicking");
    };
    return TornadoKick;
}());
var LightningKick = /** @class */ (function () {
    function LightningKick() {
    }
    LightningKick.prototype.kick = function () {
        console.log("Lightning kicking");
    };
    return LightningKick;
}());
var NoKick = /** @class */ (function () {
    function NoKick() {
    }
    NoKick.prototype.kick = function () {
        console.log("Has no kick");
    };
    return NoKick;
}());
var Fighter1 = /** @class */ (function (_super) {
    __extends(Fighter1, _super);
    function Fighter1(name, kickBehaviour, jumpBehaviour) {
        return _super.call(this, name, kickBehaviour, jumpBehaviour) || this;
    }
    return Fighter1;
}(Fighter));
var Fighter2 = /** @class */ (function (_super) {
    __extends(Fighter2, _super);
    function Fighter2(name, kickBehaviour, jumpBehaviour) {
        return _super.call(this, name, kickBehaviour, jumpBehaviour) || this;
    }
    return Fighter2;
}(Fighter));
var Fighter3 = /** @class */ (function (_super) {
    __extends(Fighter3, _super);
    function Fighter3(name, kickBehaviour, jumpBehaviour) {
        return _super.call(this, name, kickBehaviour, jumpBehaviour) || this;
    }
    return Fighter3;
}(Fighter));
var Habib = new Fighter1("Habib", new TornadoKick, new NoJump);
Habib.display();
Habib.roll();
Habib.punch();
Habib.kick();
Habib.jump();
Habib.setKickBehaviour(new LightningKick);
Habib.kick();
Habib.setJumpBehaviour(new LongJump);
Habib.jump();
var Kasfi = new Fighter2("Kasfi", new NoKick, new NoJump);
Kasfi.display();
Kasfi.jump();
Kasfi.kick();
Kasfi.setKickBehaviour(new LightningKick);
Kasfi.setJumpBehaviour(new LongJump);
Kasfi.jump();
Kasfi.kick();
Kasfi.punch();
Kasfi.roll();
var Asmani = new Fighter3("Asmani", new LightningKick, new ShortJump);
Asmani.display();
Asmani.roll();
Asmani.punch();
Asmani.jump();
Asmani.kick();
Asmani.setJumpBehaviour(new NoJump);
Asmani.jump();
Asmani.setKickBehaviour(new NoKick);
Asmani.kick();
//# sourceMappingURL=strategy-fighter.180042148.js.map
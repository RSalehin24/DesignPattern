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
exports.Fighter1 = void 0;
var fighter_1 = require("./fighter");
var Fighter1 = /** @class */ (function (_super) {
    __extends(Fighter1, _super);
    function Fighter1(name, kickBehaviour, jumpBehaviour) {
        return _super.call(this, name, kickBehaviour, jumpBehaviour) || this;
    }
    return Fighter1;
}(fighter_1.Fighter));
exports.Fighter1 = Fighter1;
//# sourceMappingURL=fighter1.js.map
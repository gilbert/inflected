"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toString = Object.prototype.toString;
function isFunc(obj) {
    return toString.call(obj) === "[object Function]";
}
exports.default = isFunc;

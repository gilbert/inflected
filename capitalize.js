"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function capitalize(str) {
    const result = str === null || str === undefined ? "" : String(str);
    return result.charAt(0).toUpperCase() + result.slice(1);
}
exports.default = capitalize;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ordinal_1 = __importDefault(require("./ordinal"));
function ordinalize(number) {
    return `${number}${ordinal_1.default(number)}`;
}
exports.default = ordinalize;

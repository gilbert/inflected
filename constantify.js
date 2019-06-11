"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const underscore_1 = __importDefault(require("./underscore"));
function constantify(word) {
    return underscore_1.default(word).toUpperCase().replace(/\s+/g, "_");
}
exports.default = constantify;

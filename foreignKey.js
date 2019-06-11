"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const underscore_1 = __importDefault(require("./underscore"));
function foreignKey(className, separateWithUnderscore = true) {
    return `${underscore_1.default(className)}${separateWithUnderscore ? "_id" : "id"}`;
}
exports.default = foreignKey;

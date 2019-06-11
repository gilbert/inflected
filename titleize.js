"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const humanize_1 = __importDefault(require("./humanize"));
const underscore_1 = __importDefault(require("./underscore"));
function titleize(word) {
    return humanize_1.default(underscore_1.default(word)).replace(/(^|[\s¿/]+)([a-z])/g, function (match, _boundary, letter, _idx, _string) {
        return match.replace(letter, letter.toUpperCase());
    });
}
exports.default = titleize;

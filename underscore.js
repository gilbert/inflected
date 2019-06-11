"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inflections_1 = __importDefault(require("./inflections"));
function underscore(camelCasedWord) {
    let result = "" + camelCasedWord;
    result = result.replace(new RegExp("(?:([A-Za-z\\d])|^)(" +
        inflections_1.default().acronymRegex.source +
        ")(?=\\b|[^a-z])", "g"), function (_match, $1, $2) {
        return "" + ($1 || "") + ($1 ? "_" : "") + $2.toLowerCase();
    });
    result = result.replace(/([A-Z\d]+)([A-Z][a-z])/g, "$1_$2");
    result = result.replace(/([a-z\d])([A-Z])/g, "$1_$2");
    result = result.replace(/-/g, "_");
    return result.toLowerCase();
}
exports.default = underscore;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const transliterations_1 = __importDefault(require("./transliterations"));
function transliterate(string, options = {}) {
    const locale = options.locale || "en";
    const replacement = options.replacement || "?";
    return transliterations_1.default(locale).transliterate(string, replacement);
}
exports.default = transliterate;

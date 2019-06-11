"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const transliterate_1 = __importDefault(require("./transliterate"));
function parameterize(string, options = {}) {
    if (options.separator === undefined) {
        options.separator = "-";
    }
    if (options.separator === null) {
        options.separator = "";
    }
    // replace accented chars with their ascii equivalents
    let result = transliterate_1.default(string, options);
    result = result.replace(/[^a-z0-9\-_]+/ig, options.separator);
    if (options.separator.length) {
        const separatorRegex = new RegExp(options.separator);
        // no more than one of the separator in a row
        result = result.replace(new RegExp(separatorRegex.source + "{2,}"), options.separator);
        // remove leading/trailing separator
        result = result.replace(new RegExp("^" + separatorRegex.source + "|" + separatorRegex.source + "$", "i"), "");
    }
    return result.toLowerCase();
}
exports.default = parameterize;

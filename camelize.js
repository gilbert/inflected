"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inflections_1 = __importDefault(require("./inflections"));
const capitalize_1 = __importDefault(require("./capitalize"));
function camelize(term, uppercaseFirstLetter) {
    if (uppercaseFirstLetter === null || uppercaseFirstLetter === undefined) {
        uppercaseFirstLetter = true;
    }
    let result = "" + term;
    if (uppercaseFirstLetter) {
        result = result.replace(/^[a-z\d]*/, function (a) {
            return inflections_1.default().acronyms[a] || capitalize_1.default(a);
        });
    }
    else {
        result = result.replace(new RegExp("^(?:" + inflections_1.default().acronymRegex.source + "(?=\\b|[A-Z_])|\\w)"), function (a) {
            return a.toLowerCase();
        });
    }
    result = result.replace(/(?:_|(\/))([a-z\d]*)/gi, function (_match, a, b, _idx, _string) {
        a || (a = "");
        return "" + a + (inflections_1.default().acronyms[b] || capitalize_1.default(b));
    });
    return result;
}
exports.default = camelize;

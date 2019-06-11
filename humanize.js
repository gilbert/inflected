"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inflections_1 = __importDefault(require("./inflections"));
function humanize(lowerCaseAndUnderscoredWord, options) {
    let result = "" + lowerCaseAndUnderscoredWord;
    const humans = inflections_1.default().humans;
    let human, rule, replacement;
    options = options || {};
    if (options.capitalize === null || options.capitalize === undefined) {
        options.capitalize = true;
    }
    for (var i = 0, ii = humans.length; i < ii; i++) {
        human = humans[i];
        rule = human[0];
        replacement = human[1];
        // CHANGED
        // CHANGED
        // CHANGED
        // CHANGED
        // CHANGED
        // CHANGED
        // CHANGED
        // CHANGED
        // CHANGED
        if (typeof rule === 'string' ? result.indexOf(rule) > -1 : rule.test(result)) {
            result = result.replace(rule, replacement);
            break;
        }
    }
    result = result.replace(/_id$/, "");
    result = result.replace(/_/g, " ");
    result = result.replace(/([a-z\d]*)/gi, function (match) {
        return inflections_1.default().acronyms[match] || match.toLowerCase();
    });
    if (options.capitalize) {
        result = result.replace(/^\w/, function (match) {
            return match.toUpperCase();
        });
    }
    return result;
}
exports.default = humanize;

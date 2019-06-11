"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isFunction_1 = __importDefault(require("./util/isFunction"));
const Transliterator_1 = __importDefault(require("./Transliterator"));
function transliterations(locale, fn) {
    if (isFunction_1.default(locale)) {
        fn = locale;
        locale = null;
    }
    locale = (locale || "en");
    if (fn) {
        fn(Transliterator_1.default.getInstance(locale));
    }
    else {
        return Transliterator_1.default.getInstance(locale);
    }
}
exports.default = transliterations;

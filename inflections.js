"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isFunction_1 = __importDefault(require("./util/isFunction"));
const Inflector_1 = __importDefault(require("./Inflector"));
const defaults_1 = __importDefault(require("./defaults"));
function inflections(locale, fn) {
    if (isFunction_1.default(locale)) {
        fn = locale;
        locale = null;
    }
    locale = (locale || "en");
    if (fn) {
        fn(Inflector_1.default.getInstance(locale));
    }
    else {
        return Inflector_1.default.getInstance(locale);
    }
}
exports.default = inflections;
for (let locale in defaults_1.default) {
    inflections(locale, defaults_1.default[locale]);
}

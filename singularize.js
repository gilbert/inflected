"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const applyInflections_1 = __importDefault(require("./applyInflections"));
const inflections_1 = __importDefault(require("./inflections"));
function singularize(word, locale = "en") {
    return applyInflections_1.default(word, inflections_1.default(locale).singulars);
}
exports.default = singularize;

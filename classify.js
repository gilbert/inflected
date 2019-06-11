"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const camelize_1 = __importDefault(require("./camelize"));
const singularize_1 = __importDefault(require("./singularize"));
function classify(tableName) {
    return camelize_1.default(singularize_1.default(tableName.replace(/.*\./g, "")));
}
exports.default = classify;

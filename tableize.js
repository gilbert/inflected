"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pluralize_1 = __importDefault(require("./pluralize"));
const underscore_1 = __importDefault(require("./underscore"));
function tableize(className) {
    return pluralize_1.default(underscore_1.default(className));
}
exports.default = tableize;

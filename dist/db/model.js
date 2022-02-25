"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
var db_1 = __importDefault(require("./db"));
var schema_1 = require("./schema");
//Model是有Schema生成的模型，可以对数据库进行一些操作。
exports.userModel = db_1.default.model("user", schema_1.user, 'user');

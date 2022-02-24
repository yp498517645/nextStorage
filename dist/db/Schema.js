"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
var db_1 = require("./db");
//模式对象，通过Schema可以对集合进行约束
var Schema = db_1.default.Schema;
exports.user = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    token: String,
});

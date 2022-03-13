"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.info = exports.admin = exports.user = void 0;
var db_1 = __importDefault(require("./db"));
//模式对象，通过Schema可以对集合进行约束 相当于表的结构
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
    isAdmin: {
        type: Boolean,
        required: true,
    },
    token: {
        type: String,
        required: true,
    }
});
//管理员表
exports.admin = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});
exports.info = new Schema({
    id: Number,
    title: String,
    price: String,
    touristRoutePictures: Array()
});

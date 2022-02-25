"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var constant_1 = require("./constant");
//连接数据库
mongoose_1.default.connect(constant_1.DB_URL);
mongoose_1.default.connection.on("connected", function () {
    console.log("Mongoose connection open to " + constant_1.DB_URL);
});
//连接异常 error 数据库连接错误
mongoose_1.default.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});
/**
* 连接断开 disconnected 连接异常断开
*/
mongoose_1.default.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});
exports.default = mongoose_1.default;

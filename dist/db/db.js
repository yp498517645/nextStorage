"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var constant_1 = require("./constant");
//连接数据库
mongoose.connect(constant_1.DB_URL);
mongoose.connection.on("connected", function () {
    console.log("Mongoose connection open to " + constant_1.DB_URL);
});
//连接异常 error 数据库连接错误
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});
/**
* 连接断开 disconnected 连接异常断开
*/
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});
exports.default = mongoose;

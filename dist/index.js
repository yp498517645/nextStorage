"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Koa = require("koa");
var userRouter_1 = require("./routers/userRouter");
var app = new Koa();
app.use(userRouter_1.default.routes()).use(userRouter_1.default.allowedMethods());
app.listen(3000, function () {
    console.log("Server Stared on http://localhost:3000");
});

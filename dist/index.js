"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_1 = __importDefault(require("koa"));
var koa_body_1 = __importDefault(require("koa-body"));
var koa2_cors_1 = __importDefault(require("koa2-cors"));
var userRouter_1 = __importDefault(require("./routers/userRouter"));
var app = new koa_1.default();
app.use((0, koa_body_1.default)());
app.use(userRouter_1.default.routes()); /* .use(userRouter.allowedMethods()); */
//解决跨域
app.use((0, koa2_cors_1.default)({
    origin: function (ctx) {
        //设置允许来自指定域名请求
        return "*";
    },
    maxAge: 5,
    credentials: true,
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization", "Accept"],
    exposeHeaders: ["WWW-Authenticate", "Server-Authorization"], //设置获取其他自定义字段
}));
app.listen(3000, function () {
    console.log("Server Stared on http://localhost:3000");
});

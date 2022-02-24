"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Koa = require("koa");
var model_1 = require("./db/model");
var Router = require("koa-router");
var app = new Koa();
var router = new Router();
function hasToken(ctx, token) {
    return !!ctx.request.body.token;
}
function getToken(ctx) {
    return ctx.request.body.token;
}
router.get("/", function (ctx, next) {
    // ctx.router available
    if (hasToken) {
        //get token
        var token = getToken(ctx);
        model_1.userModel.find({ token: token }, function (err, arr) {
            //如果有token 并且匹配的话  就返回一个信号表示通过 不然则不通过
            ctx.body = {
                isUser: true,
            };
        });
    }
    else {
        ctx.body = {
            isUser: false,
        };
    }
    return next();
});
app.use(router.routes()).use(router.allowedMethods());
app.listen(3081, function () {
    console.log("Server Stared on http://localhost:3081");
});

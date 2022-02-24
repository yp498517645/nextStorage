"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Router = require("koa-better-router");
var router = Router().loadMethods();
//匹配路由
router.get("/", function (ctx, next) {
    ctx.body = "wwwww";
    next();
});
exports.default = router;

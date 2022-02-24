"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Router = require("koa-router");
var router = new Router({ prefix: "/users" });
var user_controller_1 = require("../controller/user.controller");
//注册接口
router.post("/register", user_controller_1.user.register);
router.post("/login", user_controller_1.user.login);
exports.default = router;

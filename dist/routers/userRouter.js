"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_router_1 = __importDefault(require("koa-router"));
var router = new koa_router_1.default({ prefix: "/users" });
var user_controller_1 = require("../controller/user.controller");
var user = new user_controller_1.UserController();
//注册接口
router.post("/register", user.register);
router.post("/login", user.login);
router.get("/findAllUser", user.getAllUsers);
exports.default = router;

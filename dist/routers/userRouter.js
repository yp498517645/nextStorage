"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_router_1 = __importDefault(require("koa-router"));
var router = new koa_router_1.default({ prefix: "/users" });
var user_controller_1 = require("../controller/user.controller");
var admin_controller_1 = require("../controller/admin.controller");
var user = new user_controller_1.UserController();
var admin = new admin_controller_1.AdminController();
//注册接口
router.post("/register", user.register);
router.post("/login", user.login);
router.get("/findAllUser", user.getAllUsers);
router.post("/delete", user.deleteUser);
router.post("/adminlogin", admin.loginAdmin);
exports.default = router;

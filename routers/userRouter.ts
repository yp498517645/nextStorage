import Router from "koa-router";
import { UserController } from "../controller/user.controller";
import { AdminController } from "../controller/admin.controller";
const user = new UserController();
const admin = new AdminController();
const router = new Router({ prefix: "/users" });
//注册接口
router.post("/register", user.register);
router.post("/login", user.login);
router.get("/findAllUser", user.getAllUsers);
router.post("/delete", user.deleteUser);
router.post("/adminlogin", admin.loginAdmin);

export default router;

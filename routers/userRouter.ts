import Router from "koa-router";
const router = new Router({ prefix: "/users" });
import { UserController } from "../controller/user.controller";
const user = new UserController();

//注册接口
router.post("/register", user.register);
router.post("/login", user.login);
router.get("/findAllUser", user.getAllUsers);

export default router;

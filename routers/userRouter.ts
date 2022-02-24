import * as Router from "koa-router";
const router = new Router({ prefix: "/users" });
import { user } from "../controller/user.controller";
//注册接口
router.post("/register", user.register)
router.post("/login", user.login);

export default router;

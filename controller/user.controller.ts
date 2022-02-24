import { Context, Next } from "koa";

class UserController {
  //注册
  async register(ctx: Context, next: Next) {
    ctx.body = "用户注册成功";
    return next();
  }
  //登陆
  async login(ctx: Context, next: Next) {
    ctx.body = "用户登陆成功";
    return next();
  }
}
const user = new UserController();
export { user };

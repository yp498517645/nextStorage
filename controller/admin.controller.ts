import { Context, Next } from "koa";
import { AdminService } from "../service/admin.service";

const admin = new AdminService();

export class AdminController {
  async loginAdmin(ctx: Context, next: Next) {
    const { username, password } = ctx.request.body;
    if (!username || !password) {
      return (ctx.body = {
        message: "账号密码不能为空",
      });
    }
    try {
      const res = await admin.findAdminByUsername(username, password);
      ctx.body = {
        code: 200,
        message: "用户登陆成功",
        result: {
          id: res.id,
          username: res.username,
        },
      };
    } catch (error) {
      console.log(error);
      ctx.body = {
        code: 401,
        message: "用户登陆失败",
      };
    }
    next();
  }
}

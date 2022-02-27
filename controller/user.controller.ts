import { Context, Next } from "koa";
import { UserService } from "../service/user.service";

const user = new UserService();
export class UserController {
  //注册
  
  async register(ctx: Context, next: Next) {
    //获取数据
    const { username, password, isAdmin } = ctx.request.body;
    if (!!username && !!password && !!isAdmin) {
      return (ctx.body = {
        message: "不能为空",
      });
    }
    //写入数据库
    try {
      const res = await user.createUser(username, password, isAdmin);

      //返回结果
      ctx.body = {
        code: 200,
        message: "用户注册成功",
        result: {
          id: res.id,
          username: res.username,
        },
      };
    } catch (error) {
      ctx.body = {
        code: 404,
        message: "用户注册失败",
      };
    }

    next();
  }
  //登陆
  async login(ctx: Context, next: Next) {
    const { username, password } = ctx.request.body;
    if (!!!username && !!!password) {
      return (ctx.body = {
        message: "不能为空",
      });
    }
    try {
      const res = await user.findUser(username, password);
      ctx.body = {
        code: 200,
        message: "用户登陆成功",
        result: {
          id: res.id,
          username: res.username,
          //token保存一小时
          token: res.token
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

  async getAllUsers(ctx: Context,next: Next){
    try {
      const res = await user.getAllUsers()
      ctx.body = {data:res} 
    } catch (error) {
            console.log(error);
            ctx.body = {
              code: 404,
              message: "查询失败",
            };
    }
    next();
  }
}

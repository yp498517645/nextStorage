import { user } from "./db/schema";
import * as Koa from "koa";
import * as bodyParser from "body-parser";
import { userModel } from "./db/model";
import * as Router from "koa-router";

const app: Koa = new Koa();
const router: Router = new Router();
function hasToken(ctx: Router.RouterContext, token: string): boolean {
  return !!ctx.request.body.token;
}
function getToken(ctx: Router.RouterContext): string {
  return ctx.request.body.token;
}

router.get("/", (ctx: Router.RouterContext, next: Koa.Next) => {
  // ctx.router available
  if (hasToken) {
    //get token
    const token: string = getToken(ctx);
    userModel.find({ token }, function (err, arr) {
      //如果有token 并且匹配的话  就返回一个信号表示通过 不然则不通过
      ctx.body = {
        isUser: true,
      };
    });
  } else {
    ctx.body = {
      isUser: false,
    };
  }
  return next();
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3081, () => {
  console.log("Server Stared on http://localhost:3081");
});

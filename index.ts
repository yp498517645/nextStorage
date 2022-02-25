import Koa from "koa";
import koaBody from "koa-body";
import cors from "koa2-cors";
import userRouter from "./routers/userRouter";
const app: Koa = new Koa();

app.use(koaBody());
app.use(userRouter.routes()).use(userRouter.allowedMethods());
//解决跨域
app.use(
  cors({
    origin: function (ctx) {
      //设置允许来自指定域名请求
      return "http://localhost:8080"; //只允许http://localhost:8080这个域名的请求
    },
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], //设置所允许的HTTP请求方法
    allowHeaders: ["Content-Type", "Authorization", "Accept"], //设置服务器支持的所有头信息字段
    exposeHeaders: ["WWW-Authenticate", "Server-Authorization"], //设置获取其他自定义字段
  })
);

app.listen(3000, () => {
  console.log("Server Stared on http://localhost:3000");
});

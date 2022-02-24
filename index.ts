import * as Koa from "koa";
import { userModel } from "./db/model";
import userRouter from "./routers/userRouter";
const app: Koa = new Koa();





app.use(userRouter.routes()).use(userRouter.allowedMethods());

app.listen(3000, () => {
  console.log("Server Stared on http://localhost:3000");
});

import { Context, Next } from "koa";
import { InfoService } from "../service/info.service";
const info = new InfoService();

export class InfoController {
  async getInfo(ctx: Context, next: Next){
    try {
      const res = await info.findInfo()
      ctx.body ={
        code:200,
        result:{
          data:res
        }
      }
      next()
    } catch (error) {
      console.log(error)
    }
  }
}

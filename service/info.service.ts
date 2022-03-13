import { infoModel } from "../db/model";
export class InfoService {
  //判断是否是管理员的账号
  async findInfo(): Promise<any> {
    const res = await infoModel.find({});
    return res;
  }
}

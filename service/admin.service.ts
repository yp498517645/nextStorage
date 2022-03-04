import { adminModel } from "../db/model";
export class AdminService {
  //判断是否是管理员的账号
  async findAdminByUsername(username: string, password: string): Promise<any> {
    const res = await adminModel.findOne({ username, password });
    return res
  }
}
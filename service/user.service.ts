import { userModel } from "../db/model";
export class UserService {
  async createUser(username: string, password: string, isAdmin:boolean) {
    //写入数据库
    const res = await userModel.create({ username, password ,isAdmin })
    return res
  }
  //查找账号
  async findUser(username: string, password: string){
    const res = await userModel.findOne({username, password})
    return res
  }
}
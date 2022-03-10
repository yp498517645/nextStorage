import { userModel } from "../db/model";
import jwt from "jsonwebtoken";
import { CLIENT_RENEG_LIMIT } from "tls";
export class UserService {
  token: string;
  constructor() {
    this.token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: "shh",
      },
      "secret"
    );
  }
  async createUser(username: string, password: string, isAdmin:false) {
    //token保存一小时
    //写入数据库
    const res = await userModel.create({
      username,
      password,
      isAdmin,
      token: this.token,
    });
    console.log(res)
    return res;
  }
  //查找账号
  async findUser(username: string, password: string) {
    const res = await userModel.findOne({
      username,
      password,
    });
    console.log("ssss",res)
    return {...res,token: this.token};
  }

  //查找所有账号
  async getAllUsers(){
    const res = await userModel.find({});
    return res
  }
  // 删除账号 
  async deleteuser(username: string) {
    const res = await userModel.deleteOne({ username });
    return res

  }
}

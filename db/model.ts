import mongoose from "./db";
import { user, UserType,admin,AdminType,InfoType ,info} from "./schema";
//Model是有Schema生成的模型，可以对数据库进行一些操作。
export const userModel = mongoose.model<UserType>("user", user,'user');
export const adminModel = mongoose.model<AdminType>("admin", admin, "admin");
export const infoModel = mongoose.model<InfoType>("info", info,"info")


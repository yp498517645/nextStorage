import mongoose from "./db";
//模式对象，通过Schema可以对集合进行约束 相当于表的结构
const Schema = mongoose.Schema;

export interface UserType {
  username: object;
  password: object;
  isAdmin: object;
  token?:string;
}

export interface AdminType {
  username: object;
  password: object;
}

export const user = new Schema<UserType>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
  token:{
    type: String,
    required: true,
  }
});
//管理员表
export const admin = new Schema<UserType>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});


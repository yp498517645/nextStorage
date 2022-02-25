import mongoose from "./db";
//模式对象，通过Schema可以对集合进行约束 相当于表的结构
const Schema = mongoose.Schema;

export interface UserType {
  username: object;
  password: object;
  isAdmin: object;
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
});

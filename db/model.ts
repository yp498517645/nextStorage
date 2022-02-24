import mongoose from "./db";
import { user, UserType } from "./schema";
export const userModel = mongoose.model<UserType>("user", user,'user');


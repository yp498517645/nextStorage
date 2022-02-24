import * as mongoose from "mongoose";
import { DB_URL } from "./constant";

//连接数据库
mongoose.connect(DB_URL);
mongoose.connection.on("connected", () => {
  console.log(`Mongoose connection open to ${DB_URL}`);
});


//连接异常 error 数据库连接错误
mongoose.connection.on('error',function(err) {
  console.log('Mongoose connection error: '+ err);
});
/**
* 连接断开 disconnected 连接异常断开
*/
mongoose.connection.on('disconnected',function() {
  console.log('Mongoose connection disconnected');
});



export default mongoose

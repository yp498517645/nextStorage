"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
var db_1 = require("./db");
var schema_1 = require("./schema");
exports.userModel = db_1.default.model("user", schema_1.user, 'user');

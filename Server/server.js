import express from "express";
// import mysql from "mysql";
import cors from "cors";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

conn.connect(function (err) {
  if (err) {
    console.log("error in connection!");
  } else {
    console.lof("connected");
  }
});

app.listen(8081, () => {
  console.log("runing!");
});

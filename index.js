import express from "express";
import cors from "cors";
import fs from "fs";
import csvParser from "csv-parser";

const App = express();

App.use(cors());

App.get("/", (_, res)=>{
  const result = [];
  fs.createReadStream("./WhatsgoodlyData-10.csv")
  .pipe(csvParser())
  .on("data", (data) => {
    result.push(data);
  })
  .on("end", () => {
    res.send(result);
  });
});



App.listen(5000);





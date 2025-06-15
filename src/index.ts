import express from "express";
import { sum } from "./utils/sum";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(sum(5, 7));
  res.send("VS backend has been started");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

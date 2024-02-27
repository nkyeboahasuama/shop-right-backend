import express, { Request, Response } from "express";
import mongoose from "mongoose";
import "dotenv/config";
const routes = require("./routes/routes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
const port = process.env.PORT;
const dbUri = process.env.DB_URI;

if (!dbUri || !port) {
  console.log("db error");
  process.exit();
}

mongoose
  .connect(dbUri)
  .then((result: any) => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((err: any) => {
    console.log(err);
  });

app.use("/api", routes);

app.use((req: Request, res: Response) => {
  res.status(404).send("No existing route with this name");
});

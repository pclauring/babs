import express from "express";
import cors from "cors";
import helmet from "helmet";
import { testRouter } from "./routes/test.router";
import { monsterRouter } from "./routes/monster.router";

const port = process.env.PORT;
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api", testRouter);
app.use("/monsters", monsterRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

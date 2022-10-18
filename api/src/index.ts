import express from "express";
import cors from "cors";
import helmet from "helmet";
import { Pool } from "pg";

const port = process.env.PORT;
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

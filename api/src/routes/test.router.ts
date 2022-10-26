import express, { Request, Response } from "express";
import { Pool } from "pg";

const pool = new Pool();
export const testRouter = express.Router();

testRouter.use(express.json());

testRouter.get("/now", async (req: Request, res: Response) => {
  const result = await pool.query("SELECT NOW()");
  res.status(200).send(result.rows[0].now);
});

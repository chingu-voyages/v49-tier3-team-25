import { Request, Response } from "express";
export const healthcheck = (req: Request, res: Response) => {
  const timestamp = new Date();
  const data = {
    status: "ok",
    timestamp: timestamp.toISOString(),
  };
  res.status(200).json(data);
};

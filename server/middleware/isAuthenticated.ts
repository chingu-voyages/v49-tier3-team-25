import { Request, Response, NextFunction } from "express"

export const isAuthenticated = (req:Request, res: Response, next: NextFunction) => {
  // Check user authentication
  
  next()
}

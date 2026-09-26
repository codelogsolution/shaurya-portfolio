import type { Response } from "express";

export const sendSuccess = <T>(
  res: Response,
  data: T,
  message = "Request successful",
  statusCode = 200,
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

export const sendError = (
  res: Response,
  message: string,
  statusCode = 500,
) => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};
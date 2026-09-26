import type { ErrorRequestHandler } from "express";

export const errorMiddleware: ErrorRequestHandler = (
  error,
  _req,
  res,
  _next,
) => {
  console.error("Server Error:", error);

  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
};
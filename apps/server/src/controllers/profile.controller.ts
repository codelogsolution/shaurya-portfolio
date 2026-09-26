import type { Request, Response } from "express";

import { profile } from "../data/profile.js";
import { sendSuccess } from "../utils/api-response.js";

export const getProfile = (_req: Request, res: Response) => {
  return sendSuccess(
    res,
    profile,
    "Profile fetched successfully",
  );
};
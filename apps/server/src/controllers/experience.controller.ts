import type { Request, Response } from "express";

import { experience } from "../data/experience.js";
import { sendSuccess } from "../utils/api-response.js";

export const getExperience = (_req: Request, res: Response) => {
  return sendSuccess(
    res,
    experience,
    "Experience fetched successfully",
  );
};
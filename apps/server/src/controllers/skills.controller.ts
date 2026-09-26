import type { Request, Response } from "express";

import { skills } from "../data/skills.js";
import { sendSuccess } from "../utils/api-response.js";

export const getSkills = (_req: Request, res: Response) => {
  return sendSuccess(
    res,
    skills,
    "Skills fetched successfully",
  );
};
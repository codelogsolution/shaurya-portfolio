import type { Request, Response } from "express";

import { projects } from "../data/projects.js";
import { sendSuccess } from "../utils/api-response.js";

export const getProjects = (_req: Request, res: Response) => {
  return sendSuccess(
    res,
    projects,
    "Projects fetched successfully",
  );
};
import { Router } from "express";
import type { Router as ExpressRouter } from "express";

import { getExperience } from "../controllers/experience.controller.js";

const experienceRouter: ExpressRouter = Router();

experienceRouter.get("/", getExperience);

export default experienceRouter;
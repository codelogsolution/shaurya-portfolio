import { Router } from "express";
import type { Router as ExpressRouter } from "express";

import { getSkills } from "../controllers/skills.controller.js";

const skillsRouter: ExpressRouter = Router();

skillsRouter.get("/", getSkills);

export default skillsRouter;
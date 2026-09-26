import { Router } from "express";
import type { Router as ExpressRouter } from "express";

import { getProjects } from "../controllers/projects.controller.js";

const projectsRouter: ExpressRouter = Router();

projectsRouter.get("/", getProjects);

export default projectsRouter;
import { Router, type Router as ExpressRouter } from "express";

import { getProfile } from "../controllers/profile.controller.js";

const profileRouter: ExpressRouter = Router();

profileRouter.get("/", getProfile);

export default profileRouter;
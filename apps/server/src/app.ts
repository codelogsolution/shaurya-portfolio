import cors from "cors";
import express, { type Express } from "express";

import { errorMiddleware } from "./middlewares/error.middleware.js";

import profileRouter from "./routes/profile.routes.js";
import skillsRouter from "./routes/skills.routes.js";
import projectsRouter from "./routes/projects.routes.js";
import experienceRouter from "./routes/experience.routes.js";

const app: Express = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "AI Portfolio API is running",
  });
});

app.use("/api/profile", profileRouter);
app.use("/api/skills", skillsRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/experience", experienceRouter);

// 404 handler
app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found",
  });
});

// Global error handler
app.use(errorMiddleware);

export default app;
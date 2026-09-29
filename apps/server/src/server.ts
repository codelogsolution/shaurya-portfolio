import app from "./app.js";
import { env } from "./config/env.js";

const port = env.PORT;

if (env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

export default app;
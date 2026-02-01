import { AppRouter } from "./server/appRouter";
import { HelloWorldController } from "./server/controllers/HelloWorldController";

const PORT = 3001;

const app = new AppRouter();
app.addController(HelloWorldController);
app.init(PORT);

console.log(
  `🦊 Elysia + React is running at ${app.app.server?.hostname}:${app.app.server?.port}`
);

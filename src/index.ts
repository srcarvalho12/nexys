import { Nexys } from "./server/Nexys";
import { HelloWorldController } from "./server/controllers/HelloWorldController";

const PORT = 3001;

const app = new Nexys();
app.addController(HelloWorldController);
app.init(PORT);

console.log(
  `🦊 Elysia + React is running at ${app.app.server?.hostname}:${app.app.server?.port}`
);

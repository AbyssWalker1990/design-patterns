import * as express from "express";
import { GumballMachine } from "./classes/gumball-machine";
import { GumballMonitor } from "./classes/gumball-monitor";

const app = express();
const port = 3000;

const machine = new GumballMachine("Location 1", 5);
const monitor = new GumballMonitor(machine);

app.get("/", async (_req, res) => {
  try {
    const body = await monitor.monitor();
    res.type("text/plain").send(body);
  } catch (err) {
    res.status(500).send(String(err));
  }
});

app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
);

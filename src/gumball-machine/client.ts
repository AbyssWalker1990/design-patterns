import { GumballMonitorProxy } from "./classes/gumball-monitor-proxy";

(async () => {
  const proxy = new GumballMonitorProxy();
  try {
    const body = await proxy.monitor();
    console.log(body);
  } catch (err) {
    console.error("Monitor error:", err);
  }
})();

import { GumballMonitorInterface } from "../interfaces/gumball-monitor.interface";
import * as http from "http";

export class GumballMonitorProxy implements GumballMonitorInterface {
  public monitor(): Promise<string> {
    return new Promise((resolve, reject) => {
      const port = 3000;

      const options: http.RequestOptions = {
        hostname: "localhost",
        port,
        path: "/",
        method: "GET",
      };

      let data = "";

      const req = http.request(options, (res) => {
        res.setEncoding("utf8");
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          resolve(data);
        });
      });

      req.on("error", (err) => {
        reject(err);
      });

      req.end();
    });
  }
}

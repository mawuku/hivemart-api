import http from "node:http";
import { products } from "./products.js";

const PORT = process.env.PORT || 8080;
const VERSION = process.env.APP_VERSION || "dev";

const server = http.createServer((req, res) => {
  if (req.url === "/healthz") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok", version: VERSION }));
    return;
  }
  if (req.url === "/api/products") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
    return;
  }
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "not found" }));
});

server.listen(PORT, () => {
  console.log(`hivemart-api ${VERSION} listening on :${PORT}`);
});

process.on("SIGTERM", () => server.close(() => process.exit(0)));

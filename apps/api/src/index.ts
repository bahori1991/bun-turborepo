import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

const server = Bun.serve({
  port: 8080,
  hostname: "0.0.0.0",
  fetch: app.fetch,
});

console.log(`Server is running on ${server.hostname}:${server.port}`);

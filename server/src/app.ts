import express from "express";
import config from "config";
import routes from "./routes";

const app = express();
const port = config.get("port");

app.listen(port, () => {
  console.log("Server is running on port http://localhost:4000");
  routes(app);
});

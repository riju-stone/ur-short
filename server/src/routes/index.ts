import { Express, Request, Response } from "express";

function routes(app: Express) {
  app.get("/api/test", (req: Request, res: Response) => {
    return res.send("Server is Healthy");
  });
}

export default routes;

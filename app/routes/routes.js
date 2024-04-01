import { Router } from "express";
import { findLast, findLastTen } from "../controllers/register.controller.js";

const routes = Router();

routes.get("/one", findLast);
routes.get("/last-ten", findLastTen);
routes.use("/api/v1", routes);

export default routes;
import { Router } from "express";
import { MoviesControllers } from "../controlers/movies.js";
export const movieRouter = Router();

movieRouter.get("/", MoviesControllers.getAll);

movieRouter.get("/:id", MoviesControllers.getId);

movieRouter.post("/", MoviesControllers.create);

movieRouter.delete("/:id", MoviesControllers.delete);

movieRouter.patch("/:id", MoviesControllers.update);

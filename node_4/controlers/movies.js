import { movieModel } from "../models/local-file-sistem/movie.js";
import { validateMovie, partialMovie } from "../schemas/movies.js";

export class MoviesControllers {
  static async getAll(req, res) {
    const { genre } = req.query;
    const movies = await movieModel.getAll({ genre });
    res.json(movies);
  }
  static async getId(req, res) {
    const { id } = req.params;
    const movie = await movieModel.getById({ id });
    if (movie) return res.json(movie);
    res.status(404).send("Movie not found");
  }

  static async create(req, res) {
    const result = validateMovie(req.body);

    if (result.error) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const NewMovie = await movieModel.create({ data: result.data });
    res.status(201).json(NewMovie);
  }

  static async delete(req, res) {
    const { id } = req.params;

    const result = await movieModel.delete({ id });

    if (result === false) {
      return res.status(404).json({ message: "Movie not found" });
    }

    return res.json({ message: "Movie deleted" });
  }

  static async update(req, res) {
    const result = validatePartialMovie(req.body);

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const { id } = req.params;

    const updatedMovie = await MovieModel.update({ id, input: result.data });

    return res.json(updatedMovie);
  }

  static async update(req, res) {
    const result = partialMovie(req.body);

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const { id } = req.params;
    const updateMovie = await movieModel.update({ id, data: result.data });

    res.json(updateMovie);
  }
}

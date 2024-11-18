import { randomUUID } from "node:crypto";
import { readJSON } from "../utils.js";

const movies = readJSON("./movies.json");

export class movieModel {
  static getAll({ genre }) {
    if (genre) {
      return movies.filter((movie) =>
        movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
      );
    }
    return movies;
  }

  static async getById({ id }) {
    const movie = movies.find((movie) => movie.id === id);
    return movie;
  }

  static async create(data) {
    const NewMovie = {
      id: randomUUID(),
      ...data,
    };
    movies.push(NewMovie);

    return NewMovie;
  }

  static async delete({ id }) {
    const movieIndex = movies.findIndex((movie) => movie.id === id);
    if (movieIndex === -1) return false;

    movies.splice(movieIndex, 1);
    return true;
  }

  static async update({ id, data }) {
    const movieIndex = movies.findIndex((movie) => movie.id === id);
    if (movieIndex === -1) return false;

    movies[movieIndex] = {
      ...movies[movieIndex],
      ...data,
    };

    return movies[movieIndex];
  }
}

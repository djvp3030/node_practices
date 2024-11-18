import express, { json } from "express";
import { CorsMiddelware } from "./middelweres/cors.js";
import { movieRouter } from "./urls/movies.js";

const app = express();
const port = 3000;
app.use(json());
app.use(CorsMiddelware());

app.use("/movies", movieRouter);

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

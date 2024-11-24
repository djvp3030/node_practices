import express, { json } from "express";
import { CorsMiddelware } from "./middelweres/cors.js";
import { movieRouter } from "./urls/movies.js";

const app = express();
const port = process.env.PORT || 3000;
app.use(json());
app.use(CorsMiddelware());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/movies", movieRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

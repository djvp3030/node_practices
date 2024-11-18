import z from "zod";

const schema = z.object({
  title: z.string({ required_erro: "Movie tittle is requred" }),
  year: z.number().int().min(1900).max(2024),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().positive().default(1),
  poster: z.string().url(),
  genre: z.array(
    z.enum([
      "Action",
      "Drama",
      "Crime",
      "Adventure",
      "Sci-Fi",
      "Romance",
      "Biography",
      "Fantasy",
    ])
  ),
});

export function validateMovie(object) {
  return schema.safeParse(object);
}

export function partialMovie(object) {
  return schema.partial().safeParse(object);
}

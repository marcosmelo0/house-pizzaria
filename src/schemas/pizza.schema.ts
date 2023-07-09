import { z } from "zod";

export const pizzaSchema = z.object({
  id: z.string(),
  name: z.string(),
  size: z.string(),
  price: z.number(),
  flavor: z.string(),
});

export type pizzaData = z.infer<typeof pizzaSchema>
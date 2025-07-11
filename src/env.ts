// Faz a validação e parse das variáveis de ambiente. garantindo que a aplicação não execute sem as variáveis necessárias.
import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string().url().startsWith("postgresql://"),
  GEMINI_API_KEY: z.string(),
});

export const env = envSchema.parse(process.env);

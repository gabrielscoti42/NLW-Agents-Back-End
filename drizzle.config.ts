// Ponto de entrada do Drizzle ORM, onde são definidas as tabelas e as colunas do DB.
import { defineConfig } from 'drizzle-kit';
import { env } from './src/env.ts'

export default defineConfig({
    dialect: 'postgresql',
    casing: 'snake_case',
    schema: './src/db/schema/**.ts',
    out: './src/db/migrations',
    dbCredentials: {
        url: env.DATABASE_URL,
    }
})
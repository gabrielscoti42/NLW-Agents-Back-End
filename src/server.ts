import { fastify } from 'fastify';
import {
    serializerCompiler,
    validatorCompiler,
    type ZodTypeProvider
} from "fastify-type-provider-zod"
import { fastifyCors } from '@fastify/cors';
import { env } from './env.ts'
import { getRoomsRoute } from './http/routes/get-rooms.ts';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
    origin: "http://localhost:3000"
})

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get('/health', () => {
    return "OK";
}) // Rota para verificar se o servidor está funcionando (acesse a rota http://localhost:3333/health)

app.register(getRoomsRoute)

app.listen({ port: env.PORT })
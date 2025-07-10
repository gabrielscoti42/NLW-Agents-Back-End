import {
    serializerCompiler,
    validatorCompiler,
    type ZodTypeProvider
} from "fastify-type-provider-zod"
import { fastify } from 'fastify';
import { fastifyCors } from '@fastify/cors';
import { env } from './env.ts'

import { getRoomsRoute } from './http/routes/get-rooms.ts';
import { createRoomRoute } from './http/routes/create-room.ts';
import { getRoomQuestions } from "./http/routes/get-room-questions.ts";
import { createQuestionRoute } from "./http/routes/create-question.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
    origin: "http://localhost:5173"
})

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get('/health', () => {
    return "OK";
}) // Rota para verificar se o servidor está funcionando (acesse a rota http://localhost:3333/health)

app.register(getRoomsRoute)
app.register(createRoomRoute)
app.register(getRoomQuestions)
app.register(createQuestionRoute)

app.listen({ port: env.PORT })
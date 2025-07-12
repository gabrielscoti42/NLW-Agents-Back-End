# NLW Agents - Backend

## Descrição

O NLW Agents é uma aplicação feita durante o evento Next Level Week da Rocketseat que permite transcrição e questionamento de áudios usando IA. A aplicação oferece uma API para gerenciar salas de aula virtuais, onde os usuários podem fazer upload de áudios, obter transcrições automáticas e fazer perguntas sobre o conteúdo das "aulas" gravadas usando inteligência artificial.

## Funcionalidades

- **Criação de Salas**: Crie salas virtuais para organizar suas aulas e conteúdos
- **Upload de Áudio**: Faça upload de arquivos de áudio para transcrição automática
- **Transcrição Inteligente**: Transcrição automática usando Google Gemini AI
- **Embeddings Vetoriais**: Geração de embeddings para busca semântica
- **Questionamento IA**: Faça perguntas sobre o conteúdo e receba respostas baseadas no contexto
- **Busca Semântica**: Sistema de busca vetorial para encontrar trechos relevantes
- **Histórico de Perguntas**: Mantenha um histórico completo de perguntas e respostas

## Tecnologias Utilizadas

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Drizzle ORM](https://img.shields.io/badge/Drizzle-FF6B6B?style=for-the-badge&logo=drizzle&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3B82F6?style=for-the-badge&logo=zod&logoColor=white)

</div>

## Como Executar

### Pré-requisitos

- Node.js 20+
- Docker e Docker Compose
- Chave da API do Google Gemini

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd NLWAgents/BackEnd
```

### 2. Configure as variáveis de ambiente

Copie o arquivo de exemplo (.env.example), crie um arquivo .env e configure suas variáveis:

```bash
cp env.example .env
```

Edite o arquivo `.env` com suas configurações:

```env
PORT=3333
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/agents
GEMINI_API_KEY=sua_chave_do_gemini_aqui
```

### 3. Inicie o banco de dados

```bash
docker-compose up -d
```

### 4. Execute as migrações

```bash
npm run db:generate
npm run db:migrate
```

### 5. Instale as dependências e execute

```bash
npm install
npm run dev
```

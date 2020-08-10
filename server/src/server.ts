import express from 'express'
import routes from './routes';
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)

// Corpo (Request Body): Dados para criação ou atualização de um registro
//Route Params: Identificar qual recurso dentro da rota eu quero atualizar ou deletar
//Query Params: Paginação,filtro,ordenação

app.listen(3333);
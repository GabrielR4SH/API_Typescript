import { server } from './server/Server';

server.listen(process.env.PORT, () => { console.log(`Rodando na porta ${process.env.PORT}`)});
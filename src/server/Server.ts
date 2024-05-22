import  express  from "express";

const server = express();

//HTTP Methods
server.get('/', (req, res) => { 
    return res.send('Olá dev');
});

export { server };
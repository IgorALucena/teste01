const express = require('express');
const app = express();
const PORT = 3000 //|| process.env.PORT
const {routerHelloWorld} = require('./routes/router');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/hello', routerHelloWorld);

app.listen(PORT, ()=>{
    console.log(`Rodando na porta ${PORT}`);
})
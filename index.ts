import productsRouter from "./routers/products";
import express from 'express';
import fileDB from "./fileDB";
const favicon = require('serve-favicon');
const app = express();
const port = 8000;

app.use(express.json());

app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.use('/products', productsRouter);


const run = async () => {
   await fileDB.init();

   app.listen(port, () => {
      console.log(`Server started on ${port} port!`);
   });
}

void run();
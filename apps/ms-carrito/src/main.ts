import * as express from 'express';
// import { productsIdRoute } from './app/routes/productsId';
// import { productsMatchRoute } from './app/routes/productsMatch';
import { connect, disconnect } from './app/client/DB';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Product } from '@nx-desafio-wallmart/api-interface';

const app = express();

/* productsIdRoute(app);
productsMatchRoute(app);

app.use(productsMatchRoute); */

connect();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to ms-carrito!' });
});

app.get('/products', (req, res) => {
  Product.find().then((products) => {
      res.status(200).send(JSON.stringify(products));
  }).catch((err) => {
    console.log("error", err)
    res.status(200).send("No encontre nada");
  });
});

app.get('/products/:id', (req, res) => {
  res.status(200).send(JSON.stringify({id: 1, name: 'tv'}));
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

const shutDown = () => {
  console.log('Close db connection...')
  disconnect().then(() => process.exit(0))
  setTimeout(() => {
    console.warn('Force stop before 5 seconds...')
    process.exit(1)
  },5000)
} 

process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);

server.on('error', console.error);







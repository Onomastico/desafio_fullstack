import * as express from 'express';
import { connect }  from '../client/DB';


export const productsIdRoute = (app: express.Application) => {

  app.get('/products/:id', (req, res) => {
   /* connect().then(db => db.collection('products').findOne({id: parseInt(req.params.id)}).then(product => {
      res.status(200).send(JSON.stringify(product))
    }).catch((e: any) => {
      console.warn(e)
      res.status(500).send('')
    })) */
  })
  
}
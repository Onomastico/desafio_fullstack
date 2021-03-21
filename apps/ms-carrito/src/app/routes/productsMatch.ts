import * as express from 'express';
import { connect }  from '../client/DB';

export const productsMatchRoute = ( app: express.Application) => {

  app.get('/products', (req, res) => {
    const {match} = req.query
    /* connect().then(db => db.collection('products').find({ $or: [ { brand: new RegExp(match, 'i') }, { description: new RegExp(match, 'i') } ] }).toArray().then(products => {
      res.status(200).send(JSON.stringify(products))
    }).catch((e: any) => {
      console.warn(e)
      res.status(500).send('')
    })) */
  })

}

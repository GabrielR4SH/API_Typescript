import { Router } from "express";
import {StatusCodes} from 'http-status-codes';
const router = Router();


router.get('/test', (_,res) => {
  return res.send('Olá Dev');
});

router.post('/test?teste=123', (req,res) => {
  console.log(req.query);

  return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});




export { router };
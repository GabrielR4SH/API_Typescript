import { Router } from "express";
import {StatusCodes} from 'http-status-codes';
import { CidadesController } from './../controllers';



const router = Router();


router.get('/test', (_,res) => {
  return res.send('Olá Dev');
});


router.post('/cidades', CidadesController.createQueryValidation, CidadesController.create);
//router.post('/cidades', CidadesController.getAll);




export { router };
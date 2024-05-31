import {Request, RequestHandler, Response} from 'express';
import { BAD_REQUEST, StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

interface ICidade{
  nome: string;
}

//Yup validation 
const queryValidation: yup.Schema<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
});

interface IFilter{
  filter?: string;
}

export const createQueryValidation:RequestHandler = async(req, res, next) => {
  try {
    await queryValidation.validate(req.query, {abortEarly: false});
    next();
  }catch( error){
  
    const yupError = error as yup.ValidationError;
    const errors: Record<string,string> = {};

    yupError.inner.forEach(error => {
      if(!error.path) return;
      errors[error.path] = error.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({
      errors:{
        default: errors,
      }
    })
  }
};

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  let validatedData: ICidade| undefined = undefined;
  console.log(validatedData);

  return res.send('Create');
};


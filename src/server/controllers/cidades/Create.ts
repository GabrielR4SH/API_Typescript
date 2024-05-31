import {Request, Response} from 'express';
import { BAD_REQUEST, StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

interface ICidade{
  nome: string;
}

//Yup validation 
const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
});


export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  let validatedData: ICidade| undefined = undefined;

  try {
    validatedData = await bodyValidation.validate(req.body);
    return res.status(StatusCodes.ACCEPTED).json('Created Done');
    
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

  console.log(validatedData);
};


import { Router } from 'express';

const testeRouter = Router();
testeRouter.get('/', async (request, response) => {
  
  return response.send();
});



export default testeRouter;
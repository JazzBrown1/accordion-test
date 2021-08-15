import { Router, json } from 'express';

import saveDetails from './saveDetails/saveDetails';

const routes = Router();

// Parse the JSON body for API requests
routes.use(json());

routes.post('/saveDetails/', saveDetails);

export default routes;

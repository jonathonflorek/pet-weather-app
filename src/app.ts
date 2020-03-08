import express from 'express';
import compression from 'compression';  // compresses requests
import bodyParser from 'body-parser';
import path from 'path';

import * as homeController from './controllers/home';
import * as petsController from './controllers/pets';

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 })
);

app.get('/', petsController.petsIndex);
app.get('/pets/new', petsController.getCreatePet);
app.post('/pets/new', petsController.postCreatePet);
app.get('/pets/notfound', petsController.notFound);
app.get('/pets/:petid', petsController.getPet);

export default app;

import * as express from 'express';
import * as petShelterApi from '../integration/petShelterApi';

export async function getPets(_: express.Request, res: express.Response) {
    const pets = await petShelterApi.getAll();
    res.render('pets/index', { pets });
}

export async function getCreatePet(_: express.Request, res: express.Response) {
    res.render('pets/create');
}

export async function postCreatePet(req: express.Request, res: express.Response) {
    console.log(req.body);
    res.render('pets/create');
}

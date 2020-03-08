import * as express from 'express';

export async function getPets(_: express.Request, res: express.Response) {
    res.render('pets/index');
}

export async function getCreatePet(_: express.Request, res: express.Response) {
    res.render('pets/create');
}

export async function postCreatePet(req: express.Request, res: express.Response) {
    console.log(req.body);
    res.render('pets/create');
}

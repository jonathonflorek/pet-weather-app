import * as express from 'express';
import * as petShelterApi from '../integration/petShelterApi';

const breedsByType = {
    Dog: ['Basset Hound', 'Shiba Inu', 'Golden Retriever', 'Beagle'],
    Cat: ['Maine Coon', 'Persian'],
};

export async function getPets(_: express.Request, res: express.Response) {
    const pets = await petShelterApi.getAll();
    res.render('pets/index', { pets });
}

export async function getPet(req: express.Request, res: express.Response) {
    const pet = await petShelterApi.getOne(req.params.petid);
}

export async function getCreatePet(_: express.Request, res: express.Response) {
    res.render('pets/create', {
        name: '',
        location: '',
        type: 'Dog',
        breed: 'Beagle',
        breedsByType,
    });
}

export async function postCreatePet(req: express.Request, res: express.Response) {
    console.log(req.body);
    res.render('pets/create', { ...req.body, breedsByType });
}

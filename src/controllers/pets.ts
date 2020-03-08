import * as express from 'express';
import * as petShelterApi from '../integration/petShelterApi';
import * as isItRainingApi from '../integration/isItRaining';
import * as geocodingApi from '../integration/geocoding';

const breedsByType = {
    Dog: ['Basset Hound', 'Shiba Inu', 'Golden Retriever', 'Beagle'],
    Cat: ['Maine Coon', 'Persian'],
};

export async function notFound(_: express.Request, res: express.Response) {
    res.render('pets/notfound');
}

export async function petsIndex(_: express.Request, res: express.Response) {
    const pets = await petShelterApi.getAll();
    res.render('pets/index', { pets });
}

export async function getPet(req: express.Request, res: express.Response) {
    const pet = await petShelterApi.getOne(req.params.petid);
    if (pet === 404) {
        return res.redirect('/pets/notfound');
    }
    const [lng, lat] = pet.location.coordinates;
    const isUmbrellaNeeded = await isItRainingApi.isItRaining({ lat, lng });
    const location = await geocodingApi.reverseGeocode({ lat, lng });
    res.render('pets/view', {
        name: pet.name,
        location,
        isUmbrellaNeeded,
    });
}

export async function getCreatePet(_: express.Request, res: express.Response) {
    res.render('pets/create', {
        name: '',
        location: '',
        type: 'Dog',
        breed: 'Beagle',
        breedsByType,
        errors: [],
    });
}

export async function postCreatePet(req: express.Request, res: express.Response) {
    const { name, location, type, breed } = req.body;
    const errors = [] as string[];

    function renderErrors() {
        res.render('pets/create', { ...req.body, breedsByType, errors });
    }

    if (!name) {
        errors.push(`'name' is required`);
    }
    if (!location) {
        errors.push(`'location' is required`);
    }
    if (!type) {
        errors.push(`'type' is required`);
    }
    if (!breed) {
        errors.push(`'breed' is required`);
    }

    if (errors.length) {
        return renderErrors();
    }

    const coordinates = await geocodingApi.geocode(location);

    if (!coordinates) {
        errors.push(`We could not figure out where '${location}' is`);
        return renderErrors();
    }

    const postResult = await petShelterApi.addOne({
        name,
        type,
        breed,
        location: {
            type: 'Point',
            coordinates: [coordinates.lng, coordinates.lat],
        },
    });

    if (postResult === 409) {
        errors.push(`This pet already exists`);
        return renderErrors();
    }

    res.redirect(`/pets/${postResult.id}`);
}

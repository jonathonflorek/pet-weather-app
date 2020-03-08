import axios from 'axios';
import { petShelterApiUrl } from '../config';

export interface Pet {
    id: number;
    name: string;
    type: string;
    breed: string;
    location: {
        type: 'Point';
        coordinates: [number, number];
    };
}

export async function getAll(): Promise<Pet[]> {
    const response = await axios.get(petShelterApiUrl + '/pets');
    return response.data.pets;
}

export async function getOne(id: string): Promise<Pet | 404> {
    const response = await axios.get(petShelterApiUrl + '/pets/' + id);
    switch (response.status) {
        case 200:
            return response.data.pet;
        case 404:
            return 404;
        default:
            throw new Error(`unexpected status code from pets shelter api: ${response.status}`);
    }
}

export async function addOne(pet: Omit<Pet, 'id'>): Promise<Pet | 409> {
    const response = await axios.post(petShelterApiUrl + '/pets', { pet });
    switch (response.status) {
        case 201:
            return response.data.pet;
        case 409:
            return 409;
        default:
            throw new Error(`unexpected status code from pets shelter api: ${response.status}`);
    }
}

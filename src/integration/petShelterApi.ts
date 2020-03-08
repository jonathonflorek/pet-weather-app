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

const mysty: Pet = {
    id: 0,
    name: 'Mysty',
    type: 'Dog',
    breed: 'Basset',
    location: {
        type: 'Point',
        coordinates: [-104.6178, 50.45008],
    },
}

export async function getAll(): Promise<Pet[]> {
    return [mysty];
}

export async function getOne(id: number): Promise<Pet | undefined> {
    if (id === 0) {
        return mysty;
    }
    return undefined;
}

export async function addOne(pet: Omit<Pet, 'id'>): Promise<Pet | string> {
    return 'not implemented';
}

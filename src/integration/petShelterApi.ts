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
    return [];
}

export async function getOne(id: number): Promise<Pet | undefined> {
    return undefined;
}

export async function addOne(pet: Omit<Pet, 'id'>): Promise<Pet | string> {
    return 'not implemented';
}

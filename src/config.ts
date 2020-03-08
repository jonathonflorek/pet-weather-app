export const port = required('PORT');
export const petShelterApiUrl = required('PETSHELTERAPI_URL');
export const darkSkyUrl = required('DARKSKY_URL');

function required(name: string) {
    const result = process.env[name];
    if (!result) {
        throw new Error(`environment variable ${name} is required`);
    }
    return result;
}

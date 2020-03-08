export async function isItRaining(lat: number, lng: number): Promise<boolean> {
    return Math.random() > 0.5 ? true : false;
}

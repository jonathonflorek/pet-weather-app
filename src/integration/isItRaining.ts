export interface LatLng {
    lat: number;
    lng: number;
}

export async function isItRaining({ lat, lng }: LatLng): Promise<boolean> {
    return Math.random() > 0.5 ? true : false;
}

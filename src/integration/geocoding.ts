export interface LatLng {
    lat: number;
    lng: number;
}

export async function geocode(address: string): Promise<LatLng | undefined> {
    return {
        lat: 50.45008,
        lng: -104.6178,
    };
}

export async function reverseGeocode({ lat, lng }: LatLng): Promise<string> {
    return 'Regina, SK';
}

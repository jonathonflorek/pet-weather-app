import { Client } from '@googlemaps/google-maps-services-js';
import { googleGeocodingKey } from '../config';
const client = new Client({});

export interface LatLng {
    lat: number;
    lng: number;
}

export async function geocode(address: string): Promise<LatLng | undefined> {
    const response = await client.geocode({
        params: {
            address,
            key: googleGeocodingKey,
        },
    });
    if (response.data.status === 'OK' && response.data.results.length >= 1) {
        return response.data.results[0].geometry.location;
    }
    console.error(response.data.error_message);
    return undefined;
}

export async function reverseGeocode(latlng: LatLng): Promise<string> {
    const response = await client.reverseGeocode({
        params: {
            latlng,
            // we don't want the exact full address; just the general area. weather doesn't vary building to building.
            result_type: ['locality', 'administrative_area_level_1', 'country', 'colloquial_area'],
            key: googleGeocodingKey,
        },
    });
    if (response.data.status === 'OK' && response.data.results.length >= 1) {
        return response.data.results[0].formatted_address;
    }
    console.error(response.data.error_message);
    return response.data.error_message;
}

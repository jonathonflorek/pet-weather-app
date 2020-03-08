import axios from 'axios';
import { darkSkyUrl } from '../config';

export interface LatLng {
    lat: number;
    lng: number;
}

export async function isItRaining({ lat, lng }: LatLng): Promise<boolean> {
    // usage documented in https://darksky.net/dev/docs#forecast-request
    const response = await axios.get(`${darkSkyUrl}/${lat},${lng}`);
    return (response.data.currently.precipProbability || 0) > 0.5;
}

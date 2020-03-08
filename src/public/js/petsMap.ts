declare const L: any;
declare const pets: Array<{
    id: number;
    name: string;
    type: string;
    breed: string;
    location: {
        type: 'Point';
        coordinates: [number, number];
    };
}>;
declare const center: any;

const map = L.map('map', {
    center,
    zoom: 13,
});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
for (const pet of pets) {
    const [lng, lat] = pet.location.coordinates;
    L.marker({lng, lat})
        .addTo(map)
        .bindPopup(`<b>${pet.name}</b><br/>${pet.type}<br/>${pet.breed}<br/><a href="/pets/${pet.id}">view</a>`);
}

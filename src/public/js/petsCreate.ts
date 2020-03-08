declare var breedsByType: {[type: string]: string[]};

$(document).ready(function() {
    // Place JavaScript code here...
    console.log(breedsByType);

    const typeSelect = document.getElementById('type') as HTMLSelectElement;
    const breedSelect = document.getElementById('breed') as HTMLSelectElement;

    const selectedTypes = { [typeSelect.value]: breedSelect.value };

    typeSelect.addEventListener('change', () => {
        breedSelect.innerHTML = breedsByType[typeSelect.value].map(breed =>
            `<option ${breed === selectedTypes[typeSelect.value] ? 'selected' : ''}>${breed}</>`
        ).join('');
    });
    breedSelect.addEventListener('change', () => {
        selectedTypes[typeSelect.value] = breedSelect.value;
    });
});

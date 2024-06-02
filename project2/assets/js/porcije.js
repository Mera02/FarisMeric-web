fetch('jedan.json')
.then(response => response.json())
.then(data => {
    const platemesoDiv = document.getElementById('platemeso');
    data.plates.forEach(plate => {
        const p = document.createElement('p');
        p.textContent = `${plate.name}  ${plate.price}`;
        platemesoDiv.appendChild(p);
    });
})
.catch(error => console.error('Error fetching data:', error));
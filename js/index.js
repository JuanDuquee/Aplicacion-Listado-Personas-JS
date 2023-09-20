const personas = [
    new Persona ('Juan', 'Perez', 'Ingeniero Informatico'),
    new Persona ('Karla', 'Lara', 'Medico'),
];

const agregarBtn = document.getElementById('create');
agregarBtn.addEventListener('click', () => {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const major = document.getElementById('major-name').value;

    if(firstName === '' || lastName === '' || major === '') {
        alert('Por favor, ingrese todos los campos.');
        return;
    }else{
        const persona = new Persona(firstName, lastName, major);
        personas.push(persona);
    }

    mostrarPersonas();
});

function mostrarPersonas() {
    const tableBody = document.getElementById('tabla-est-body'); // Obtener la tbody

    // Limpiar la tabla antes de agregar nuevas filas
    tableBody.innerHTML = '';

    // Iterar sobre el array de personas y crear una fila para cada una
    personas.forEach((persona, index) => {
        // Crear una fila
        const row = document.createElement('tr');

        // Crear una celda de encabezado (<th>) con el atributo "scope"
        const th = document.createElement('th');
        th.setAttribute('scope', 'row');
        th.id = 'index';
        th.textContent = index + 1;

        // Crear celdas de datos (<td>) con identificadores "first", "last" y "major"
        const tdFirst = document.createElement('td');
        tdFirst.id = 'first';
        tdFirst.textContent = persona.firstName;

        const tdLast = document.createElement('td');
        tdLast.id = 'last';
        tdLast.textContent = persona.lastName;

        const tdMajor = document.createElement('td');
        tdMajor.id = 'major';
        tdMajor.textContent = persona.major;

        // Agregar las celdas a la fila
        row.appendChild(th);
        row.appendChild(tdFirst);
        row.appendChild(tdLast);
        row.appendChild(tdMajor);

        // Agregar la fila a la tabla
        tableBody.appendChild(row);
    });
}
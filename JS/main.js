function agregar() {
    const task = document.getElementById('id_task').value;

    const tabla = document.querySelector('.tabla table');

    const fila = document.createElement('tr');
    const columna = document.createElement('td');

    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'form-check-input';
    checkbox.addEventListener('change', function() {
        columnaNombre.classList.toggle('tachado', checkbox.checked);
    });
    itemContainer.appendChild(checkbox);

    const columnaNombre = document.createElement('span');
    columnaNombre.textContent = task;
    itemContainer.appendChild(columnaNombre);

    const botonEliminar = document.createElement('button');
    botonEliminar.classList.add('btn', 'btn-outline-danger');
    botonEliminar.innerHTML = '<span class="icon is-small"><i class="fas fa-trash"></i></span>';
    botonEliminar.addEventListener('click', function() {
        tabla.removeChild(fila);
    });
    botonEliminar.addEventListener('click', function() {
        tabla.removeChild(fila);
    });
    itemContainer.appendChild(botonEliminar);

    columna.appendChild(itemContainer);
    fila.appendChild(columna);

    tabla.appendChild(fila);

    document.getElementById('id_task').value = '';
}


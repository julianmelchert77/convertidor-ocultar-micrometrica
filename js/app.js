// Definir valores
eventListeners()
function eventListeners() {
    const formulario = document.querySelector('#convertir');
    formulario.addEventListener('submit', convertirMedida);
}


// Mostrar mensajes de error y correcto
function mostrarMensaje(mensaje, tipo) {

    const div = document.createElement('div');

    if(tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    //Insertarlo en el HTML
    const formulario = document.querySelector('#convertir');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    // Borrando el mensaje
    
    setTimeout( () => {
        div.remove();
    }, 2000)
}


// Validación y conversión
function convertirMedida(e) {
    e.preventDefault();

    const lineasSelect = document.querySelector('#lineas-micro').value;
    const aumentoInput = document.querySelector('#aumento').value;

    if(lineasSelect === '' || aumentoInput === '') {
        mostrarMensaje('Ambos campos son obligatorios', 'error');
        return
    } else if(lineasSelect <= 0 || isNaN(lineasSelect)) {
        mostrarMensaje('Debe ingresar una medida válida', 'error');
        return;
    }
        // Al ingresar medidas válidas se ejecuta el código  
        let nombreAumento;

        switch(aumentoInput) {
            case '1':
                nombreAumento = 0.019;
                break;
            case '2':
                nombreAumento = 0.024;
                break;
            case '3':
                nombreAumento = 0.077;
                break;
            default:
                break;
        }  

    let resultado = lineasSelect * nombreAumento;

    mostrarMensaje('Calculando...', 'correcto'); //revisar si es exito o correcto

    mostrarResultado(resultado);


}

// Mostrar los resultados en el html
function mostrarResultado(resultado) {

        limpiarHTML(); // Limpia el html previo

        // Crear e insertar resultado
        const div = document.createElement('div');
        div.classList.add('mt-10');

        div.innerHTML = `
        <p class="header">Resultado:</p>
        <p>La medida es de: <span> ${resultado} mm</span></p>
        `;

        const resultadoDiv = document.querySelector('#resultado');


        setTimeout(() => {
            resultadoDiv.appendChild(div);
        }, 2000)

}


// Limpiar HTML
function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}










  
    
 
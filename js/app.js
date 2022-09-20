// Variables
const listaResultados = document.querySelector('#resultados-lista');
let resultadoArr = [];

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
    }, 700)
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
        let valorAumento;

        switch(aumentoInput) {
            case '1':
                valorAumento = 0.019;
                break;
            case '2':
                valorAumento = 0.024;
                break;
            case '3':
                valorAumento = 0.077;
                break;
            default:
                break;
        }  

    let resultado = lineasSelect * valorAumento;
    
    // Crear objeto con el ID
    const conversionObj = {
        id: Date.now(),
        resultado
    }
    
    // Agregar al arreglo de los resultados
    resultadoArr = [...resultadoArr, conversionObj];
    console.log(resultadoArr);
    
    mostrarResultado(resultado);
 

}

// Mostrar los resultados en el html
function mostrarResultado(resultado) {

        limpiarHTML(); // Limpia el html previo

        // Asignar nombre a los aumentos
        const lineasSelect = document.querySelector('#lineas-micro').value;
        const aumentoInput = document.querySelector('#aumento').value;
        let nombreAumento;

        switch(aumentoInput) {
            case '1':
                nombreAumento = '3.2x';
                break;
            case '2':
                nombreAumento = '2.5x';
                break;
            case '3':
                nombreAumento = '0.8x';
                break;
            default:
                break;
        }  

        // Crear html listado
        const li = document.createElement('li');

        li.innerHTML = `
        <p>${lineasSelect} líneas con <span> ${nombreAumento} </span> de aumento tiene una medida de: <span> ${resultado} mm </span> </p>
        `;

        listaResultados.appendChild(li);
        

}



// Limpiar HTML
function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}










  
    
 
function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacion = document.getElementById('operacion').value;
    let resultado;
    switch (operacion) {
        case'suma':
            resultado = num1 + num2;
            break;
        case'resta':
            resultado = num1 - num2;
            break;
        case'multiplicacion':
            resultado = num1 * num2;
            break;
        case 'division':
            if (num2 == 0) {
                alert('No se puede dividir por cero');
                return;
            }
            resultado = num1 / num2;
            break;
        case'mod':
            resultado = num1 % num2;
            break;
        default:
            alert('Opción no valida');
            return;
    }
    document.getElementById('result').innerText = `El resultado es: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}
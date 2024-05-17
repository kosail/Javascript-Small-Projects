function add(num1, num2) {
	return num1+num2;
}

function substract(num1, num2) {
	return num1-num2;
}

function difference(num1, num2) {
	if (num1 < num2) {
		return num2-num1
	}
	return num1-num2;
}

function times(num1, num2) {
	return num1*num2;
}

function power (num1, num2) {
	return num1**num2;
}

function divide(num1, num2) {
	return num1/num2;
}

const logOf = (num1) => Math.log10(num1);

let optionChoosed = parseInt(prompt("\t\t+-- Calculadora basica --+\nIngresa el numero de la operación que quieres realizar:\n1) Sumar\n2) Restar\n3) Multiplicar\n4) Dividir\n5) Potencia\n6) Diferencia\n7) Logaritmo de un número"));

let num1, num2;
if (optionChoosed >= 1 && optionChoosed <=6) {
	num1 = parseInt(prompt("Ingresa el primer número:"));
	num2 = parseInt(prompt("Ingresa el número dos:"));
} else if (optionChoosed == 7) {
	num1 = parseInt(prompt("Ingresa el número:"));
} else {
	alert("Ingresaste una opción no válida");
}

let result = undefined;
switch(optionChoosed) {
	case 1:
		result = add(num1, num2);
		break;
	case 2:
		result = substract(num1, num2);
		break;
	case 3:
		result = times(num1, num2);
		break;
	case 4:
		result = divide(num1, num2);
		break;
	case 5:
		result = power(num1, num2);
		break;
	case 6:
		result = difference(num1, num2);
		break;
	case 7:
		result = logOf(num1);
		break;
	default:
		result = "Input inválido"
}

document.write(result);

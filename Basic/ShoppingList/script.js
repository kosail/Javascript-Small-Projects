let myList = [];

while (true) {
	let item = prompt("Ingresa un artículo para añadir a la lista de cosas pendientes por comprar: \n(Escribe \"salir\" para terminar la lista)");

	if (item == null || item === "") {
		alert("No ingresaste nada. Ingresa un artículo.");
		continue;
	}

	// El método .trim() elimina los espacios en blanco antes y después.
	if (item.trim().toLowerCase() == "salir") break;

	// Esto que estoy a punto de hacer no es para nada seguro, pero solo por el hecho demostrativo para mí mismo de que el operador ternario existe aquí también, y que se usa exactamente igual que en Java.
	let isImportant = false;
	isImportant = parseInt(prompt("El artículo es muy importante o no tiene prioridad?\n1) Muy importante\n2) No tiene prioridad\n\nIngresa el número:")) === 1 ? true : false;

	if (isImportant) {
		myList.unshift(item);
	} else {
		myList.push(item);
	}
}

if (myList.length > 0) {
	document.write("Lista de cosas por comprar:" + "<br>");
	
	for (let item of myList) {
		document.write(item + "<br>");
	}
} else {
	document.write("No se registró ningún artículo");
}
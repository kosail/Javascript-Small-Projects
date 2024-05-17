let limit = parseInt(prompt("Ingresa un número límite: "));

if (isNaN(limit)) {
	document.write("Input inválido");
}

if (limit === null || limit === undefined) {
	document.write("Input inválido. Error: Variable null o undefined");
}

for (let i=0; i<=limit; i++) {
	document.write(i + "<br>");
}

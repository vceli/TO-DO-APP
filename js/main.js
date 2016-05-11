function obtenerMensaje(){
	var textarea = document.getElementById("mensaje");
	return textarea.value;
}

// creando el div

function crearDiv(mensaje){
	var div = document.createElement("div");
	div.className = "mensaje";
	div.innerHTML = "<input type='checkbox' onclick='marcarTexto(this)'/><p class='texto'>"+mensaje+"</p><i class='fa fa-trash-o pull-right' aria-hidden='true' onclick='eliminarDiv(this)'></i>";
	return div;
}

function limpiarTextarea(){
	var textarea = document.getElementById("mensajes");
	textarea.value = "";
}

// almacenar el texto en el div y luego eliminar

function enviarMensaje(){
	var mensaje = obtenerMensaje();
	if(mensaje !==""){
		crearDiv(mensaje);
		clean();
	}
	var div = crearDiv(mensaje);
	var contenedor = document.getElementById("mensajes");
	contenedor.appendChild(div);
	limpiarTextarea();
}

function clean(){
	var textarea = document.getElementById("mensaje");
	textarea.value = "";
	textarea.focus(); // para que se ubique el cursor
}

function marcarTexto(elemento){
	var marcado = elemento.checked;
	var textoPorMarcar = elemento.nextSibling;
	if(marcado == true){
		textoPorMarcar.className = "tachado";
	}else{
		textoPorMarcar.className = "";
	}
}

function eliminarDiv(elemento){
	var div = elemento.parentElement;
	div.remove();
}





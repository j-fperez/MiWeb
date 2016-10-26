if (!Modernizr.inputtypes.number) {
	$.getScript('js/number-polyfill.js');
}

var form = document.getElementById("form-contact");


var loadingButton = document.createElement('i');
if (Modernizr.classList) {
	loadingButton.classList.add("fa", "fa-spinner", "fa-spin");
} else {
	loadingButton.className += "fa fa-spinner fa-spin";
}


var otrosInput = document.getElementsByName("tipo_conocer");

var inputOtros = document.createElement("input");
inputOtros.setAttribute("id", "otros");
inputOtros.setAttribute("type", "text");
inputOtros.setAttribute("name", "otros");
inputOtros.setAttribute("size", "27");
inputOtros.setAttribute("placeholder", "Introduce el nombre del medio");
inputOtros.setAttribute("required", "");

for (var i = 0; i < otrosInput.length; i++) {
	otrosInput[i].addEventListener('click', function(){
		if (this.value == 'Otros') {
			this.parentNode.appendChild(inputOtros);
		} else {
			if(document.getElementById("otros")) {
				this.parentNode.removeChild(inputOtros);
			}
		}
	});
}

form.addEventListener("submit", function(evt){
	var inputNombre = document.getElementById("nombre");
	
	var emailInput = document.getElementById("email");

	var conocerRadioInput = {
		"tipo_conocer_1": document.getElementById("tipo_conocer_1"),
		"tipo_conocer_2": document.getElementById("tipo_conocer_2"),
		"tipo_conocer_3": document.getElementById("tipo_conocer_3"),
		"tipo_conocer_4": document.getElementById("tipo_conocer_4"),
	};

	var telefonoInput = document.getElementById("telefono");
	var comentariosInput = document.getElementById("comentarios");
	var submitInput = document.getElementById("enviar");

	if (inputNombre.checkValidity() == false) {
		alert("Escribe tu nombre y apellidos");
		inputNombre.focus();
		evt.preventDefault();
		return false;
	}

	if (email.checkValidity() == false) {
		alert("Escribe tu email");
		email.focus();
		evt.preventDefault();
		return false;
	}

	if(document.getElementById("otros")) {
		if(document.getElementById("otros").checkValidity() == false){
			alert("Escribe el nombre del medio por el que nos conociste")
			document.getElementById("otros").focus();
			evt.preventDefault();
			return false;
		}
	}

	if (telefonoInput.checkValidity() == false) {
		alert("Introduce tu teléfono");
		telefono.focus();
		evt.preventDefault();
		return false;
	}
/*
	if (comentariosInput.checkValidity() == false) {
		alert("Introduce la fecha de la mision");
		comentarios.focus();
		evt.preventDefault();
		return false;
	}
*/
	submitInput.appendChild(loadingButton);
	evt.preventDefault();

	setTimeout(function(){
		submitInput.removeChild(loadingButton);
		sendNotification("Formulario recibido");
	}, 1000);
});

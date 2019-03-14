function ativaCampo(pessoa) {
	switch (pessoa) {
		case 'fisica': document.getElementById("cnpj").disabled = true;
			document.getElementById("cpf").disabled = false;
			document.getElementById("data_nasc").disabled = false; break;
		case 'juridica': document.getElementById("cpf").disabled = true;
			document.getElementById("cnpj").disabled = false;
			document.getElementById("data_nasc").disabled = true; break;
	}

}

function validaNumeros(e) {
	var tecla = new Number();
	if (window.event) {
		tecla = e.keyCode;
	}
	else if (e.which) {
		tecla = e.which;
	}
	else {
		return true;
	}
	if ((tecla >= "97") && (tecla <= "122")) {
		return false;
	}
}


function validaCep(valor) {
	var cep = valor.replace(/\D/g, '');

	if (cep != "") {

		var validacep = /^[0-9]{8}$/;
		if (validacep.test(cep)) {
		}
		else {
			alert("Formato de CEP inválido.");
		}
	}
}

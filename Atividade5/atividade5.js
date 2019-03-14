function enviarDados() {
	var nome = dados.user_cad.value;
	var senha = dados.senha_cad.value;
	var confirm_senha = dados.confirm_senha_cad.value;
	if (nome == "") {
		alert("Campo USUÁRIO vazio!");
		document.dados.user_cad.focus();
		return false;
	}
	if (senha.length < 6) {
		alert("A senha não contém o número minimo de caracteres!");
		document.dados.senha_cad.focus();
		return false;
	}
	if (senha.length > 10) {
		alert("Senha muito grande!");
		document.dados.senha_cad.focus();
		return false;
	}
	if (senha == "") {
		alert("A senha em branco!");
		document.dados.senha_cad.focus();
		return false;
	}
	if (senha != confirm_senha) {
		alert("As senhas não combinam!");
		document.dados.confirm_senha_cad.focus();
		return false;
	}
	if (confirm_senha == "") {
		alert("Confirmação de senha vazio!");
		document.dados.confirm_senha_cad.focus();
		return false;
	}
}
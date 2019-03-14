function isPalindromo(txt) {
	var txt = dados.txt.value;
	x = txt.split("").reverse().join("");
	if (x == txt) {
		return alert(txt + " é um palíndromo!");
	} else {
		return alert(txt + " não é um palíndromo!");
	}
}
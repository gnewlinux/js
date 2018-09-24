	///////////////////////////////////////

	// DOM

	var teste = document.getElementById("primeiro-teste").innerHTML;

	// para criar elementos
	var img = document.createElement("img");
	img.src="http://lorempixel.com/400/200/";

	var p = document.createElement("p");
	p.innerHTML = "Olá mundo!"

	var pp = document.createElement("p");
	pp.innerHTML = "Um dois";

	// adiconar elementos
	document.getElementById("carros").appendChild(p);
	document.getElementById("carros").appendChild(pp);
	// remover elementos
	document.getElementById("carros").removeChild(p);

	// usar typeof para identificar tipo de variavel.

	// acessando nós pai
	// #ids, .classes
	//console.log(
	//document.querySelector("#carros").parentNode
	//)

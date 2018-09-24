// EVENTS
// eventos são quando vc correponde com o browser de alguma forma.
// botoes, arrastar, passar, tudo que o usuario interagi.

// on load // quando a pagina for carregada por completa.
// window é uma variavel global do js

window.onload = function(){
	console.log("Pagina carregada");
	//alert("pagina carregada");
}



// EVENTO DE CLICK

var botao = document.getElementById("btn");
var title = document.getElementById("title");
botao.addEventListener('click', function(){
	title.remove();
	alert("CLICOU!")
})

// EVENTO HOVER MOUSE

// o classList adicona ou remove classe ao um elemento
var link = document.getElementById("link");
link.addEventListener('mouseover', function(){
	link.classList.add("link");
})
link.addEventListener('mouseleave', function(){
	link.classList.remove("link");
})

// para trabalhar com classes
var classes = document.getElementsByClassName('js');

// o this se refere ao objeto no escopo.
for(let i = 0; i < classes.length; i++){
	classes[i].addEventListener("mouseover", function(){
		this.classList.add("active");
	})
	classes[i].addEventListener("mouseleave", function(){
		this.classList.remove("active");
	})
}


// Para trabalahr com change ( eventos que mudam infos ) Como caixas de selecao:
var linguagens = document.getElementById("linguagens");

linguagens.addEventListener("change", function(){
	var options = this.options;
	var itemAtutal = this.selectedIndex;

	console.log(options[itemAtutal].text);
})

// EVENTO BLUR
// quando sai de uma caixa de input

var nomeInput = document.getElementById("nome");
var sobrenomeInput = document.getElementById("sobrenome");

nomeInput.addEventListener("blur", function(){
	sobrenomeInput.value = this.value;
})

// EVENTOS KEYUP
// KEYUP é quando vc tira o dedo da tecla

var text = document.getElementById("search");
var result = document.getElementById("result");
var resultDefaultText = "Nenhum resultado";

text.addEventListener("keyup", function(){
	var value = this.value;
	// Pode se fazer um if dessa forma tambmem:
	// result.innerText = value !== "" ? value : resultDefaultText;

	if(value !== "")
		result.innerText = this.value;
	else
		result.innerText = resultDefaultText;
})

const TECLAENTER = 13;

text.addEventListener("keypress", function(evento){
	if(evento.keyCode == TECLAENTER)
		resultado.style.display = "block";
})
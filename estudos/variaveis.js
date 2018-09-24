	// variaveis

	// para declarar uma variavel use var nome da var
	var test = "teste";

	// posso acessar em todos lugares como em uma funcao
	function teste(){
		test = "mudança";
		// mas voce pode criar uma variavel apenas para o scopo da funcao
		var escopo = "somente na funcao";
		// mas se tirar o "var" voce cria dentro da funcao e o js entende que está global.
		segundoEscopo = "essa fica global";
	}

	teste();

	console.log(test);

	console.log(segundoEscopo);

	// podemos usar qualquer outro tipo de variavel, para declarar uma variavel apenas para o scopo presente use let ao invez de var.
	let variavel = 1;
	// para constantes ( variaveis que nao mudam use:)
	const imudavel = 2;


	// OBJETOS

	var carro = {
		placa: 'ADD-3232',
		modelo: 'Sedã',
		marca: 'Hyundai',
		opcionais: {
			cambio: 'aut.',
			combustivel: 'flex'
		},
		"outra-coisa": "teste"
	};

	console.log(carro.marca);
	console.log(carro["outra-coisa"]);


	// ARRAYS

	var array = ['Diego', {idade: 31, altura: 1.83}, "masculino"];
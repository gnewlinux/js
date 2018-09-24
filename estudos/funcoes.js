// FUNCOES
function nomeFuncao() {
	console.log("Funcao OK!")
}

nomeFuncao();

pessoa = {
	nome: "Diego",
	idade: 31,
	profissao: 'designer',
	cidade: 'Tatui'
}

// pode se criar com paremtros ou objeto
// para testar se é um objeto pode usar o typeof nomeObjeto == 'object'
function novaPessoa(nome, idade, profissao, cidade) {
	pessoa.nome = nome;
	pessoa.idade = idade;
	pessoa.profissao = profissao;
	pessoa.cidade = cidade;
	return pessoa;
}

// pode apenas aceitar argumentos usando o arguments como retorno.
// testeParametros("Diego", 31, 222) // usando dessa forma
function testeParametros() {
	console.log(arguments);
	return true;
}
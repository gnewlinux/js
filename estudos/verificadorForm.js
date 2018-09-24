	var form = document.querySelector("form");

	form.addEventListener("submit", function(evento){
		// preventDefault é para nao dar refresh o botao (nao executar as propriedades default)
		evento.preventDefault();
		var isvalid = true;

		for(var i = 0; i < this.elements.length; i++){
			var item = this.elements[i];

			if(item.type !== "submit"){
				if(item.value == ""){
					item.classList.add("error");
					isvalid = false;
				} else {
					item.classList.remove("error");
				}
			}		}
	})

	var js = document.getElementsByClassName('js');

	for(let i = 0; i < js.length; i++){
		let texto = js[i].innerHTML;
		js[i].innerHTML = 'curso ' + texto + ' js';
	}

	// com forEach já se pode percorrer apenas arrays, sem ser innerHTML com no exemplo acima

	var arrays = [1,2,3,4];

	arrays.forEach( function(element, index) {
		if(element === 1){
			arrays[index] = "vira outra coisa";
		}
	});

	console.log(arrays);

	// while (enquanto for true)

	var i = 0;
	while(i < 5) {
		console.log('oi');
		i++;
	}
let input = document.querySelector('#input');
input.value = 0;
let main = document.querySelector('#main');
let first;
let second;
let operation;
main.addEventListener('click',function(event){

	if(event.target.classList.contains('number')){
		input.value += event.target.textContent;
		if( input.value[1] != '.' ){
		if(input.value[0] == 0){
			input.value = input.value.substr(1);		//убирает лишние нули слева, если таковые есть
		}
	}
	}
	if(event.target.classList.contains('remove')){
		input.value = input.value.substr(0,input.value.length-1);	
	}
	if(event.target.classList.contains('clear')){
		input.value = 0;								
	}

	if(event.target.classList.contains('plusminus')){		
		input.value = String(+input.value * (-1));
	}
	if(event.target.classList.contains('operation')){		
		first = +input.value;
		input.value = '';
		input.placeholder = first;
		second = 0;
		if( event.target.classList.contains('plus')){
			operation = '+';
		}
		if( event.target.classList.contains('minus')){
			operation = '-';
		}
		if( event.target.classList.contains('multiply')){
			operation = '*';
		}
		if( event.target.classList.contains('divide')){
			operation = '/';
		}
	}
	if(event.target.classList.contains('equal')){
		if(!second) second = +input.value;

		switch(operation){
			case '+':
				input.value = first + second;
				break;
			case '-':
				input.value = first - second;
				break;
			case '/':
				input.value = first / second;
				break;
			case '*':
				input.value = first * second;
				break;
			default:
				console.log('something went wrong');
				break;
		}
		first = +input.value;
		
	}



	if(input.value.length > 12) input.value = input.value.substr(0,12);	
	if(input.value.startsWith('.')) input.value = 0 + input.value;

});
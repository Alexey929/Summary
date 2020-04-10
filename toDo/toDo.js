let input = document.querySelector("#input");
let buttonAdd = document.querySelector("#add");
let list = document.querySelector('#toDoList');
function add(){	
	if (!input.value){
		alert('input is empty');
	}
	else{
	let action = document.createElement('li');
	let cancel = document.createElement('button');
	let check = document.createElement('input');
	check.type = 'checkbox';
	check.classList.add('check');
	cancel.classList.add('cancel');
	action.classList.add('action');
	action.textContent = input.value;
	cancel.textContent = "X";
	list.append(action);
	action.append(cancel);
	action.prepend(check);
	input.value = '' ;

	buttonAdd.style.background = 'lime';
	setTimeout(()=> buttonAdd.style.background ='limegreen',200);		

	check.onclick = function(){
	if(action.style.textDecoration =='') action.style.textDecoration = 'line-through';			
	else action.style.textDecoration = '';
	}
	cancel.onclick = function(){
	cancel.parentElement.remove();
}
	}
}
buttonAdd.addEventListener('click',add);

document.addEventListener('keydown',function(event){
	if(event.code == 'Enter'){
		add();
	}
	if(event.key == 'Delete'){
	list.lastElementChild.remove();
	}
});



function flashingTitle(){
let title = document.querySelector("h1");
if (title.style.color == 'darkblue') title.style.color = 'blue';
else title.style.color = 'darkblue';	
}
let timer = setInterval(flashingTitle,500);



var button = document.querySelector("#enter");
var input = document.querySelector("#userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li")

function crossOff(item){
	item.addEventListener("click", function (){
		item.classList.toggle("done");
		});
}

function deleteItems(button){
	button.addEventListener("click", function(){
		button.parentNode.remove();
	})
}

function theDeleteBtn(item){
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete!!"));
	item.appendChild(btn);
	deleteItems(btn);
}

function itemFeatures(item){
		crossOff(item);
		theDeleteBtn(item);
	}

function inputLength(){
	return input.value.length;
}

function doneItem(){
	list.classList.toggle("done");
}

function addListItems(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete!!"));
	li.appendChild(btn);
	deleteItems(btn);
	crossOff(li);
}

function addListClick(){
	if(inputLength() > 0) {
	addListItems();
}
}

function addListKeyPress(event){
	if(inputLength() > 0 && event.keyCode === 13) {
	addListItems();
}
}


button.addEventListener("click", addListClick);

input.addEventListener("keypress", addListKeyPress);

list.forEach(itemFeatures);

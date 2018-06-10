(function(){
	'use strict';

	// Global variables.
	let todo = document.getElementsByName('todo')[0],
		todoList = document.getElementsByClassName('todo-list')[0],
		doneList = document.getElementsByClassName('done-list')[0],
		deletedList = document.getElementsByClassName('deleted-list')[0];

	let buttonN = 0;

	// Remove elements easily.
	Element.prototype.remove = function() {
	    this.parentElement.removeChild(this);
	}

	NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
	    for(var i = this.length - 1; i >= 0; i--) {
	        if(this[i] && this[i].parentElement) {
	            this[i].parentElement.removeChild(this[i]);
	        }
	    }
	}

	function createButton(text, section){
		// Create a <button> element.
		var btn = document.createElement("BUTTON");

		// Create a text node
		var t = document.createTextNode(text);

		// Append the text to <button>.
		btn.appendChild(t);

		// Append <button> to <body>.
		section.appendChild(btn);

		if(btn.innerHTML == 'Delete'){
			btn.onclick = function(){
				// location.reload();
				deletedList.appendChild(this.parentElement);
			};
		}else if(btn.innerHTML == 'Done'){
			btn.onclick = function(){
				doneList.appendChild(this.parentElement);
			}
		}
	}

	// Keyboard event listener.
	document.addEventListener('keypress', function(e){
		// Create a text node for the todo list section.
		let todoText = document.createTextNode(todo.value);

		// Check if user pressed Enter.
		let code = (e.keyCode ? e.keyCode : e.which);

		// 13 is Enter keycode.
		if(code == 13 && todo.value.length > 2) {
			let section = document.createElement('section');
			// todoList.innerHTML = '';
			todoList.appendChild(section);
			section.appendChild(todoText);

			// Buttons.
			createButton('Done', section);
			createButton('Delete', section);

			buttonN++;

			// Add br.
			section.appendChild(document.createElement("br"));
			todo.value = '';
		}
	});
})();
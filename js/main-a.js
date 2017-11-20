'use strict';

const addBtn = document.querySelector('#add');
const changeBtn = document.querySelector('#change');
const toggleBtn = document.querySelector('#toggle');
const p1 = document.querySelector('main p:first-child');
const p2 = document.querySelector('main p:nth-child(2)');
const p3 = document.querySelector('main p:nth-child(3)');

addBtn.onclick = function(){
    
	p1.classList.add("red");
}

changeBtn.onclick = function(){
	
	if (p2.classList.contains('red')) {
	
		p2.className = "blue";
	} 
	else {
		p2.className = "red";
	} 
} // end changeBtn.onClick()

toggleBtn.onclick = function() {
	
	p3.classList.toggle('green');
}



















var container = document.querySelector(".container");
var cont_bord = document.querySelector(".borderes");
var button = document.querySelector(".submit"); 
var add_task = document.querySelector(".add-task");
var form = document.querySelector(".form");
var  borderres = [];
var checkboxes;
var title = document.querySelector(".name");
button.onclick = function() {
	let border = document.createElement("div");
	let circle = document.createElement("span");
	let head = document.createElement("h3");
	let fill = document.createElement("div");
	let tasks = document.createElement("div");
	let task = document.querySelectorAll(".task");
		circle.className = "border__circle"; 
		head.className = "menu__item_head";
		head.innerHTML = title.value;
		fill.className = "fill";
		tasks.className = "tasks";
		border.appendChild(circle);
		border.appendChild(head);
		border.appendChild(fill);
		for(let i=0;i < task.length;i++){
			let tasks__task = document.createElement("div");
			let tasks__task_checkbox = document.createElement("input");
			var tasks__task_name = document.createElement("p");
			tasks__task_name.className = "tasks__task_name";
			tasks__task.className = "tasks__task";
			border.className = "border";
			tasks__task_checkbox.type = "checkbox";
			tasks__task_checkbox.className = "tasks__task_checkbox";
			tasks__task_name.innerHTML = task[i].value;
			tasks__task.appendChild(tasks__task_checkbox);
			tasks__task.appendChild(tasks__task_name);
			tasks.appendChild(tasks__task);
			border.appendChild(tasks);
		}
		let clone = border.cloneNode(true);
		console.log(clone);
		borderres.push(clone);
		console.log(checkboxes);

	for(let i = 0;i < borderres.length; i++){
		cont_bord.appendChild(borderres[i]);
	}
	var checkboxes = document.querySelectorAll(".tasks__task_checkbox");
	var checkboxes__name = document.querySelectorAll(".tasks__task_name");

		for(let i = 0;i < checkboxes.length; i++){
		checkboxes[i].onchange = function(){
			console.log(checkboxes__name[i]);
			checkboxes__name[i].style.textDecoration = "line-through";
		}
	}
}
add_task.onclick = function (){
	console.log("jfladsjlk");
	let task = document.querySelector(".task").cloneNode(true);
	form.insertBefore(task,add_task);

}



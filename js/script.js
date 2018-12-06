var container = document.querySelector(".container");
var cont_bord = document.querySelector(".borderes");
var button = document.querySelector(".submit"); 
var add_task = document.querySelector(".add-task");
var remove_task = document.querySelector(".remove-task");
var form = document.querySelector(".form");
var flex = document.querySelector(".flex");
var red = document.querySelector(".red");
var  borderres = [];
var checkboxes;
var target;
var title = document.querySelector(".name");
red.style.display = "none";
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
			if(task[i].value != "" && task[i].value.length > 3){
				red.style.display = "none";
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
			}else{
				red.style.display = "block";
			}
		}
		let clone = border.cloneNode(true);
		borderres.push(clone);

	for(let i = 0;i < borderres.length; i++){
		cont_bord.appendChild(borderres[i]);
	}
	var checkboxes = document.querySelectorAll(".tasks__task_checkbox");
	var checkboxes__name = document.querySelectorAll(".tasks__task_name");
	var fills = document.querySelectorAll(".fill");
	var circles = document.querySelectorAll(".border__circle");
		for(let i = 0;i < checkboxes.length; i++){
			checkboxes[i].onchange = function(){
				if(checkboxes[i].checked){
					target = checkboxes[i].parentNode.parentNode.parentNode.querySelector(".fill");
					let target_chekboxes = checkboxes[i].parentNode.parentNode.querySelectorAll(".tasks__task_checkbox");
					let checked = checkboxes[i].parentNode.parentNode.querySelectorAll(".tasks__task_name");
					let all_chek = [];
					for(let j = 0; j < checked.length; j++){
						if (checked[j].parentNode.querySelector(".tasks__task_checkbox").checked) {
							let check = checked[j].parentNode.querySelector(".tasks__task_checkbox");
							all_chek.push(check);
						}
					}
					var math = 85/target_chekboxes.length;
					checkboxes__name[i].style.textDecoration = "line-through";
					var summ = math*all_chek.length;
					target.style.height = summ +"%";
				}else if(!checkboxes[i].checked){
					checkboxes__name[i].style.textDecoration = "none";
					summ -=math;
					target.style.height = summ +"%";
				}
		for(let i = 0;i < borderres.length; i++){
			cont_bord.appendChild(borderres[i]);
			if(fills[i].style.height == "85%"){
				circles[i].style.background = "black";
				}else{
					circles[i].style.background = "white";
				}
			}
		}
	}
}
add_task.onclick = function (){
	let task = document.querySelector(".task").cloneNode(true);
	form.insertBefore(task,flex);
		remove_task.onclick = function (){
		let task = document.querySelectorAll(".task");
		let count = task.length-1;
		if(count != 0){
			task[count].remove();
		}
	}
}



<?php
	require_once "data.php";
?>
<!DOCTYPE html>
<html>
<head>
	<title>Личный рост</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>	
	<h1 class="head">Эволлюция</h1>
	<nav class="menu">
		<ul class="menu__items">
			<li class="menu__items_item">
				<a href="sport.html">Спорт</a>
			</li>
			<li class="menu__items_item">
				<a href="index.html">Карьера</a>
			</li>
			<li class="menu__items_item">
				<a href="tvorchestvo.html">Творчество</a>
			</li>
			<li class="menu__items_item">
				<a href="level-up.php">Личный рост</a>
			</li>
		</ul>
	</nav>
	<div class="container">
		<div class="form">
			<input type="text" class="name" placeholder="head">
			<input type="text" class="task" placeholder="task">
			<div class="flex" style="display: flex; width: 250px">
				<button class="remove-task">удалить</button>
				<button class="add-task">добавить</button>
			</div>
			<button class="submit">Создать</button>
			<p class="red" style="color: red">Заполни поле</p>
		</div>
		<div class="borderes">
			<?php   
				$res = mysqli_query($connection,"SELECT*FROM brings WHERE category = 'Личный рост'");

				
				$brings = mysqli_fetch_all($res, MYSQLI_ASSOC);
				foreach ($brings as $bring) {
				$title = $bring['name'];
			?>
		<div class="border">
			<span class="border__circle" style="background: white;"></span>
			<h3 class="menu__item_head"><?php echo $title ?></h3>
			<div class="fill" style="height: 0%;"></div>
			<div class="tasks">
				<?php   
					$result = mysqli_query($connection,"SELECT*FROM tasks WHERE bring = '$title'");
					
					$tasks = mysqli_fetch_all($result, MYSQLI_ASSOC);
					foreach ($tasks as $task) {
					
				?>
				<div class="tasks__task">
					<input type="checkbox" class="tasks__task_checkbox">
					<p class="tasks__task_name" style="text-decoration: none;"><?php echo $task['name']; ?></p>
				</div>
				<?php
					}
				 ?>
			</div>
		</div>
		<?php 
			}
		?>

	<script type="text/javascript" src="js/script.js"></script>
</body>
</html>
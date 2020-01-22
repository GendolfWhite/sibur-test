<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" type="text/css" href="/css/default.css">
	<link rel="stylesheet" type="text/css" href="/css/styles.css">

	<script src='https://code.jquery.com/jquery-3.4.1.min.js'></script>
	<script src='/js/libs.js'></script>
</head>
<body>
	<div class='bg'></div>
	<div id='sections'>
		<div class="section flex" data-name='Блок 1'>
			<div class='section__wrap wrap'>
				<p class='section__text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis</p>
			</div>
		</div>
		<div class="section flex" data-name='Блок 2'>
			<div class='section__wrap wrap'>
				<p class='section__text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus</p>
			</div>
		</div>
		<div class="section flex" data-name='Блок 3'>
			<form action="" method="POST" class='form flex'>
				<div class='form__element'>
					<input type="text" name="ФИО" placeholder='Ваше ФИО'>
				</div>
				<div class='form__element'>
					<input type="email" name="Почта" placeholder='Ваш e-mail'>
				</div>
				<div class='form__element'>
					<input type="text" name="Телефон" placeholder='Ваш телефон' required>
				</div>
				<div class='form__element form__element_fullwidth'>
					<textarea name="о_себе" placeholder='О себе'></textarea>
				</div>
				<button class='form__button'>Отправить</button>
				<div class='form__result'></div>
			</form>
		</div>
	</div>
	<div id='navigation' class='nav flex'></div>
</body>
</html>
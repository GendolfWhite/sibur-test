$(function(){

	// ЗАполняем навигацию
	const $nav = $('#navigation');
	const $section = $('.section');
	const section_len = $section.length;
	let section_id_cur = 1; // индекс текущей секции.
	const scroll_delay = 1000; // Сколько запрещать повторную прокрутку секции. 5000 = 5 секунд
	let scroll = true;

	if(section_len !== 0){
		// Ну а зачем нам выполнять весь код, если нету секций...
		let currrent_section_id = 1;

		let section_id = 1;
		$section.each(function(){
			let name = $(this).attr('data-name');
			let top = $(this).offset().top;
			$(this).attr('data-id', section_id);
			let a = "<a class='nav__item' href='#' data-id='"+section_id+"' data-name='"+name+"' data-top='"+top+"'></a>";
			$nav.append(a);
			section_id++;
		});
		$nav.find('a:first-child').addClass('nav__item_current');
		// ЗАполняем навигацию


		// Вешаем скролл на кнопки навигации
		const $nav_a = $nav.find('a');
		$nav_a.click(function(event){
			let id = parseInt($(this).attr('data-id'));
			let $section = $('.section[data-id="'+id+'"]');
			let top = $(this).attr('data-top');
			if(section_len != 0){
				$('#sections').animate({
					scrollTop: top+'px'
				}, 400);
				$nav_a.removeClass('nav__item_current');
				$(this).addClass('nav__item_current');
			}else{
				alert('Ошибка! Нет такого блок');
			}
			section_id_cur = id;
			console.log('Текущая секция:', section_id_cur);
			event.preventDefault();
		});
		// Вешаем скролл на кнопки навигации


		function changeSection($is_up = false){
			if($is_up){
				if(section_id_cur + 1 <= section_len)
					section_id_cur++;
			}else{
				if(section_id_cur - 1 >= 1)
					section_id_cur--;
			}
			scrollToSection();
		}

		function scrollToSection(){
			$nav.find('a[data-id="'+section_id_cur+'"]').click();
		}

		function stopScroll(){
			scroll = false;
			setTimeout(function(){
				scroll = true;
			}, scroll_delay);
		}
		// jQuery из коробки не имеет события прокрутки колеса мыши... Пишем на нативке.
		document.addEventListener('mousewheel', function(event){
			if(scroll){
				if(event.deltaY == -100){
					// вверх
					changeSection();
				}else{
					// вниз
					changeSection(true);
				}
				stopScroll();
				// event.preventDefault();
			}
		});

	}else{
		console.log('Нет секций.');
	}

	$('.form').submit(function(event){
		event.preventDefault();
		let formData = new FormData($(this).get(0));

		$(this).find('[name]').each(function(){
			let line = '';
			line += $(this).attr('name')+":<br>";
			line += $(this).val()+";<br><br>";
			$('.form__result').append(line);
		});
	});

	$(".form__element input[name='Телефон']").change(function(event) {
		let val = $(this).val().replace(/\s/g,'').replace(/-/g,'-').replace(/\(/g,'').replace(/\)/g,'').split('');
		let newVal = [];
		if(val.length == 11 || val.length == 12){
			if(val[0] == '8'){
				newVal.push('+7');
				newVal.push('(', val[1]+val[2]+val[3], ')');
				newVal.push(val[4]+val[5]+val[6], '-');
				newVal.push(val[7]+val[8]+val[9]+val[10]);
			}else if(val[0] == '+' && val[1] == '7'){
				newVal.push(val[0], val[1])
				newVal.push('(', val[2]+val[3]+val[4], ')');
				newVal.push(val[5]+val[6]+val[7], '-');
				newVal.push(val[8]+val[9]+val[10]+val[11]);
			}
			console.log(val);
			console.log(newVal);
			$(this).val(newVal.join(''));
		}else{
			$(this).val('');
		}
	});
});
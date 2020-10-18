$(document).ready(function(){
  if (window.location.href.indexOf('index') > -1) {
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1050,
    infiniteLoop: true,
    // responsive: true,
    auto: true
  });
}

  // Posts
   if (window.location.href.indexOf('index') > -1) {
  let posts = [
  	{
  		title: 'Prueba de titulo 1',
  		date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
  		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Incidunt quidem laudantium numquam tempora, dolorem officia, explicabo deserunt delectus rem vel debitis. Excepturi, alias provident ex maxime reprehenderit? Placeat, sunt, nisi.'
  	},
  	{
  		title: 'Prueba de titulo 1',
  		date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
  		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Incidunt quidem laudantium numquam tempora, dolorem officia, explicabo deserunt delectus rem vel debitis. Excepturi, alias provident ex maxime reprehenderit? Placeat, sunt, nisi.'
  	},
  	{
  		title: 'Prueba de titulo 1',
  		date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
  		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Incidunt quidem laudantium numquam tempora, dolorem officia, explicabo deserunt delectus rem vel debitis. Excepturi, alias provident ex maxime reprehenderit? Placeat, sunt, nisi.'
  	},
  	{
  		title: 'Prueba de titulo 1',
  		date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
  		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Incidunt quidem laudantium numquam tempora, dolorem officia, explicabo deserunt delectus rem vel debitis. Excepturi, alias provident ex maxime reprehenderit? Placeat, sunt, nisi.'
  	},
  ];
  		posts.forEach((item, index) =>{
  			let post = `  			
                <article class="post">
                    <h3 class="m-0">${item.title}</h3>
                    <span>${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="btn btn-primario">Leer Más</a>
                </article>
  			`;

  		$("#posts").append(post);
  	});
  }

    // Selector de temas
    let theme = $("#selector-theme");

      $("#green").click(function(){
        theme.attr('href', 'css/green.css');
    });
      $("#red").click(function(){
        theme.attr('href', 'css/red.css');
    });
      $("#blue").click(function(){
        theme.attr('href', 'css/blue.css');
    });

    //Scroll
    $('#up').click(function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, "slow");
    });

    // Login con LocalStorage
    $('#form').submit(function(){
       let form_nombre = $('#form_nombre').val();

       localStorage.setItem('usuario', form_nombre);
    });

    let form_nombre = localStorage.getItem('usuario');
    
    if (form_nombre != null && form_nombre != "undefined") {
      let cursos_h3 = $('.cursos h3');
      cursos_h3.html(`<strong> Bienvenido </strong> ${form_nombre} <br>`);
      cursos_h3.append("<a href='#' id='logout'>Cerrar Sesión</a>");
      $("#form").hide();
      $("#logout").click(function(){
        localStorage.clear();
        location.reload();
      });
    }

    // Acordeon
    if (window.location.href.indexOf('about') > -1) {
      $("#acordeon").accordion();
      }

    // 
    if (window.location.href.indexOf('contact') > -1) {
        $("#form input[name='fecha']").datepicker({
          dateFormat: 'dd-mm-yy'
        });

     $.validate({
        lang : 'es',
        errorMessagePosition: 'top'
      });
    }
});
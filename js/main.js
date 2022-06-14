$(function(){
    $('.fairy_tail__slider, .our-trip__slider, .footer__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow_prev.svg" alt=""> </button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow_next.svg" alt=""> </button>',
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        responsive: [ 
            { 
            breakpoint: 1240, 
            settings: { 
                arrows: false 
            } 
           }, 
        ]    
     
    });
$(".menu, .our-trip__body").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
    
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
    
        //узнаем высоту от начала страницы до блока на который ссылается якорь
          top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
      });
});


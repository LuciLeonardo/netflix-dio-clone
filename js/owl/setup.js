$('.owl-carousel').owlCarousel({
    loop:true,  /*navega de forma infinita*/
    margin:10,  /*margem entre um quadrado e outro*/
    nav:false,   /*menuzinho de navegação*/
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
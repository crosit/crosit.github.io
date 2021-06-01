$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    //navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
    });
});


// typing animation

var typed = new Typed(".typing",{
    strings: ["Desarrollador","Estudiante","Diseñador","Freelance"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing2",{
    strings: ["Desarrollador","Estudiante","Diseñador","Freelance"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

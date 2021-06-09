$(document).ready(function(){
    document.getElementById("send").style.display = "none";
   
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    //navbar btn
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
    });
    $('.menu').click(function(){
        $('.navbar .menu').toggleClass("active");
    });
});


// typing animation

var typed = new Typed(".typing",{
    strings: ["Desarrollador","Estudiante","Diseñador","Autodidacta"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing2",{
    strings: ["Desarrollador","Estudiante","Diseñador","Autodidacta"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// send email

(function() {
    emailjs.init("user_HdwPjrBwytKg6Jsd2AgVK");
    })();
function sendMail(params){
    
    var temParams ={
        from_name:document.getElementById("from_name").value,
        asunto:document.getElementById("asunto").value,
        from_email:document.getElementById("from_email").value,
        message:document.getElementById("message").value
        
    };
    if(from_name.value != "" && asunto.value != "" && from_email.value != "" && message.value != "" ){
        emailjs.send('service_0h0dq03','template_wxexrlg',temParams)
        .then(function(res){
            console.log("success",res);
            send = document.getElementById("send").style.display = "block";
        });
    }
    
}
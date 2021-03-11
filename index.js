$(document).ready(function(){
    $(document).scroll(function(){
        var scroll=$(window).scrollTop();

        if(scroll>=20)
        {
            $('.navbar').addClass('nav-scroll');
        }
        else{
            $('.navbar').removeClass('nav-scroll');
        }
    });
    var typed=new Typed(".typing",{
        strings:["UnderGrad Student","B. Tech Computer Science and Engineering","Upcoming summer intern at Deuteche bank."],
        typeSpeed:100,
        backSpeed:60,
        loop:true,
    });


    var typed=new Typed(".typing-2",{
        strings:["UnderGrad Student","B. Tech Computer Science and Engineering","Upcoming summer intern at Deuteche bank."],
        typeSpeed:100,
        backSpeed:60,
        loop:true,
    });
});
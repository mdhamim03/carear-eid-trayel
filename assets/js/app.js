
$(function(){
//Nav Bar staky start
    let menu = $('.Menu_bar')
    let backToTopBtn = $(".BackToTopBtn");

    $(window).scroll(function(){
        let scrTop = $(window).scrollTop();
        if(scrTop>400){
            menu.addClass("menu_Animate")
        }else{
            menu.removeClass("menu_Animate")
        }
        //*Back to top Btn
        if(scrTop>500){
            backToTopBtn.fadeIn();
        }else{
            backToTopBtn.fadeOut();
        }
    });
    //*Bact to top Btn
    backToTopBtn.click(function(){
        $("html,body").animate(
            {
                scrollTop:0,
            },
            1500
        );
    });
//Nav Bar staky end
// Skick Slider start
    $('#Main_Banner').slick({
        autoplay:true,
       autoplaySpeed:2500,
       speed:1000,
       arrows:true,
       prevArrow:".arrows .left_arrow",
       nextArrow:".arrows .right_arrow",
    });
// slick slider end
//Veno Box start
    new VenoBox({
        selector: '.Galleary_veno',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane'
    });
//veno box end
})

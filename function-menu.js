var state = 0
$(".function-menu .btn-menu").click(function() {
   if (state === 0){
    openMenu();
   }
   else {
    closeMenu();
   }
});

function closeMenu(){
    $(".btn-menu-icon").css("transform","");
    $(".gashapon").css("opacity","1");
    $(".hint-text ").css("opacity","1");
    $(".playtimes ").css("opacity","1");
    $(".menu-box").addClass("close");
    $(".menu-box").removeClass("open");
    setTimeout(function(){
        $(".btn-import, .btn-instruction, .btn-abouts, .btn-share").css("opacity","0");
        state =0;
      }, 0.5*1000 );
}

function openMenu(){

    $('.btn-menu-icon').css("transform","rotate(180deg)");
    $(".gashapon").css("opacity","0.5");
    $(".hint-text ").css("opacity","0.5");
    $(".playtimes ").css("opacity","0.5");
    $(".menu-box").addClass("open");
    $(".menu-box").removeClass("close");
    setTimeout(function(){
        $(".btn-import, .btn-instruction, .btn-abouts, .btn-share").css("opacity","1");
        state =1;
      }, 0.5*1000 );
    
}
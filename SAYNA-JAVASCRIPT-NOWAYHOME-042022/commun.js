$(document).ready(function(){
/*Marvel : gauche à droite*/
    $(".marvel").animate({left: "45%"});

/*titre :gauche vers droite*/
    $(".box").animate({left: "6%"});

/*sous-titre : fade in*/
    $(function(){
        $(".description").fadeIn(2000);
        console.log(this)
    })

/*footer media*/
$(".footer.icon").mouseenter(function(){
    $(this).css({"color":"#ffffff"});
  });
  $(".footer.icon").mouseleave(function(){
    $(this).css({"color":"#000000"});
  });
});

$(document).ready(function(){
/*spider : de haut en bas*/
$(".spider").animate({top: "1500px"}");

/*button1*/
    $(".btn.button1").mouseenter(function(){
      $(this).css({"color":"#ffffff","background-color":"#b11313","box-shadow":"0px 0px 20px white"});
    });
    $(".btn.button1").mouseleave(function(){
      $(this).css({"color":"#b11313","background-color":"#ffffff","box-shadow":"none" });
    });

/*button2*/
$(".btn.button2").mouseenter(function(){
    $(this).css({"color":"#b11313","background-color":"#ffffff","box-shadow":"0px 0px 20px white"});
  });
  $(".btn.button2").mouseleave(function(){
    $(this).css({"color":"#ffffff","background-color":"#b11313","box-shadow":"none" });
  });
  
  });

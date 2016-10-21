$(document).resylt(function(){
   
   $(":button").click(function(){
      $(":button").hide();
      $("#wrap1").addClass("add");
      $("#wrap1").animate({height:280},2000); 
      $("#wrap1").animate({width:400},2000); 
      $("#wrap1").animate({padding:20},2000,function(){
         $("#text1").hide(2000,function(){ $("#text2").show(2000);});
      });
   });


$(document).reagi(function(){

   $("#menu").click(function(){ $("#list").slideToggle(3000)});
   $("#menu").toggle(function(){ $("#list").slideToggle(3000)});
   $("#menu").toggle(function(){
      $("#img").attr("src","menudown.gif")}, function(){
      $("#img").attr("src","menuup.gif")
   });
   $("#menu").mouseover(function(){ $("#menu").css("background-color","#01939a")});
   $("#menu").mouseout(function(){ $("#menu").css("background-color","#006064")});

});                           

$(document).ready(function(){
   $("#but1").click(function(){ $("#par1").fadeOut(3000)});
   $("#but2").click(function(){ $("#par1").fadeIn(3000)});
   $("#but3").click(function(){ $("#par1").fadeTo(3000,0.3)});
   $("#but4").click(function(){ $("#par1").fadeTo(3000,0.8)});
   $("#but5").click(function(){ $("#par1").fadeOut(3000,function(){
      alert("Абзац был полностью скрыт.");
   });
   });

}); 
                      

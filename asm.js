$(document).ready(function(){
    $(Window).scroll(function(){
         if(this.scrollY > 20){
             $('.navbar').addClass("sticky");
         }else{
              $('.navbar').removeClass("sticky");   
         }
    });
   // toggle menu/navbar script
   $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.navbar .menu i').toggleClass("active");
   });
});


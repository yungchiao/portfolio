$(window).scroll(function(e){
    if ($(window).scrollTop()<=0)
     $(".explore").addClass("at_top");
    else
      $(".explore").removeClass("at_top");
   
  });
  
  
  $(window).scroll(function(e){
    if ($(window).scrollTop()<=0)
     $(".navbar").removeClass("att_top");
    else
      $(".navbar").addClass("att_top");
   
  });
  
  $(document).on('click','a',function(event){
    
    var target= $(this).attr("href");
    console.log(target);
    $('html,body').animate({
      scrollTop: $(target).offset().top},500);
  
  });
  
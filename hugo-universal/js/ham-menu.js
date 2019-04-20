function openForm(x) {
  document.getElementById("toc-button").classList.toggle("tocbut-change");
  document.getElementById("myForm").classList.toggle('form-popup-open');
  document.getElementById("myForm").classList.toggle('form-popup-close');
}

function scrollNav() {
  $('#TableOfContents a').click(function(){  
    //Toggle Class
    $(".active").removeClass("active");      
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 75
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}

scrollNav();
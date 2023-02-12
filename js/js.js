$('.flowing-scroll').on('click', function() {
  var el = $(this);
  var dest = el.attr('#footer'); 
  if (dest !== undefined && dest !== '') { 
    $('html').animate({
        scrollTop: $(dest).offset().top 
      }, 10 
    );
  }
  return false;
});

$(document).ready(function(){    

  $('.nav-ico').click(function (e) {
    e.preventDefault(e);
    $('body').toggleClass('js-open')
  })
  $('.backdrop').click(function (e) {
    e.preventDefault(e);
    $('body').removeClass('js-open')
  })
    

});
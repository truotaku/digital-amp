// Generated by CoffeeScript 1.8.0
(function() {
  var orderImages;

  $(function() {
    orderImages();
    return $(window).on('scroll', function() {
      var $nav;
      console.log('I got in here');
      if ($(window).scrollTop() > 200) {
        $nav = $('nav:first');
        return $nav.addClass('scrolled');
      } else {
        $nav = $('nav:first');
        return $nav.removeClass('scrolled');
      }
    });
  });

  orderImages = function() {
    return setInterval(function() {
      return $('.image-container:last').prependTo('#main-images-container');
    }, 13000);
  };

}).call(this);

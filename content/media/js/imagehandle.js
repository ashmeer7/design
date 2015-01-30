(function(playvideo) {
    setupImage(window.jQuery, window, document);

}(function($, window, document) {

  $(function() {
    var image = $("#welcome-image");
    //var video = $("#welcome-video");
    //video.get(0).play();
    image.click(function() {
      window.location = "/editorial/index.html"});
    //we can do stuff here
  });
}));

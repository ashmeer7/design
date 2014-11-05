(function(playvideo) {
    playvideo(window.jQuery, window, document);

}(function($, window, document) {

  $(function() {

    var video = $("#welcome-video");
    video.get(0).play();
    video.click(function() {
      window.location = "/index.html"});

    //we can do stuff here
  });
}));

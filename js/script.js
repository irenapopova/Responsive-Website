$(document).ready(function() {
  $('.img-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
      gallery:{
    enabled:true
  }
  
});
});

//navbar transition

$(document) .ready(function (){
    $(window) .scroll(function (){
        var location = $(this).scrollTop();
        if(location < 70) {
        $("nav").removeClass("transparent");    
        }
    else {
        $("nav").addClass("transparent");
    }
});
});

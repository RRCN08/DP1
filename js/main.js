$(document).ready(function() {

      var audio = new Audio("./src/audio/31_Kokrajhar_gossaigaon.wav");
      var isPlaying = false;

    $('#Kokrajhar').on('click',function(){
        $("#district").modal();
   });

       $('body').on('click', '.btn', function(e){
    e.preventDefault();

    if ( $(this).hasClass('play') ) {
      togglePlay();
      $(this).removeClass('play');
      $(this).addClass('pause');
    } else {
      togglePlay();
      $(this).removeClass('pause');
      $(this).addClass('play');
    }

    });

    function togglePlay() {
      if (isPlaying) {
        audio.pause();
        audio.currentTime = 0;
      } else {
        audio.play();
      }
    };

    audio.onplaying = function() {
      isPlaying = true;
    };
    audio.onpause = function() {
      isPlaying = false;
    };

    audio.addEventListener("ended",  function() {
        isPlaying = false;
          $('.btn').addClass('play').removeClass('pause');
      });


});

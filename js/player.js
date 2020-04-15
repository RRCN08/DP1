$(document).ready(function() {

  $('body').on('click', '.btn', function(e) {
  e.preventDefault();

  if (isPlaying && $(this).hasClass('play')) {
   audio.pause();
   audio.currentTime = 0;
   isPlaying = false;
     $('.btn').addClass('play').removeClass('pause');
  }


  if ( $(this).hasClass('play') ) {
  var audioID = $(this).attr('id');
  audio.src = "./src/audio/" + audioID + ".mp3";

  togglePlay();
  $(this).removeClass('play');
  $(this).addClass('pause');

  } else {
  togglePlay();
  $(this).removeClass('pause');
  $(this).addClass('play');
  }

  });

  $('#district').on('hidden.bs.modal', function(){

    $(audio).each(function(){
      this.pause();
      this.currentTime = 0;
    });

    $(".btn").attr("style", "display: none;");
    $(".btn").removeClass('pause');
    $(".btn").addClass('play');

  });


  function togglePlay() {
  if (isPlaying) {
   audio.pause();
   audio.currentTime = 0;
  }
  else {
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

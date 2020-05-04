var BrahmaT = 1;

function BrahmaToggle() {
  // Get the checkbox
  var checkBox = document.getElementById("brahma");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
      BrahmaT = 1;
      $('.st11').fadeIn('slow', function(){
      $('.st11').attr("style", "display: inline-block;"); });
  } else {
    BrahmaT = 0;
    $('.st11').fadeOut('slow', function(){
    $('.st11').attr("style", "display: none;"); });
  }
}


$(document).ready(function() {

      $('#start').on('click',function(){
        $('#intro').fadeOut('slow', function(){
        $('.assam').fadeIn('slow');
        $('.recordings').fadeIn('slow');
        });
      });

      $('#info').on('click',function(){
        $('.main').fadeOut('slow', function(){
        $('.assam').fadeOut('slow');
        });
        $('#intro').delay(600).fadeIn('slow');
        $("#recordingsbtn").addClass("active");
        $("#lexicalsbtn").removeClass("active");
        $("#varietiesbtn").removeClass("active");

        $("#head1").text("Welcome");

        $("#desc1").html("We have compiled audio recordings from 60 people across Assam, from west to east, in a search of the different dialects of the Assamese language. <br>To start listening to recordings of various speakers, click on a district.");
      });

      $('#varietiesbtn').on('click',function(){
        if ( $("#recordingsbtn").hasClass( "active" ) ) {
          $('.recordings').fadeOut('slow', function(){
          $('.varieties').fadeIn('slow');
          $("#recordingsbtn").removeClass("active");
          });
        }

        else {
          $('.lexicals').fadeOut('slow', function(){
          $('.varieties').fadeIn('slow');
          $("#lexicalsbtn").removeClass("active");
          });
        }

        $(this).addClass("active");
        $('.btn').removeClass("btn-outliner");
        $('.btn').removeClass("btn-outlineg");
        $('.btn').addClass("btn-outlineb");

        $("#head1").fadeOut(function() {
          $(this).text("Dialect Map")
          }).fadeIn();

        $("#desc1").fadeOut(function() {
          $(this).html("Although Assamese can be divided mainly into 3 kinds - Western, Eastern, and Central, our respondents have identified as much as 10 different varieties. We also asked them how proud of they are of their language on a scale from 1-5.<br><br>Hover on a region to see what we found.")
          }).fadeIn();

      });

      $('#recordingsbtn').on('click',function(){
        if ( $("#varietiesbtn").hasClass( "active" ) ) {
          $('.varieties').fadeOut('slow', function(){
          $('.recordings').fadeIn('slow');
          $("#varietiesbtn").removeClass("active");
          });
        }

        else {
          $('.lexicals').fadeOut('slow', function(){
          $('.recordings').fadeIn('slow');
          $("#lexicalsbtn").removeClass("active");
          });
        }

        $(this).addClass("active");
        $('.btn').removeClass("btn-outlineg");
        $('.btn').removeClass("btn-outlineb");
        $('.btn').addClass("btn-outliner");

        $("#head1").fadeOut(function() {
          $(this).text("Welcome")
          }).fadeIn();

        $("#desc1").fadeOut(function() {
          $(this).html("We have compiled audio recordings from 60 people across Assam, from west to east, in a search of <br>the different dialects of the Assamese language. <br><br>To start listening to recordings of various speakers, click on a district.")
          }).fadeIn();
      });

      $('#lexicalsbtn').on('click',function(){

        if ( $("#varietiesbtn").hasClass( "active" )) {
          $('.varieties').fadeOut('slow', function(){
          $('.lexicals').fadeIn('slow');
          $("#varietiesbtn").removeClass("active");
          });
        }

        else {
          $('.recordings').fadeOut('slow', function(){
          $('.lexicals').fadeIn('slow');
          $("#recordingsbtn").removeClass("active");
          });
        }

        $(this).addClass("active");
        $('.btn').removeClass("btn-outliner");
        $('.btn').removeClass("btn-outlineb");
        $('.btn').addClass("btn-outlineg");

        $("#head1").fadeOut(function() {
          $(this).text("Word Distribution")
          }).fadeIn();

        $("#desc1").fadeOut(function() {
          $(this).html("To find out the variation of words amongst the different dialects, native terms for 12 items were elicited from the speakers. <br><br> To see the distribution of these words on the map, click on a term below.")
          }).fadeIn();
      });


      $('#gear').popover({
        title: 'Settings',
        container: 'body',
        content: function() {

          var $el = $('<div id="#settings">Show Brahmaputra &nbsp; &nbsp;</div>');

          if(BrahmaT == 0){
            $el.append('<label class="switch">' + '<input type="checkbox" id="brahma" name="BrahmaTT" onclick="BrahmaToggle()" >' + '<span>' + '</span>' + '</label>'); }

            else {
              $el.append('<label class="switch">' + '<input type="checkbox" id="brahma" name="BrahmaTT" onclick="BrahmaToggle()" checked>' + '<span>' + '</span>' + '</label>');

            }


          return $el;
        },
        placement: 'top',
        html: true
      });

      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
       $('#footercontent').text("This map is not scalable. Not optimized for mobile devices.");
}


  });

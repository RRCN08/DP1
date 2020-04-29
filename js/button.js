var BrahmaT = 1;

function BrahmaToggle() {
  // Get the checkbox
  var checkBox = document.getElementById("brahma");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
      BrahmaT = 1;
      $('.st5').fadeIn('slow', function(){
      $('.st5').attr("style", "display: inline-block;"); });
  } else {
    BrahmaT = 0;
    $('.st5').fadeOut('slow', function(){
    $('.st5').attr("style", "display: none;"); });
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

  });

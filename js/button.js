var BrahmaT = 1;

function BrahmaToggle() {
  // Get the checkbox
  var checkBox = document.getElementById("brahma");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
      BrahmaT = 1;
      $('#Brahmaputra').fadeIn('slow', function(){
      $('#Brahmaputra').attr("style", "display: inline-block;"); });
  } else {
    BrahmaT = 0;
    $('#Brahmaputra').fadeOut('slow', function(){
    $('#Brahmaputra').attr("style", "display: none;"); });
  }
}


$(document).ready(function() {



      $('#start').on('click',function(){
        $('#intro').fadeOut('slow', function(){
        $('.assam').fadeIn('slow');
        $('#intro').attr("style", "display: none;");
        });
      });

      $('#info').on('click',function(){
        $('.assam').fadeOut('slow', function(){
        $('#intro').fadeIn('slow');
        $('.assam').attr("style", "display: none;");
        });
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

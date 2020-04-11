$(document).ready(function() {

    $('#Kokrajhar').on('click',function(){
        $("#district").modal();
   });

     var icon = $('.play');
     
    icon.click(function() {
       icon.toggleClass('active');
       return false;
    });



});

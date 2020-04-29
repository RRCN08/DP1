$(document).ready(function() {

      function flushdist() {
        $(".st31").removeClass("hundred");
        $(".st31").removeClass("eighty");
        $(".st31").removeClass("sixty");
        $(".st31").removeClass("forty");
        $(".st31").removeClass("twenty");
        }

      $('#korahi').on('click',function(){
        flushdist();
        $(".btngrid").removeClass("active");
        $(this).addClass("active");
        $('#DhubriL').addClass("hundred");
        $('#KokrajharL').addClass("eighty");
        });

        $('#narzi').on('click',function(){
          flushdist();
          $(".btngrid").removeClass("active");
          $(this).addClass("active");
          $('#DhubriL').addClass("eighty");
          });

});

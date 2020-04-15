$(document).ready(function() {


      $('#Kokrajhar').on('click',function(){
        var mymodal = $('#district');
        $(".districtmap").attr("src", "./css/district/Kokrajhar.svg");
        mymodal.find('.modal-title').text('Kokrajhar');

        $(".Player1").attr("style", "display: inline-block;");
        $(".Player1").attr("id", "kokrajhar_gossaigaon");

        mymodal.modal('show');
        });


      $('#Dhubri').on('click',function(){
        var mymodal = $('#district');
        $(".districtmap").attr("src", "./css/district/Dhubri.svg");
        mymodal.find('.modal-title').text('Dhubri');

        $(".Player1").attr("style", "display: inline-block;");
        $(".Player1").attr("id", "dhubri_bilasipara");

        $(".Player2").attr("style", "display: inline-block;");
        $(".Player2").attr("id", "dhubri_chapar");

        $(".Player3").attr("style", "display: inline-block;");
        $(".Player3").attr("id", "dhubri_gauripur");

        $(".Player4").attr("style", "display: inline-block;");
        $(".Player4").attr("id", "dhubri_sapatgram");

        $(".Player5").attr("style", "display: inline-block;");
        $(".Player5").attr("id", "dhubri");

        mymodal.modal('show');
        });



});

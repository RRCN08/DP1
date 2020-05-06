$(document).ready(function() {

        var dist= $(".st21");

        function changeColor(color) {
          var n = dist.length;
        for(var i = 0; i < n; i ++) {
            dist[i].style.fill = color;
            dist[i].style.transition = "0.2s";
        } }

        function flushdist() {
          var n = dist.length;
          for(var i = 0; i < n; i ++) {
              dist[i].style.fill = "#191919";
              dist[i].style.transition = "0.2s";
          }
        }

    /*  $("#NonAssamese").mouseout(function() {
          flushdist(); $(".varietiesmap").attr("style", "display: none;");
        }); */

      $("#Standard").hover(function(){
        $(".varietiesmap").attr("src", "./css/varieties/Standard.svg");
        flushdist(); dist = $(".cls-2"); changeColor("#4a5fb8");
        $('.varietiesmap').fadeIn('fast');

        });

      $("#Kamrupiya").hover(function(){
        $(".varietiesmap").attr("src", "./css/varieties/Kamrupiya.svg");
        flushdist(); dist = $(".cls-6");  changeColor("#ff2c22");
        $('.varietiesmap').fadeIn('fast');

        });

      $("#Various").hover(function(){
        $(".varietiesmap").attr("src", "./css/varieties/Various.svg");
        flushdist(); dist = $(".cls-4");  changeColor("#54ffff");
        $('.varietiesmap').fadeIn('fast');

        });

      $("#LowerAssamese").hover(function(){
        $(".varietiesmap").attr("src", "./css/varieties/NonStandard.svg");
        flushdist(); dist = $(".cls-10");  changeColor("#fb9a99");
        $('.varietiesmap').fadeIn('fast');

        });

      $("#Nalbariya").hover(function(){
        $(".varietiesmap").attr("src", "./css/varieties/Nalbariya.svg");
        flushdist(); dist = $(".cls-7");  changeColor("#2e8900");
        $('.varietiesmap').fadeIn('fast');

        });

      $("#Darrangia").hover(function(){
        $(".varietiesmap").attr("src", "./css/varieties/Darrangia.svg");
        flushdist(); dist = $(".cls-3");  changeColor("#ff7a20");
        $('.varietiesmap').fadeIn('fast');

        });

      $("#Barpetiya").hover(function(){
        $(".varietiesmap").attr("src", "./css/varieties/Barpetiya.svg");
        flushdist(); dist = $(".cls-5");  changeColor("#fff322");
        $('.varietiesmap').fadeIn('fast');

      });

      $("#Bornogoriya").hover(function(){
        $(".varietiesmap").attr("src", "./css/varieties/Bornogoriya.svg");
        flushdist(); dist = $(".cls-9");  changeColor("#9c5edb");
        $('.varietiesmap').fadeIn('fast');

      });

      $("#Sarthebariya").hover(function(){
        $(".varietiesmap").attr("src", "./css/varieties/Sarthebariya.svg");
        flushdist(); dist = $(".cls-8");  changeColor("#9bff00");
        $('.varietiesmap').fadeIn('fast');

        });

      $("#Goalpariya").hover(function(){
        $(".varietiesmap").attr("src", "./css/varieties/Goalpariya.svg");
        flushdist(); dist = $(".cls-11");  changeColor("#ff5aef");
        $('.varietiesmap').fadeIn('fast');

        });


        /*function(){
       $('.varietiesmap').fadeOut('fast');
       changeColor("#191919");
     })*/








});

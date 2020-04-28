$(document).ready(function() {

        var dist;

        function changeColor(color) {
          var n = dist.length;

        for(var i = 0; i < n; i ++) {
            dist[i].style.fill = color;
            dist[i].style.transition = "0.2s";
        } }



      $("#Standard").hover(function(){
        $(".varietiesmap").attr("src", "./css/varieties/Standard.svg");
        dist = $(".st21"); changeColor("#4a5fb8");
        $('.varietiesmap').fadeIn('fast');

        }, function(){
        $('.varietiesmap').fadeOut('fast');
        changeColor("#191919");
        });

      $("#Kamrupiya").hover(function(){
        $(".varietiesmap").attr("src", "./css/varieties/Kamrupiya.svg");
        dist = $(".st25");  changeColor("#ff2c22");
        $('.varietiesmap').fadeIn('fast');

        }, function(){
        $('.varietiesmap').fadeOut('fast');
        changeColor("#191919");
        });

      $("#Various").hover(function(){
        $(".varietiesmap").attr("src", "./css/varieties/Various.svg");
        dist = $(".st23");  changeColor("#54ffff");
        $('.varietiesmap').fadeIn('fast');

        }, function(){
        $('.varietiesmap').fadeOut('fast');
        changeColor("#191919");
        });

      $("#NonStandard").hover(function(){
        $(".varietiesmap").attr("src", "./css/varieties/NonStandard.svg");
        dist = $(".st29");  changeColor("#fb9a99");
        $('.varietiesmap').fadeIn('fast');

        }, function(){
        $('.varietiesmap').fadeOut('fast');
        changeColor("#191919");
        });

      $("#Nalbariya").hover(function(){
        $(".varietiesmap").attr("src", "./css/varieties/Nalbariya.svg");
        dist = $(".st26");  changeColor("#2e8900");
        $('.varietiesmap').fadeIn('fast');

        }, function(){
        $('.varietiesmap').fadeOut('fast');
        changeColor("#191919");
        });

      $("#Darrangia").hover(function(){
        $(".varietiesmap").attr("src", "./css/varieties/Darrangia.svg");
        dist = $(".st22");  changeColor("#ff7a20");
        $('.varietiesmap').fadeIn('fast');

        }, function(){
        $('.varietiesmap').fadeOut('fast');
        changeColor("#191919");
        });

      $("#Barpetiya").hover(function(){
        $(".varietiesmap").attr("src", "./css/varieties/Barpetiya.svg");
        dist = $(".st24");  changeColor("#fff322");
        $('.varietiesmap').fadeIn('fast');

        }, function(){
        $('.varietiesmap').fadeOut('fast');
        changeColor("#191919");
        });

      $("#Bornogoriya").hover(function(){
        $(".varietiesmap").attr("src", "./css/varieties/Bornogoriya.svg");
        dist = $(".st28");  changeColor("#9c5edb");
        $('.varietiesmap').fadeIn('fast');

        }, function(){
        $('.varietiesmap').fadeOut('fast');
        changeColor("#191919");
        });

      $("#Sarthebariya").hover(function(){
        $(".varietiesmap").attr("src", "./css/varieties/Sarthebariya.svg");
        dist = $(".st27");  changeColor("#9bff00");
        $('.varietiesmap').fadeIn('fast');

        }, function(){
        $('.varietiesmap').fadeOut('fast');
        changeColor("#191919");
        });

      $("#Goalpariya").hover(function(){
        $(".varietiesmap").attr("src", "./css/varieties/Goalpariya.svg");
        dist = $(".st30");  changeColor("#ff5aef");
        $('.varietiesmap').fadeIn('fast');

        }, function(){
        $('.varietiesmap').fadeOut('fast');
        changeColor("#191919");
        });











});

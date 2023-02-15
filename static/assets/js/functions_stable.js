


function createCookie(name, value, hours) {
var expires;

if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
} else {
    expires = "";
}
document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}
function clickHome(item){
  if (item && item != ""){
    if ($('#home_main_btn').attr('href').indexOf('../') > -1){
      window.location.href='../' + item;
    }else{
      window.location.href=item;
    }
  }else{
    window.location.href=$('#home_main_btn').attr('href');
  }

}
function readCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0)
            return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}


function sethotelier_booking(){
  setTimeout(function () {
      $('body').addClass('navPanel-visible-reverse');
      try {
        $('#promo_div').remove();
      } catch (e) {

      } finally {

      }
      setTimeout(function () {
        $('body.navPanel-visible-reverse').find('.lukslofts-content').unbind("click").click(function(){
          // $('#booknow_div').fadeOut("fast");
          $('body').removeClass('navPanel-visible-reverse');
        });
      }, 10);
  }, 0);
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

var temp  = "";
var img  = "";
temp  = readCookie("temp");
img  = readCookie("img");

var callbackFunction = function(data) {
  // console.log(data);
  var a = "<div>" + data.query.results.channel.item.description.replace('<![CDATA[','').replace(']]>','') + "</div>";
  var code = data.query.results.channel.item.condition.code;
  var weather = data.query.results.channel.item.condition.text.toLowerCase();
  // console.log(weather);
 if (code == 0) {img = "wi wi-yahoo-0";}
 if (code == 1) {img = "wi wi-yahoo-1";}
 if (code == 2) {img = "wi wi-yahoo-2";}
 if (code == 3) {img = "wi wi-yahoo-3";}
 if (code == 4) {img = "wi wi-yahoo-4";}
 if (code == 5) {img = "wi wi-yahoo-5";}
 if (code == 6) {img = "wi wi-yahoo-6";}
 if (code == 7) {img = "wi wi-yahoo-7";}
 if (code == 8) {img = "wi wi-yahoo-8";}
 if (code == 9) {img = "wi wi-yahoo-9";}
 if (code == 10) {img = "wi wi-yahoo-10";}
 if (code == 11) {img = "wi wi-yahoo-11";}
 if (code == 12) {img = "wi wi-yahoo-12";}
 if (code == 13) {img = "wi wi-yahoo-13";}
 if (code == 14) {img = "wi wi-yahoo-14";}
 if (code == 15) {img = "wi wi-yahoo-15";}
 if (code == 16) {img = "wi wi-yahoo-16";}
 if (code == 17) {img = "wi wi-yahoo-17";}
 if (code == 18) {img = "wi wi-yahoo-18";}
 if (code == 19) {img = "wi wi-yahoo-19";}
 if (code == 20) {img = "wi wi-yahoo-20";}
 if (code == 21) {img = "wi wi-yahoo-21";}
 if (code == 22) {img = "wi wi-yahoo-22";}
 if (code == 23) {img = "wi wi-yahoo-23";}
 if (code == 24) {img = "wi wi-yahoo-24";}
 if (code == 25) {img = "wi wi-yahoo-25";}
 if (code == 26) {img = "wi wi-yahoo-26";}
 if (code == 27) {img = "wi wi-yahoo-27";}
 if (code == 28) {img = "wi wi-yahoo-28";}
 if (code == 29) {img = "wi wi-yahoo-29";}
 if (code == 30) {img = "wi wi-yahoo-30";}
 if (code == 31) {img = "wi wi-yahoo-31";}
 if (code == 32) {img = "wi wi-yahoo-32";}
 if (code == 33) {img = "wi wi-yahoo-33";}
 if (code == 34) {img = "wi wi-yahoo-34";}
 if (code == 35) {img = "wi wi-yahoo-35";}
 if (code == 36) {img = "wi wi-yahoo-36";}
 if (code == 37) {img = "wi wi-yahoo-37";}
 if (code == 38) {img = "wi wi-yahoo-38";}
 if (code == 39) {img = "wi wi-yahoo-39";}
 if (code == 40) {img = "wi wi-yahoo-40";}
 if (code == 41) {img = "wi wi-yahoo-41";}
 if (code == 42) {img = "wi wi-yahoo-42";}
 if (code == 43) {img = "wi wi-yahoo-43";}
 if (code == 44) {img = "wi wi-yahoo-44";}
 if (code == 45) {img = "wi wi-yahoo-45";}
 if (code == 46) {img = "wi wi-yahoo-46";}
 if (code == 47) {img = "wi wi-yahoo-47";}
 if (code == 3200) {img = "wi wi-yahoo-3200";}
  // console.log(weather);
  // img = $(a).find('img').attr('src');
  temp = data.query.results.channel.item.condition.temp;

  eraseCookie("temp");
  createCookie("temp", temp, 1);
  eraseCookie("img");
  createCookie("img", img, 1);

  $('#temperature_val').text(temp);
  $('#current_weather_ico').attr('class',img).css('color','#333');
};


// eraseCookie("temp");
// eraseCookie("img");
function getWeather(){
    if ($('#loader_weather') && $('#loader_weather').length > 0){

    }else{
      $('body').append('<div id="loader_weather" class="hidden"></div>');
      // $('body').append('<div id="loader_weather2" class="hidden"></div>');
        try {
          $('#loader_weather').html('<script src="https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text=\'batangas city, ph\') and u=\'c\' limit 1&format=json&callback=callbackFunction"></script>');

          } catch (e) {

          } finally {

          }
    }


   }

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
function updateClock()
   {
       var currentTime = new Date ( );
       var currentHours = currentTime.getHours ( );
       var currentMinutes = currentTime.getMinutes ( );
       var currentSeconds = currentTime.getSeconds ( );
       var currentDay = currentTime.getDay ( );
       var currentDate = currentTime.getDate ( );
       var currentMonth = currentTime.getMonth ( );
       var currentYear = currentTime.getFullYear ( );


       var ampm = currentHours >= 12 ? ' PM' : ' AM';
       currentHours = currentHours % 12;
       currentHours = currentHours ? currentHours : 12; // the hour '0' should be '12'
       currentMinutes = currentMinutes < 10 ? '0'+currentMinutes : currentMinutes;
       var currentTimeString = currentHours + ':' + currentMinutes + '' + ampm;

       var currentDateString ="<br />" + months[currentMonth] + " " +currentDate+ " " +currentYear;

       $(".timer").html(currentTimeString);
       $(".datestring").attr('style','color:#333 !important;').html(currentDateString).css('font-size','0.9em');


    }



function getCookie(c_name)
{
if (document.cookie.length > 0)
{
    c_start = document.cookie.indexOf(c_name + "=");
    if (c_start != -1)
    {
        c_start = c_start + c_name.length + 1;
        c_end = document.cookie.indexOf(";", c_start);
        if (c_end == -1) c_end = document.cookie.length;
        return unescape(document.cookie.substring(c_start,c_end));
    }
}
return "";
}

$(function () {
$.ajaxSetup({
    headers: { "X-CSRFToken": getCookie("csrftoken") }
});
});




function showLoading(background){

}
$('body').removeClass('overflow_hidden');
$('#loader-wrapper').hide();

function sethotelierwithdate(id){
  if ($('#select_rate').val() != "https://apac.littlehotelier.com/reservations/lukslofthoteldirect/"){
    window.open(
      $('#select_rate').val(),'blank_'
    );
  }
}




try {
  $.ajax({
      method: 'get',
      url: $('#home_main_btn').attr('href').indexOf('../') > -1 ? "../xml/rates.json" : "xml/rates.json",
      success: function (data) {
        $('body').append('<div id="booknow_div" class="" align="right" style="display:block;position:fixed;top:0px;right:0px;width:'+$('#navPanel').width()+'px !important;border-radius:0px;position:fixed;background:#333;padding:0px;z-index:99999;font-size:0.8em;"></div>');


        var $toggle_cont = $('<div style="padding:20px;background:#fff;width:100%;text-align:left;height:'+(window.screen.height * 0.9)+'px !important;max-height:'+(window.screen.height * 0.9)+'px !important;overflow-y:auto;" class="reserve_toggle"></div>');
        $toggle_cont.append('<br class="hide-small"/><br class="hide-small"/><br /><p id="booknow_div_hide"><span class="pull-left pointer"><i class="fa fa-angle-left"></i> BACK</span></p>');
        var $select_rate = $("<br /><form style='padding-left:10px;margin-bottom:0px !important;'><select style='border-radius:0px;opacity:0.87;display:block;cursor:pointer;background:#fff !important;width:90%;' class='form-control dining_services_font' id='select_rate'></select> </form>");
        var rates = data.properties.property.rateplans.rateplan;
        if (rates && rates.length > 0){
          $select_rate.find('select').append("<option style='font-weight:normal;padding:5px;width:100%;' value='https://apac.littlehotelier.com/reservations/lukslofthoteldirect/' >&nbsp;&nbsp;Select Package&nbsp;</option>");
          for (var i = 0; i < rates.length; i++) {
            $select_rate.find('select').append("<option style='font-weight:normal;padding:5px;' value='https://apac.littlehotelier.com/reservations/lukslofthoteldirect/" +rates[i].id.text + "' >&nbsp;&#9989;&nbsp;" + rates[i].name +"&nbsp;</option>");
          }
        }
        $toggle_cont.append($select_rate);
        $toggle_cont.append('<a onclick="sethotelierwithdate(this)" data-id="" class="btn btn-danger" style="border-radius:0px;background:#333;font-size:0.8em;font-weight:normal;width:87%;margin-left:10px;padding:10px;margin-top:-5px;">View Selected Package!</a>');
        $toggle_cont.append('<br />')
        $toggle_cont.append('<a onclick="sethotelier()" class="btn btn-danger" style="border-radius:0px;background:#333;font-size:0.8em;font-weight:normal;padding:10px;width:87%;margin-left:10px;margin-bottom:10px;">Check Rates and Offers!</a><br />');
        $toggle_cont.append('<h5 style="font-size:0.8em;color:#e31d28 !important;font-weight:normal;padding:15px;text-align:left;padding-left:0px;margin-top:0px;padding:0px;"> </h5>');
        $toggle_cont.append('<div class="container"><div class="col-md-12" style="color:#fff;"><br /><br /><span style="font-size:1em !important;color:#333 !important;">Local Weather</span><br><span style="color:#333 !important;font-size:1.3em;font-weight:bold;" id="temperature_val"></span><span style="color:#333 !important;font-size:1.3em;font-weight:bold;" class="degc">&degC</span> <i style="font-size:1.3em;font-weight:bold;" id="current_weather_ico" > </i><br><span class="smalleraddress">Batangas City Philippines</span></div></div>');
        $toggle_cont.append('<div class="container"><div class="col-md-12" style="color:#fff;"><br /><br /><span style="font-size:1em !important;color:#333 !important;">Time/Date</span><br><span style="margin:0px;padding:0px !important;color:#333 !important;font-size:1.3em;font-weight:bold;" class="timer"></span><span style="color:#333 !important;" class="datestring"></span></div></div>');
        $toggle_cont.append('<br />');
        $toggle_cont.append('<br />');
        $toggle_cont.append('<br />');
        // $toggle_cont.append('<br />');

        $('#booknow_div').append($toggle_cont);

        $(".smalleraddress").attr('style','color:#333 !important;').css('font-size','0.8em');

              //  $(document).ready(function()
              //  {
                     updateClock();
                      getWeather();

          $('#booknow_div_hide').click(function(){
            $('body').removeClass('navPanel-visible-reverse');
          });
      }
  });
} catch (e) {

} finally {

}
function openpage(url_page){
  window.open(
    url_page,'blank_'
  );
}



  if (window.location.hash == "#promo"){
          window.location.href=$('#home_main_btn').attr('href').indexOf('../') > -1 ? "../promo" : "promo";
  }

  if (window.location.hash == "#honeymoon"){
          window.location.href=$('#home_main_btn').attr('href').indexOf('../') > -1 ? "../accommodation/honeymoon.html" : "accommodation/honeymoon.html";
  }
  if (window.location.hash == "#contact"){
          window.location.href=$('#home_main_btn').attr('href').indexOf('../') > -1 ? "../contact" : "contact";
  }

function close_promo_div(){
  $('#promo_div').hide();
}

function slide_midd(){
    $('html, #page-wrapper').animate({
          scrollTop: $('#header-wrapper').height() - 50
      }, 200);
}




  var footer_div = $('.footer_div').clone();
  $('.footer_div').remove();
  footer_div.appendTo('#page-wrapper');
  // console.log($('#highlights').find('h1'));
  if ($('#highlights').find('h1') && $('#highlights').find('h1').length > 0){
    if (Modernizr.mq('(max-width: 768px)'))
    {
      $('#header_hover').append('<div id="slide_middiv" style="z-index:999;cursor:pointer;position:absolute;bottom:18px;width:100%;" onclick="slide_midd();" ><span style="position:absolute;bottom:38px;left:10px;color:#fff !important;width:100%;text-shadow:none !important;">'+$('#highlights').find('h1').html()+'</span><br /><span  class="" style="z-index:999;cursor:pointer;position:absolute;bottom:18px;color:#fff !important;width:20px;height:20px;border-left:1px solid #fff;border-bottom:1px solid #fff;transform:rotate(-45deg);"></span></div>');
      $('#slide_middiv').find('span:nth-child(2)').attr('style','color:#FFF !important');
      setTimeout(function () {
        $('#highlights h1').remove();
        $('#highlights .elegant-line-decor').remove();
      }, 10);
    }else{
      $('#header_hover').append('<div id="slide_middiv" style="z-index:999;cursor:pointer;position:absolute;bottom:18px;width:100%;" onclick="slide_midd();" ><span style="position:absolute;bottom:38px;left:10px;color:#fff !important;width:100%;text-shadow:none !important;">Experience<br />Luxury in Luks Lofts</span><br /><span  class="" style="z-index:999;cursor:pointer;position:absolute;bottom:18px;color:#fff !important;width:20px;height:20px;border-left:1px solid #fff;border-bottom:1px solid #fff;transform:rotate(-45deg);"></span></div>');
    }
  }else{
    $('#header_hover').append('<div id="slide_middiv" style="z-index:999;cursor:pointer;position:absolute;bottom:18px;width:100%;" onclick="slide_midd();" ><span style="position:absolute;bottom:38px;left:10px;color:#fff !important;width:100%;text-shadow:none !important;">Experience<br />Luxury in Luks Lofts</span><br /><span  class="" style="z-index:999;cursor:pointer;position:absolute;bottom:18px;color:#fff !important;width:20px;height:20px;border-left:1px solid #fff;border-bottom:1px solid #fff;transform:rotate(-45deg);"></span></div>');
  }

  if (Modernizr.mq('(min-width: 768px)'))
  {
  $('body').append('<style>body{height:'+($(window).height())+'px !important;max-height:'+($(window).height()) +'px !important;overflow-y:hidden !important;overflow-x:hidden !important;}</style>');
  $('body').append('<style>body.navPanel-visible #page-wrapper{max-height:'+($(window).height())+'px !important;height:'+($(window).height())+'px !important;overflow-y:scroll !important;overflow-x:hidden !important;}</style>');
  $('body').append('<style>body.navPanel-visible-reverse #page-wrapper{max-height:'+($(window).height())+'px !important;height:'+($(window).height())+'px !important;overflow-y:scroll !important;overflow-x:hidden !important;}</style>');
  $('body').append('<style>body #page-wrapper{height:'+($(window).height())+'px !important;max-height:'+($(window).height())+'px !important;overflow-y:scroll !important;overflow-x:hidden;}</style>');
}else{
  $('body').append('<style>body{height:'+(window.screen.height * 0.9)+'px !important;max-height:'+(window.screen.height * 0.9) +'px !important;overflow-y:hidden !important;overflow-x:hidden !important;}</style>');
  $('body').append('<style>body.navPanel-visible #page-wrapper{max-height:'+(window.screen.height * 0.9)+'px !important;height:'+(window.screen.height * 0.9)+'px !important;overflow-y:scroll !important;overflow-x:hidden !important;}</style>');
  $('body').append('<style>body.navPanel-visible-reverse #page-wrapper{max-height:'+(window.screen.height * 0.9)+'px !important;height:'+(window.screen.height * 0.9)+'px !important;overflow-y:scroll !important;overflow-x:hidden !important;}</style>');
  $('body').append('<style>body #page-wrapper{height:'+(window.screen.height * 0.9)+'px !important;max-height:'+(window.screen.height * 0.9)+'px !important;overflow-y:scroll !important;overflow-x:hidden;}</style>');
}

  $('body').append('<div id="static_style" style="display:none;"></div>');
  var cats_nav = $('#navPanel').find('a');
  $('#header_hover').attr('style','padding:0px;margin:0px;background:transparent !important;background-size:100% 150% !important;background-repeat:no-repeat !important;overflow:hidden;background-position:center center !important;');
    $('#page-wrapper').append('<div class="top_icon" style="z-index:10000 !important;position:fixed;top:10px;right:20px;cursor:pointer;font-size:1.4em;">&nbsp;<a style="color:#fff !important;" href="tel:+63433021000" ><img src="'+($('#home_main_btn').attr('href').indexOf('../') > -1 ? "../2018/icons/top/phone.png" : "2018/icons/top/phone.png")+'" style="height:1em;" /></a>&nbsp;&nbsp;<a  style="color:#fff !important;" onclick="clickHome(\'about/location.html\');"><img src="'+($('#home_main_btn').attr('href').indexOf('../') > -1 ? "../2018/icons/top/marker.png" : "2018/icons/top/marker.png")+'" style="height:1em;" /></a>&nbsp;&nbsp;<a style="color:#fff !important;" onclick="clickHome(\'contact\');"><img src="'+($('#home_main_btn').attr('href').indexOf('../') > -1 ? "../2018/icons/top/envelope.png" : "2018/icons/top/envelope.png")+'" style="height:1em;"></a><i class="hide-small"></i></div>');
  if (Modernizr.mq('(min-width: 768px)'))
  {
     $('#page-wrapper').append('<span id="scollbg"  style="z-index:997;position:fixed;top:0px;left:0px;width:98.8%;height:50px;background:#FFF ;"></span>');
   }else{
      $('#page-wrapper').append('<span id="scollbg"  style="z-index:997;position:fixed;top:0px;left:0px;width:100%;height:50px;background:#FFF ;"></span>');
   }
   $('#scollbg').css('opacity',0);
   if ($('body.no-book') && $('body.no-book').length > 0){
     $('#addedlogo').removeClass('hidden');
     $('#scollbg').css('opacity',1);
     $('.top_icon img').css('filter','brightness(20%)').css('-webkit-filter','brightness(20%)').css('-moz-filter','brightness(20%)').css('-ms-filter','brightness(20%)').css('-o-filter','brightness(20%)');

 }else{
   $('#page-wrapper').scroll(function(){
     if ($(this).scrollTop() > 10){
       $('#addedlogo').removeClass('hidden');
       $('#scollbg').css('opacity',1);
       $('.top_icon img').css('filter','brightness(20%)').css('-webkit-filter','brightness(20%)').css('-moz-filter','brightness(20%)').css('-ms-filter','brightness(20%)').css('-o-filter','brightness(20%)');
     }else{
       $('#addedlogo').addClass('hidden');
       $('#scollbg').css('opacity',0);
       $('.top_icon img').css('filter','brightness(100%)').css('-webkit-filter','brightness(100%)').css('-moz-filter','brightness(100%)').css('-ms-filter','brightness(100%)').css('-o-filter','brightness(100%)');
     }
   });
 }
  $('.style1').removeClass('style1');
  $('.style11').removeClass('style11');
  $('.style3').removeClass('style3');
  $('.modal_container').removeClass('modal_container');
  $('#footer_details_map br:first-child').remove();
  $('#footer_details_map br:first-child').remove();


  $('#titleBar a[href="#navPanel"]').html("menu");
if (Modernizr.mq('(min-width: 768px)'))
{

  if ($('body.no-book') && $('body.no-book').length > 0){
    $('#page-wrapper').append('<img onclick="clickHome();" id="addedlogo" class="" src="'+($('#home_main_btn').attr('href').indexOf('../') > -1 ? "../images/top-logo2.png" : "images/top-logo2.png")+'" style="height:48px;width:auto;position:fixed;left:36%;margin-top:4px;z-index:999990;" />');
  }else{
    $('#page-wrapper').append('<img onclick="clickHome();" id="addedlogo" class="hidden" src="'+($('#home_main_btn').attr('href').indexOf('../') > -1 ? "../images/top-logo2.png" : "images/top-logo2.png")+'" style="height:48px;width:auto;position:fixed;left:36%;margin-top:4px;z-index:999990;" />');
  }


  $('#header-wrapper .col-md-7').attr("style","min-height:"+($(window).width() * 0.758)+"px !important;height:"+($(window).width() * 0.758)+"px !important;");
  $('#header_carousel').attr("style","min-height:"+($(window).width() * 0.758)+"px !important;height:"+($(window).width() * 0.758)+"px !important;position:absolute !important;top:0px;left:0px;");
  // $('#header_carousel').attr("style","overflow:hidden !important;position:absolute;top:0px;left:0px;min-height:"+((window.screen.height * 0.9))+"px !important;height:"+((window.screen.height * 0.9))+"px !important;max-height:"+((window.screen.height * 0.9))+"px !important;");
  try {

    $('video').attr('style',$('video').attr('style') +'width:100% !important;');
  } catch (e) {

  } finally {

  }
  $('#scollbg').css('height','60px');
  $('.top_icon img').css('height','1.2em').css('margin-right','20px');
  if (Modernizr.mq('(max-width: 1400px)'))
  {
    $('#logo h2').attr('style',$('#logo h2').attr('style') + 'text-align:left !important;margin-top:10%;text-transform:none !important;');
    // $('#logo p').attr('style',$('#logo p').attr('style') + 'text-transform:capitalize !important;');
    $('#logo h2 a').attr('style',$('#logo h2 a').attr('style') + 'text-align:left !important;font-style:italic;font-family:Times New Roman !important;font-size:0.9em !important;');
    $('#logo img').attr('style',$('#logo img').attr('style') + 'width:40% !important;margin-top:8%;margin-left:20%;');
  }else{
    $('#logo h2').attr('style',$('#logo h2').attr('style') + 'text-align:left !important;margin-top:0%;');
    $('#logo h2 a').attr('style',$('#logo h2 a').attr('style') + 'text-align:left !important;font-style:italic;font-family:Times New Roman !important;font-size:0.9em !important;');
    $('#logo img').attr('style',$('#logo img').attr('style') + 'width:40% !important;margin-top:5%;margin-left:20%;');
  }
 $('#logo').css('top',(($('#header-wrapper').height() - $('#logo').height()) - 150));
 if ($('body.no-book') && $('body.no-book').length > 0){}else{
   $('#header-wrapper').append('<img onclick="clickHome();" id="centr_logo" class="filter_white pointer" src="'+($('#home_main_btn').attr('href').indexOf('../') > -1 ? "../2018/icons/logo-thin.png" : "2018/icons/logo-thin.png")+'"  />');
 }
  var interval_chat = setInterval(function () {
      $('.purechat-widget-title-link').attr('style','font-family:cinzel !important;');
      if ($('.purechat-widget-title-link').attr('style') == "font-family:cinzel !important;"){
        clearInterval(interval_chat);
      }
  }, 300);


  var parents = $('#nav ul').find('ul');

  for (var i = 0; i < parents.length; i++) {
    $(parents[i]).hover(function(){
      $($(this).parent().find('a')[0]).addClass('active');
    },
    function(){
      $($(this).parent().find('a')[0]).removeClass('active');
    }
  );
  }
  $('#header-wrapper').attr('style','overflow: hidden; margin:0px 0px 0px 0px !important; padding: 0px; z-index: 0;width:100%;left:0px !important;');
  $('body').append("<script type='text/javascript' data-cfasync='true'>window.purechatApi = { l: [], t: [], on: function () { this.l.push(arguments); } }; (function () { var done = false; var script = document.createElement('script'); script.async = true; script.type = 'text/javascript'; script.src = 'https://app.purechat.com/VisitorWidget/WidgetScript'; document.getElementsByTagName('HEAD').item(0).appendChild(script); script.onreadystatechange = script.onload = function (e) { if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) { var w = new PCWidget({c: '12d9f278-62b7-4c5e-9c11-61942dea28bc', f: true }); done = true; } }; })();</script>");
// });
}else{
  // $(document).ready(function(){
    if ($('body.no-book') && $('body.no-book').length > 0){
      $('#page-wrapper').append('<img onclick="clickHome();" id="addedlogo" class="" src="'+($('#home_main_btn').attr('href').indexOf('../') > -1 ? "../images/top-logo2.png" : "images/top-logo2.png")+'" style="width:auto;height:46px;position:fixed;left:36%;margin-top:2px;z-index:999999;" />');
    }else{
      $('#page-wrapper').append('<img onclick="clickHome();" id="addedlogo" class="hidden" src="'+($('#home_main_btn').attr('href').indexOf('../') > -1 ? "../images/top-logo2.png" : "images/top-logo2.png")+'" style="width:auto;height:46px;position:fixed;left:36%;margin-top:2px;z-index:999999;" />');
    }
    $('.triangle_bg_top').remove();
    try {
      $('p[style="width:110%;"]').attr('style','width:100% !important;');
      $('p[style="width:110%;text-align:justify;letter-spacing:1px;"]').attr('style','width:100% !important;');
    } catch (e) {

    } finally {

    }






    $('#nav a.link').attr('style','color:#FFF !important;');
    $('.top_padd_sm').css('padding-top','20px');
    if (Modernizr.mq('(max-width: 580px)')){
      $('#header-wrapper .col-md-7').attr("style","min-height:"+($(window).width() * 0.758)+"px !important;height:"+($(window).width() * 0.758)+"px !important;max-height:"+($(window).width() * 0.758)+"px !important;");
      $('#header_carousel').attr("style","min-height:"+($(window).width() * 0.758)+"px !important;height:"+($(window).width() * 0.758)+"px !important;max-height:"+($(window).width() * 0.758)+"px !important;position:absolute !important;top:0px;left:0px;");

    }else{
      $('#header-wrapper .col-md-7').attr("style","min-height:"+($(window).width() * 0.758)+"px !important;height:"+($(window).width() * 0.758)+"px !important;max-height:"+($(window).width() * 0.758)+"px !important;");
      $('#header_carousel').attr("style","min-height:"+($(window).width() * 0.758)+"px !important;height:"+($(window).width() * 0.758)+"px !important;max-height:"+($(window).width() * 0.758)+"px !important;position:absolute !important;top:0px;left:0px;");
    }

    $('nav a.link').attr('style','color:#fff !important;font-family:arial !important;');
    var top_slogan = $('#highlights h1').clone();
    $('#highlights h1').css('font-size','0.8em');

    $('.hidden-small').hide();
    $('.hide-small').hide();
    $('#header #logo p').remove();
    $('#header #logo img').attr('style','width:0.5em;');
    $('#dining_nav_container').css('height','80px');
    var logo_text = $('#header #logo h2 a').html();



    if (Modernizr.mq('(max-width: 580px)')){

        $('#header #logo h2 a').html('<img onclick="clickHome();" id="luks_logo_sm" class="filter_white pointer" src="'+($('#home_main_btn').attr('href').indexOf('../') > -1 ? "../2018/icons/logo-thin.png" : "2018/icons/logo-thin.png")+'" style="top:90px !important;width:30% !important;height:auto;" /><p style="color:#fff !important;margin-top:0%;font-size:0.5em;width:100%;text-align:center !important;left:0px !important;top:0px !important;font-family:Times New Roman !important;">'+logo_text+'</p>');
        $('#header #logo h2 a').attr('style','font-family:Times New Roman !important;font-style:italic;font-size:1.5em !important;line-height:1.3em;margin-top:-2% !important;text-shadow:0px 2px 15px #555555  !important;opacity:1;text-align:center !important;width:100% !important;left:0px !important;');

    }else{

      $('#header #logo h2 a').html('<img onclick="clickHome();" id="luks_logo_sm" class="filter_white pointer" src="'+($('#home_main_btn').attr('href').indexOf('../') > -1 ? "../2018/icons/logo-thin.png" : "2018/icons/logo-thin.png")+'" style="top:90px !important;width:16% !important;height:auto;" /><p style="color:#fff !important;margin-top:0%;font-size:0.4em;width:100%;text-align:center !important;left:0px !important;top:0px !important;font-family:Times New Roman !important;">'+logo_text+'</p>');
      $('#header #logo h2 a').attr('style','font-family:Times New Roman !important;font-style:italic;font-size:1em !important;line-height:0.6em;margin-top:0% !important;text-shadow:0px 2px 15px #555555  !important;opacity:1;text-align:center !important;padding:0px !important;width:100% !important;left:0px !important;');
    }

    var logo_logo = $('#logo #luks_logo_sm').clone().attr('id','luks_logo');
    $('#logo #luks_logo_sm').remove();
    $('#header-wrapper').append(logo_logo);

    $('#luks_logo').css('z-index','99999');
}


function scrollto(section){
  $('html, body').animate({
        scrollTop: $("#"+section+"-section").offset().top
    }, 100);
}
function scrollto_elem(section){
  $('html, body').animate({
        scrollTop: $(section).offset().top
    }, 100);
}



function to_top(){
  $('html, body').animate({
        scrollTop: $("body").offset().top
    }, 200);
}



$('#page-wrapper').focus();

$(document).ready(function(){
  if ($('body.no-book') && $('body.no-book').length > 0){
    $('#header-wrapper').remove();
  }
});

function sethotelier(){
    var location = "https://apac.littlehotelier.com/properties/lukslofthoteldirect";
    window.open(location);
}


function hovering_change(){
    $(".hover_swap_img").hover(function (e) {
      if ($(this).attr("src").indexOf("collage.png") >= 0){
        $(this).attr("src", $(this).attr("src").replace("collage.png", "collage_hvr.png"));
      }
    },
    function (e) {
      if ($(this).attr("src").indexOf("collage_hvr.png") >= 0){
        $(this).attr("src", $(this).attr("src").replace("collage_hvr.png", "collage.png"));
      }
    });
}

function travel_agency(){
  window.location = "https://lukslofts.com/lukslofts_review.html";
}


function click_caller(){
    $('#call_us').click();
    console.log('call_initialized');

}

function open_dialog_fb(text){
  window.open("https://www.facebook.com/sharer/sharer.php?u="+text+"&", "Luks Lofts Luxury Hotel", "location,status,scrollbars,resizable,width=300, height=300");
}
function open_dialog_twitter(text){
  window.open("https://twitter.com/home?status="+encodeURIComponent(text), "Luks Lofts Luxury Hotel", "location,status,scrollbars,resizable,width=500, height=500");
}

$(document).ready(function(){
  function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  var page = $('body').attr('data-page');
  var translation = getParameterByName('translation');
  if (translation && translation != "" && page && page != ""){
    try {
      $.ajax({
          method: 'get',
          url: $('#home_main_btn').attr('href').indexOf('../') > -1 ? "../translations/"+translation+".json?id=2" : "translations/"+translation+".json?id=2",
          success: function (data) {
            var page_values = data[page];
            var page_trans = $('body').find('.translate');
            if (page_trans && page_trans.length > 0){
              for (var i = 0; i < page_trans.length; i++) {
                if (page_values[i+'-translate'] && page_values[i+'-translate'] != ""){
                    $(page_trans[i]).text(page_values[i+'-translate']);
                }
              }
            }
            var nav_values = data["nav"];
            var nav_trans = $('#navPanel').find('.data-trans-word');
            if (nav_trans && nav_trans.length > 0){
              for (var i = 0; i < nav_trans.length; i++) {
                if (nav_values[$(nav_trans[i]).attr('data-trans-word')] && nav_values[$(nav_trans[i]).attr('data-trans-word')] != ""){
                    $(nav_trans[i]).text(nav_values[$(nav_trans[i]).attr('data-trans-word')]);
                }
              }
            }

            var left_values = data["left-side"];
            var left_trans = $('.left-side').find('.data-trans-word');
            if (left_trans && left_trans.length > 0){
              for (var i = 0; i < left_trans.length; i++) {
                if (left_values[$(left_trans[i]).attr('data-trans-word')] && left_values[$(left_trans[i]).attr('data-trans-word')] != ""){
                    $(left_trans[i]).text(left_values[$(left_trans[i]).attr('data-trans-word')]);
                }
              }
            }
          }
      });
    } catch (e) {

    } finally {

    }
  }
});

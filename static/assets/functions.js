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


var version = "2.0";

function showLoading(background){
  // if (background == ""){
  //   background = '#FFF url("assets/css/images/overlay.png")';
  // }
  // $('#loader-wrapper').css('background',background);
  // $('#loader-wrapper').fadeIn();
  // $('body').addClass('overflow_hidden');
}
function hideLoading(duration){
  setTimeout(function(){
    $('#loader-wrapper').fadeOut();
    $('body').removeClass('overflow_hidden');
  }, duration);
}

function show_page(me){
  window.location.hash = "#modal-" + $(me).attr("data-trigger");
  $('body').addClass('modal-open');
showLoading('');
    $('#modal_content').html("");
  $('#modal_content').load('pages/' + $(me).data("trigger") + '.html?version='+version);
  $('#page-modal').modal('show');

  hideLoading(0);

  if (window.location.hash == "#modal-undefined"){
    close_page();
    window.location.hash = "#home";
  }
    handleModalVideo($(me).attr("data-trigger"));

  // $('.ry')

}



function close_page(){
  showLoading('');
  // console.log($('#modal_content'));
    $('#modal_content').load('pages/empty.html');
    $('#page-modal').modal('hide');
    $('body').removeClass('modal-open');
    hideLoading(0);

}


function change_logo(page,title,fontstyle,caption){
  var logo_content = "";
  if (page == ''){
      // logo_content += "  <h1>";
      // logo_content += "  <a style='";
      // logo_content += "  text-decoration:none;";
      // logo_content += "  color:#FFF;'";
      // logo_content += "  >LuksLofts</a>";
      // logo_content += "  </h1>";
      logo_content += "  <br />";
      logo_content += "  <h2 style='text-shadow:1px 1px 15px rgba(0,0,0,0.9) !important;' class='dynamichomeheader dining_services_font' >Luxurious and Contemporary Lifestyle</h2>";
    }else{
      logo_content += "  <h1 >";
      logo_content += "  <a class='"+fontstyle+"' style='";
      logo_content += "  text-decoration:none;";
      logo_content += "  color:#fff;'";
      logo_content += "  >"+title+"</a>";
      logo_content += "  </h1>";
      logo_content += "  <p style='color:#fff;'  >"+caption+"</p>";
    }
$('#logo').html(logo_content);
}


function onHashChange() {
  if (window.location.hash != "") {
      if (window.location.hash.startsWith("#modal-")) {
        var tag = $("[data-trigger=\"" + window.location.hash.split("#modal-")[1] + "\"]");
        show_page(tag[0]);
      } else {
        $("#page-modal").modal('hide');
        var tag = $("[data-trigger=\"" + window.location.hash.split("#")[1] + "\"]");
        redirect_main(tag[0]);
        // handleVideo($(tag[0]).data('trigger'));
        // console.log($(tag[0]).data('trigger'));

      }
  }
}

window.onhashchange = onHashChange;

function change_header_design(){
  //
  // if (Modernizr.mq('(min-width: 200px)') && Modernizr.mq('(max-width: 700px)')) {
  // $('#header').css('height','-=100px').css('padding','10px');
  // } else if (Modernizr.mq('(min-width: 701px)') && Modernizr.mq('(max-width: 1000px)')){
  // // $('#header').css('height','-=100px').css('padding','');
  // }else {
  // // $('#header').css('height','-=160px').css('padding','');
  // }
}


function redirect_main(me){
  $('#bgvid').addClass('hidden');
  // handleVideo($(me).data('trigger'));
to_top();
  // console.log($(me).attr("data-trigger"));
  window.location.hash = "#" + $(me).attr("data-trigger");
  $('#header').css('height','600px').css('padding','');


  showLoading('');
 // if loft hide #bgvid #header
  var page = $(me).data("trigger");
  if (page == 'home' || page == ""){
    $('#hotel_features-section').removeClass('hidden');

  }else{
    $('#hotel_features-section').addClass('hidden');
  }
  var site = page + '.html';
  if (site !== 'undefined.html'){
  $('#page_container').load('pages/' + site+'?version='+version);
  }
  // if (site !== 'undefined.html' && site == 'location.html'){
  // $('html, body').animate({
  //       scrollTop: $("#page_container").offset().top
  //   }, 800);
  // }
  if (site == 'premium.html' || site == 'luxury.html' || site == 'honeymoon.html'){

    $('#index-reserve').addClass('hidden');

    if (Modernizr.mq('(min-width: 200px)') && Modernizr.mq('(max-width: 700px)')) {
      $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 100);
      $('#header').css('background','');
      change_logo('lofts','','','');
    $('#header').css('height','200px').css('padding','0px');
    $('#header').css('background','url("images/lofts_image/'+page+'.jpg")').css('background-attachment','top');
    $('#header').css('background-repeat','no-repeat').css('background-size','170%');
    } else if (Modernizr.mq('(min-width: 701px)') && Modernizr.mq('(max-width: 1000px)')){
    $('html, body').animate({
          scrollTop: $("body").offset().top
      }, 100);
    $('#header').css('background','');
    change_logo('lofts','','','');
    $('#header').css('height','300px').css('padding','');
  $('#header').css('background','url("images/lofts_image/'+page+'.jpg")').css('background-attachment','top');
  $('#header').css('background-repeat','no-repeat').css('background-size','120% auto');
    }else {
      $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 100);
      $('#header').css('background','');
      change_logo('lofts','','','');
    $('#header').css('height','-=30px').css('padding','');
    $('#header').css('background','url("images/lofts_image/'+page+'.jpg")').css('background-attachment','top');
    $('#header').css('background-repeat','no-repeat').css('background-size','120% auto');
    }


  }else {
    $('#header').css('height','-=30px');
      $('#index-reserve').addClass('hidden');
    if (site == 'news.html' || site == 'location.html' ){
      change_header_design();
      $('#header').css('background','');
      if (site == 'news.html'){
        change_logo('news.html','News &amp; Events','dining_services_font dynamic_title','TV SHOWS | NEWS | TRENDING EVENTS');
      $('#header').css('background','url("images/news/bg.jpg")').css('background-attachment','center').css('background-size','120% auto');
      }else{
        change_logo('location.html','Map','dining_services_font dynamic_title','Located near SM Batangas and Mercury Drugstore Batangas');
        $('#header').css('background','url("images/location/bg.jpg")').css('background-attachment','center').css('background-size','120% auto');
      }
      $('#header').css('background-repeat','no-repeat').css('background-size','100% auto');
    }
    else if (site == 'dining.html' ){

      // change_header_design();
    //     if (Modernizr.mq('(min-width: 200px)') && Modernizr.mq('(max-width: 600px)')){
    //       $('#bgvidsource').attr('src','2018/videos/display/dining_service.mp4');
    //       console.log($('#bgvidsource'));
    //       $('#header').css('background','');
    //       $('#header').css('background','url("images/dining/bg.jpg")').css('background-attachment','top');
    //       $('#header').css('background-repeat','no-repeat').css('background-size','120% auto');
    //     }else{
    //
    // }
      // $('#bgvidsource').attr('src','2018/videos/display/dining_service.mp4');


      $('#header').css('background','');
      change_logo('dining.html','Luks Cafe','dining_services_font dynamic_title','After a long day full of activities or tour around the hotel, <br> it’s time to relax and reward oneself.');
      $('#header').css('background','url("images/dining/bg.jpg")').css('background-attachment','top');
      $('#header').css('background-repeat','no-repeat').css('background-size','120% auto');
      close_page();
      handleVideo($(me).data('trigger'));
      // document.getElementById('bgvid').play();

      // if ($(me).attr("data-click") != ""){
      //   window.location.search=$(me).attr("data-click")
      // }
    }
    else if (site == 'services.html' ){
      change_header_design();
      $('#header').css('background','');
      change_logo('services.html','Services','dining_services_font dynamic_title','Luks Lofts Hotel combines comfort, luxury and extraordinary service.');
      $('#header').css('background','url("images/services/bg.jpg")').css('background-attachment','top');
      $('#header').css('background-repeat','no-repeat').css('background-size','120% auto');
      close_page();
    }
    else if (site == 'media.html' ){
      change_header_design();
      $('#header').css('background','');
      change_logo('media.html','Gallery','dining_services_font dynamic_title','Images &amp; Videos');
      $('#header').css('background','url("images/gallery/33.jpg")').css('background-attachment','top');
      $('#header').css('background-repeat','no-repeat').css('background-size','120% auto');
      close_page();
    }
    else if (site == 'tv_and_tab.html' ){
      change_header_design();
      $('#header').css('background','');
      change_logo('tv_and_tab.html','tv &amp; tablet','dining_services_font dynamic_title','Communication and Entertainment');
      $('#header').css('background','url("images/tv_and_tab/bg.jpg")').css('background-attachment','top');
      $('#header').css('background-repeat','no-repeat').css('background-size','120% auto');
      close_page();
    }
    else if (site == 'about.html' ){
      change_header_design();
      $('#header').css('background','');
      change_logo('about.html','Policy','dining_services_font dynamic_title','Luks Lofts Policy | Terms &amp; Conditions');
      $('#header').css('background','url("images/contact/bg.jpg")').css('background-attachment','top');
      $('#header').css('background-repeat','no-repeat').css('background-size','120% auto');
      close_page();
    }
    else if (site == 'cuisines.html' ){
      change_header_design();
      $('#header').css('background','');
      change_logo('cuisines.html','Cuisine','dining_services_font dynamic_title','Enjoy different cuisines, from Asian Cuisines to Japanese, Chinese, American and Fusion Cuisines.');
      $('#header').css('background','url("images/dining/lukscafe/cuisines/1.jpg")').css('background-attachment','top');
      $('#header').css('background-repeat','no-repeat').css('background-size','120% auto');
      close_page();
      // $('#bgvid').addClass('hidden');
    }
    else if (site == 'tv.html' ){
      change_header_design();
      $('#header').css('background','');
      change_logo('tv.html','Smart TV Features','dining_services_font dynamic_title','ENTERTAINMENT &amp; COMMUNICATION');
      $('#header').css('background','url("images/tv_and_tab/bg.jpg")').css('background-attachment','top');
      $('#header').css('background-repeat','no-repeat').css('background-size','120% auto');
      close_page();
      // $('#bgvid').addClass('hidden');
    }
    else if (site == 'tab.html' ){
      change_header_design();
      $('#header').css('background','');
      change_logo('tab.html','Tablet Features','dining_services_font dynamic_title','ENTERTAINMENT &amp; COMMUNICATION');
      $('#header').css('background','url("images/tv_and_tab/bg.jpg")').css('background-attachment','top');
      $('#header').css('background-repeat','no-repeat').css('background-size','120% auto');
      close_page();
      // $('#bgvid').addClass('hidden');
    }
    else if (site == 'promo.html' ){
      change_header_design();
      $('#header').css('background','');
      change_logo('promo.html',' ','dining_services_font dynamic_title',' ');
      $('#header').css('background','url("images/promos/1.png")').css('background-attachment','top');
      $('#header').css('background-repeat','no-repeat').css('background-size','100% auto');
      // $('#header').css('height','0px').css('padding','0px');
      close_page();
      // $('#bgvid').addClass('hidden');
    }
    else if (site == 'honeymoonoverview.html' || site == 'premiumoverview.html'  || site == 'luxuryoverview.html'  ){
      change_header_design();
      $('#header').css('background','');
      change_logo('promo.html',' ','dining_services_font dynamic_title',' ');
      if (site == 'luxuryoverview.html'){
        $('#header').css('background','url("images/lofts_image/luxury/0R8A3744.jpg")').css('background-attachment','top');
        $('#header').css('height','600px');

      }
      if (site == 'honeymoonoverview.html'){
        $('#header').css('background','url("images/lofts_image/honeymoon/DSC_2475.jpg")').css('background-attachment','top');
          $('#header').css('height','800px');
      }
      if (site == 'premiumoverview.html'){
        $('#header').css('background','url("images/lofts_image/premium/0R8A9810.jpg")').css('background-attachment','top');
        $('#header').css('height','800px');

      }
      $('#header').css('background-repeat','no-repeat').css('background-size','100% auto');
      // $('#header').css('height','0px').css('padding','0px');
      close_page();
      // $('#bgvid').addClass('hidden');
    }
    else if (site == 'e_and_c.html' ){
      change_header_design();
      $('#header').css('background','');
      change_logo('e_and_c.html',' ','dining_services_font dynamic_title',' ');
      $('#header').css('background','url("images/tv_and_tab/bg.jpg")').css('background-attachment','top');
      $('#header').css('background-repeat','no-repeat').css('background-size','0px');
      $('#header').css('height','0px').css('padding','0px');
      close_page();
      // $('#bgvid').addClass('hidden');
    }
    else if (site == 'reviews.html' ){
      change_header_design();
      $('#header').css('background','');
      change_logo('reviews.html',' ','dining_services_font dynamic_title',' ');
      $('#header').css('background','url("images/reviews/reviews.jpg")').css('background-attachment','top');
      $('#header').css('background-repeat','no-repeat').css('background-size','120% auto');
      // $('#header').css('height','0px').css('padding','0px');
      close_page();
      // $('#bgvid').addClass('hidden');
    }
    else if (site == 'wifi.html' ){
      change_header_design();
      $('#header').css('background','');
      change_logo('wifi.html',' ','dining_services_font dynamic_title',' ');
      $('#header').css('background','url("images/wifi/1.jpg")').css('background-attachment','top');
      $('#header').css('background-repeat','no-repeat').css('background-size','0px');
      $('#header').css('height','0px').css('padding','0px');
      close_page();
      // $('#bgvid').addClass('hidden');
    }
    else if (site == 'in_residence_spa.html' ){
      change_header_design();
      $('#header').css('background','');
      change_logo('in_residence_spa.html','In-Residence Spa','dining_services_font dynamic_title','Come and live a contemporary lifestyle experience.');
      $('#header').css('background','url("images/services/spa/handAndFoot/hand_foot.jpg")').css('background-attachment','top');
      $('#header').css('background-repeat','no-repeat').css('background-size','120% auto');
      close_page();
      handleVideo($(me).data('trigger'));
      // $('#bgvid').addClass('hidden');
    }
    else if (site == 'bathing.html' ){
      change_header_design();
      $('#header').css('background','');
      change_logo('bathing.html',' ','dining_services_font dynamic_title',' ');
      $('#header').css('background','url("images/bathing/1.png")').css('background-attachment','top');
      $('#header').css('background-repeat','no-repeat').css('background-size','120% auto');
      close_page();
      handleVideo($(me).data('trigger'));
      // $('#bgvid').addClass('hidden');
    }
    else if (site == 'spa.html' ){
      change_header_design();
      $('#header').css('background','');
      change_logo('spa.html',' ','dining_services_font dynamic_title',' ');
      $('#header').css('background','url("images/spa/1.jpg")').css('background-attachment','top');
      $('#header').css('background-repeat','no-repeat').css('background-size','120% auto');
      close_page();
      handleVideo($(me).data('trigger'));
      // $('#bgvid').addClass('hidden');
    }
    else if (site == 'living.html' ){
      change_header_design();
      $('#header').css('background','');
      change_logo('living.html',' ','dining_services_font dynamic_title',' ');
      $('#header').css('background','url("uploads/hsm2.jpg")').css('background-attachment','top');
      $('#header').css('background-repeat','no-repeat').css('background-size','140%');
      close_page();
      handleVideo($(me).data('trigger'));
      // $('#bgvid').addClass('hidden');
    }
    else if (site == 'sauna.html' ){
      change_header_design();
      $('#header').css('background','');
      change_logo('sauna.html',' ','dining_services_font dynamic_title',' ');
      $('#header').css('background','url("images/sauna/1.jpg")').css('background-attachment','top');
      $('#header').css('background-repeat','no-repeat').css('background-size','120% auto');
      close_page();
      handleVideo($(me).data('trigger'));
      // $('#bgvid').addClass('hidden');
    }
    else if (site == 'inresidencedining.html' ){
      change_header_design();
      $('#header').css('background','');
      change_logo('inresidencedining.html',' ','dining_services_font dynamic_title',' ');
      $('#header').css('background','url("images/uploads/hsm5iiii.jpg")').css('background-attachment','top');
      $('#header').css('background-repeat','no-repeat').css('background-size','120% auto');
      close_page();
      handleVideo($(me).data('trigger'));
      // $('#bgvid').addClass('hidden');
    }
    else if (site == 'bedroom.html' ){
      change_header_design();
      $('#header').css('background','');
      change_logo('bedroom.html',' ','dining_services_font dynamic_title',' ');
      $('#header').css('background','url("images/bedroom/1.jpg")').css('background-attachment','top');
      $('#header').css('background-repeat','no-repeat').css('background-size','120% auto');
      close_page();
      handleVideo($(me).data('trigger'));
      // $('#bgvid').addClass('hidden');
    }
    else if (site == 'dish.html' ){
      change_header_design();
      $('#header').css('background','');
      change_logo('dish.html',' ','dining_services_font dynamic_title',' ');
      $('#header').css('background','url("images/dish/1.jpg")').css('background-attachment','top');
      $('#header').css('background-repeat','no-repeat').css('background-size','120% auto');
      close_page();
      handleVideo($(me).data('trigger'));
      // $('#bgvid').addClass('hidden');
    }
    else if (site == 'poolside.html' ){
      change_header_design();
      $('#header').css('background','');
      change_logo('poolside.html',' ','dining_services_font dynamic_title',' ');
      $('#header').css('background','url("images/poolside/1.jpg")').css('background-attachment','top');
      $('#header').css('background-repeat','no-repeat').css('background-size','120% auto');
      close_page();
      handleVideo($(me).data('trigger'));
      // $('#bgvid').addClass('hidden');
    }
    else if (site == 'chauffeur.html' ){
      change_header_design();
      $('#header').css('background','');
      change_logo('chauffeur.html','Chauffeur Service','dining_services_font dynamic_title','Punctual, Professional, Personable');
      $('#header').css('background','url("images/services/bg.jpg")').css('background-attachment','top');
      $('#header').css('background-repeat','no-repeat').css('background-size','120% auto');
      close_page();
      handleVideo($(me).data('trigger'));
      // $('#bgvid').addClass('hidden');
    }
    else if (site == 'bar.html' ){
      change_header_design();
      $('#header').css('background','');
      change_logo('bar.html','Luks Bar','dining_services_font dynamic_title','DIFFRENT KINDS OF DRINKS | UNWIND AND RELAX');
      $('#header').css('background','url("images/dining/bar/overview.jpg")').css('background-attachment','top');
      $('#header').css('background-repeat','no-repeat').css('background-size','120% auto');
      close_page();
      handleVideo($(me).data('trigger'));
      // $('#bgvid').addClass('hidden');
    }
    else if (site == 'keyless.html' ){
      change_header_design();
      $('#header').css('background','');
      change_logo('keyless.html',' ','dining_services_font dynamic_title',' ');
      $('#header').css('background','url("images/keyless/1.jpg")').css('background-attachment','center');
      $('#header').css('background-repeat','no-repeat').css('background-size','120% auto');
      close_page();
      handleVideo($(me).data('trigger'));
      // $('#bgvid').addClass('hidden');
    }
    else if (site == 'contact.html' ){
      change_header_design();
      $('#header').css('background','');
      change_logo('contact.html','Contact','dining_services_font dynamic_title','Do you have a question?<br>send us your inquiries and requests.');
      $('#header').css('background','url("images/contact/1.jpg")').css('background-attachment','center');
      $('#header').css('background-repeat','no-repeat').css('background-size','120% auto');

      close_page();
    }
    // else if (site == 'promo.html' ){
    //   change_header_design();
    //   $('#header').css('background','');
    //   change_logo('contact.html','Promos','dining_services_font dynamic_title','Grab the opportunity, enjoy our special offers and promos.');
    //   $('#header').css('background','url("images/contact/bg.jpg")').css('background-attachment','top');
    //   $('#header').css('background-repeat','no-repeat').css('background-size','120% auto');
    //   close_page();
    // }
    else {
      $('#index-reserve').removeClass('hidden');

        $('#header').css('background','').css('background-attachment','');
        $('#header').css('background-repeat','').css('background-size','');
        $('#bgvid').removeClass('hidden');
        change_logo('','','','');

        $('#header').css('height','600px').css('padding','');

        if ($(me).data('trigger') == "home" || $(me).data('trigger') == ""){
          handleVideo('home');
          // $('#header').removeClass('hidden');
        }else{
          change_logo('','','','');
          $('#header').css('background','url("images/lofts_image/main.png")').css('background-attachment','top');
          $('#header').css('background-repeat','no-repeat').css('background-size','140%');
        }
    }

  }
  if (Modernizr.mq('(min-width: 200px)') && Modernizr.mq('(max-width: 600px)')
//   && site != "promo.html" && site != "wifi.html" && site != "e_and_c.html" &&
// site != 'honeymoonoverview.html' && site != 'premiumoverview.html'
//  && site != 'luxuryoverview.html'&&
// site != 'honeymoon.html' && site != 'premium.html'  && site != 'luxury.html'
)
{
    $('#header').css('height','').css('padding','');
    $('#header').css('height','300px').css('padding','10px').css('z-index','1');
    $('#logo').css('margin-top','26%');
    $('#header').css('background-attachment','top');
    $('#header').css('background-repeat','no-repeat').css('background-size','170%');
  if (site == "media.html"){
    $('#header').css('background-repeat','no-repeat').css('background-size','180%');
    }
    if (site == "promo.html"){
      // $('#header').css('height','200px;');
      // $('#header').css('background-size','100% auto');
      $('#header').css('height','0px')
      $('#header-wrapper').css('height','0px')

    }else{
      $('#header-wrapper').css('height','')
    }
  }else{
    if (site == 'promo.html' ){
      $('#header').css('height','0px')
      $('#header-wrapper').css('height','0px')
      // $('#header').css('background-size','100% auto');

    }else{
      $('#header-wrapper').css('height','')
    }

  }
  hideLoading(0);
  $('#bgvid').css('z-index','-1');
  $('#logo').css('z-index','9');
}

function handleVideo(me){
    // if (Modernizr.mq('(min-width: 200px)') && Modernizr.mq('(max-width: 500px)')) {
    //     $('#bgvid').addClass('hidden');
    // }else{
      var video = document.getElementById('bgvid');
      // console.log(me);

      // video.pause();
      if (me == "poolside"){
        $('#bgvid').get(0).setAttribute('src', '2018/videos/display/dining.mp4?version='+version);
        $('#bgvid').attr('poster', 'images/poolside/1.jpg?version='+version);
      }
      if (me == "bar"){
        $('#bgvid').get(0).setAttribute('src', '2018/videos/display/bar.mp4?version='+version);
        $('#bgvid').attr('poster', 'images/dining/bar/overview.jpg?version='+version);
      }
      if (me == "bedroom"){
        $('#bgvid').get(0).setAttribute('src', '2018/videos/display/sleeping.mp4?version='+version);
        $('#bgvid').attr('poster', 'images/bedroom/1.jpg?version='+version);
      }
      if (me == "keyless"){
        $('#bgvid').get(0).setAttribute('src', '2018/videos/display/keyless.mp4?version='+version);
        $('#bgvid').attr('poster', 'images/keyless/1.jpg?version='+version);
      }
      if (me == "dish"){
        $('#bgvid').get(0).setAttribute('src', '2018/videos/display/dish.mp4?version='+version);
        $('#bgvid').attr('poster', 'images/dish/1.jpg?version='+version);
      }
      if (me == "living"){
        $('#bgvid').get(0).setAttribute('src', '2018/videos/display/living.mp4?version='+version);
        $('#bgvid').attr('poster', 'uploads/hsm2.jpg?version='+version);
      }
      if (me == "dining"){
        $('#bgvid').get(0).setAttribute('src', '2018/videos/display/dining_service.mp4?version='+version);
        $('#bgvid').attr('poster', 'images/dining/lukscafe/21.jpg?version='+version);
      }
      if (me == "inresidencedining"){
        $('#bgvid').get(0).setAttribute('src', '2018/videos/display/dining.mp4?version='+version);
        $('#bgvid').attr('poster', 'images/uploads/hsm5iiii.jpg?version='+version);
      }
      if (me == "in_residence_spa"){
        $('#bgvid').get(0).setAttribute('src', '2018/videos/display/inresidence_spa.mp4?version='+version);
        $('#bgvid').attr('poster', 'images/services/spa/handAndFoot/hand_foot.jpg?version='+version);
      }
      if (me == "bathing"){
        $('#bgvid').get(0).setAttribute('src', '2018/videos/display/bathing.mp4?version='+version);
        $('#bgvid').attr('poster', 'images/bathing/1.png?version='+version);
      }
      if (me == "sauna"){
        $('#bgvid').get(0).setAttribute('src', '2018/videos/display/sauna.mp4?version='+version);
        $('#bgvid').attr('poster', 'images/sauna/1.jpg?version='+version);
      }
      if (me == "spa"){
        $('#bgvid').get(0).setAttribute('src', '2018/videos/display/sauna.mp4?version='+version);
        $('#bgvid').attr('poster', 'images/spa/1.jpg?version='+version);
      }
      if (me == "chauffeur"){
        $('#bgvid').get(0).setAttribute('src', '2018/videos/display/chauffeur.mp4?version='+version);
        $('#bgvid').attr('poster', 'images/services/bg.jpg?version='+version);
      }
      if (me == "" || me == "home"){
      $('#bgvid').get(0).setAttribute('src', '2018/videos/display/home.mp4?version='+version);
      }
      $('#header').css('background','').css('background-attachment','');
      $('#header').css('background-repeat','').css('background-size','');


      // video.appendChild(source);
      $('#bgvid').get(0).load();
      // $('#bgvid').get(0).pause();
      // $('#bgvid').get(0).play();
      $('#bgvid').removeClass('hidden');
    // }

}

function handleModalVideo(me){
  // if (Modernizr.mq('(min-width: 200px)') && Modernizr.mq('(max-width: 500px)')) {
  //     $('#modal_bgvid').addClass('hidden');
  // }else{
  // try {
  //   $(window).load(function(){
  //   var video = document.getElementById('modal_bgvid');
  //   // video.pause();
  //   if (me == "in_residence_spa"){
  //     me = "inresidence_spa";
  //   }
  //   if (me == "inresidencedining"){
  //     me = "dining";
  //   }
  //   video.setAttribute('src', 'videos/'+me+'.mp4');
  //   $('#modal_bgvid').get(0).load();
  // });
  // }
  // catch(err) {
  //     console.log(err.message);
  // }
// }
}

function initial_load(){
  change_logo('','','','');
  onHashChange();

  $('#index-reserve').removeClass('hidden');

    // $('#header').css('background','').css('background-attachment','');
    // $('#header').css('background-repeat','').css('background-size','');
    // $('#bgvid').removeClass('hidden');
    // change_logo('','','','');
    // $('#header').css('height','').css('padding','');

  if (window.location.hash == "" || window.location.hash == "#home"
  || window.location.hash == "#") {
    window.location.hash = "#home";

    $('#page_container').load('pages/home.html?version='+version);
      $('#hotel_features-section').removeClass('hidden');
      if (Modernizr.mq('(min-width: 200px)') && Modernizr.mq('(max-width: 600px)')
    //   && window.location.hash != "#promo" && window.location.hash != "#wifi"
    //   && window.location.hash != "#e_and_c" &&
    // window.location.hash != '#honeymoonoverview'
    //   && window.location.hash != '#premiumoverview'
    //   && window.location.hash != '#luxuryoverview'&&
    // window.location.hash != '#honeymoon'
    // && window.location.hash != '#premium'
    // && window.location.hash != '#luxury'
  ){
      change_logo('','','','');
        $('#header').css('height','').css('padding','');
        $('#header').css('height','300px').css('padding','10px');
        $('#logo').css('margin-top','26%');
        $('#header').css('background-attachment','top');
        $('#header').css('background-repeat','no-repeat').css('background-size','170%');
      }else{

      $('#header').css('background','').css('background-attachment','');
      $('#header').css('background-repeat','').css('background-size','');
      $('#bgvid').removeClass('hidden');
      // $('#bgvid').get(0).play();
      change_logo('','','','');
        $('#hotel_features-section').removeClass('hidden');
      $('#header').css('height','600px').css('padding','');
    }
  } else {
    onHashChange();
    if (window.location.hash != "") {
        if (window.location.hash.startsWith("#modal-") || window.location.hash == "#undefined") {
          $('#page_container').load('pages/home.html');
          $('#hotel_features-section').removeClass('hidden');
          $('#logo').html("<br><h2 style='font-size:2.5em;text-shadow:1px 1px 2px #555555  !important;color:#FFF !important;font-weight:600;text-transform:uppercase;' class='dynamic_title dining_services_font' >Luxurious and Contemporary Lifestyle</h2>");
        }
      }
  }
  // change_logo();

}

// function hide_partial_gallery_base(){
//   $('#gallery_base').css('max-height','650px').css('overflow','hidden');
//   $('#hidepartialgallery').addClass('hidden');
//   $('#showpartialgallery').removeClass('hidden');
//   // $('html, body').animate({
//   //       scrollTop: $("#intro-wrapper").offset().top
//   //   }, 100);
// }
// function show_partial_gallery_base(){
//   $('#gallery_base').css('max-height','100%').css('overflow','hidden');
//   $('#hidepartialgallery').removeClass('hidden');
//   $('#showpartialgallery').addClass('hidden');
//   // scroll_tobase_gal();
// }



// function hide_partial_pricing_base(marker){
//   $('#pricing_base_'+marker).css('max-height','500px').css('overflow','hidden');
//   $('#hidepartialpricing_'+marker).addClass('hidden');
//   $('#showpartialpricing_'+marker).removeClass('hidden');
//   $('html, body').animate({
//         scrollTop: $("#top_"+marker).offset().top
//     }, 300);
// }
// function show_partial_pricing_base(marker){
//   $('#pricing_base_'+marker).css('max-height','100%').css('overflow','hidden');
//   $('#hidepartialpricing_'+marker).removeClass('hidden');
//   $('#showpartialpricing_'+marker).addClass('hidden');
//   scroll_tobase_price(marker);
// }




function scroll_tobase_gal(){
  // $('html, body').animate({
  //       scrollTop: $("#gallery_bottom").offset().top - 600
  //   }, 100);

}
function scroll_tobase_price(marker){
  // $('html, body').animate({
  //       scrollTop: $("#pricing_bottom_"+marker).offset().top - 600
  //   }, 100);

}


function scrollto(section){
  $('html, body').animate({
        scrollTop: $("#"+section+"-section").offset().top
    }, 100);
}
function scrollto_horizontal(section){
  // if (section == 1){
  // $('#horizontal-div').animate({
  //       scrollLeft: 0
  //   }, 200);
  // }
  // if (section == 2){
  // $('#horizontal-div').animate({
  //       scrollLeft: $('html, body').width() + 6
  //   }, 200);
  // }
  // if (section == 3){
  // $('#horizontal-div').animate({
  //       scrollLeft: ($('html, body').width() + 6 ) * 2
  //   }, 200);
  // }

}


function set_scroll_panel(){
  var a = $('#image-section').height();
  var b = $('#video-section').height();
  $(window).on('scroll', function() {
    var st = $(document).scrollTop();

    if (st > b && st > a) {
      $('#image_trigger').removeClass('active-page_controller');
      $('#video_trigger').addClass('active-page_controller');
    }
    else{
      $('#video_trigger').removeClass('active-page_controller');
      $('#image_trigger').addClass('active-page_controller');
    }
  });
}


function loadservices_trigger(){
  $('#services_container').load('pages/services_triggers.html');
}
function loadpromo_trigger(){
  $('#promo_container').load('pages/promo.html');
}
function loadservices_trigger_modal(){
  $('#services_modal_container').load('pages/services_triggers.html');
}

function loaddining_trigger(){
  $('#dining_container').load('pages/dining_triggers.html');
}
function loaddining_trigger_modal(){
  $('#dining_modal_container').load('pages/dining_triggers.html');
}
function load_news(container){
  $('#'+container).load('pages/news.html');
}

function loadtv_and_tab_trigger(){
  $('#tv_and_tab_trigger_container').load('pages/tv_and_tab_triggers.html');
}
function loadtv_and_tab_trigger_modal(){
  $('#tv_and_tab_trigger_modal_container').load('pages/tv_and_tab_triggers.html');
}



function to_top(){
  $('html, body').animate({
        scrollTop: $("body").offset().top
    }, 200);
    $('#header').fadeIn();
}



// CALL GALLERY IN DINING

function toggle_cuisine(content){
$('#'+content).slideToggle("slow");
}

function call_dining_gallery(dir,fileextension,container,group_title,fontstyle,maxheight,description){
  showLoading('');
    var content = "";
    var trigger = "'"+container+"_content'";
    // var video_details = "";
    $.ajax({
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
        url: dir,
        success: function (data) {
          var background = "background:url('videos/luks_thumbnail.png');background-size:100% 100%;";
            //List all .png file names in the page
            content = "";
            content += "<br>";
            // onclick="toggle_cuisine('+trigger+');"
            // &nbsp;<i class="fa fa-angle-down"></i>
            content += '<h2 class="'+fontstyle+' gold-header cursor_pointer">'+group_title+'</h2>';
            if (description != "" && description){
              content += '<p></p>';
              content += '<center>';
              content += '<p class="spacedfont text-justify" style="font-size:14px;width:90%;">'+description+'</p>';
              content += '</center>';
            }
            content += "<hr>";
            content += "<div id='"+container+"_content'>";
            var count = 1;
            var source = [];
            var title = [];
            $(data).find("a:contains(" + fileextension + ")").each(function () {
              total_videos++;
                // var filename = this.href.replace(window.location, "").replace("http://", "").replace("localhost/", "").replace("lukslofts2/", "").replace("192.168.149.59/", "").replace(window.location.hostname+"/", "");
                var filename = this.href.split("/").pop();

                source[count] = dir + filename;
                // source[count] = filename;
                // title[count] = filename.replace(".mp4", "");
                var for_content = filename.replace(".jpg", "");
                for_content = for_content.replace(window.location.hostname+"/", "");

                // title[count] = title[count].replace("_", " ");
                // console.log(filename);




                content += '  <div class="col-lg-4 col-md-12 mb-r">';

                      // <!--Card-->
                // content += '      <div class="card card-cascade wider">';

                          // <!--Card image-->
                content += '          <div class="view overlay hm-white-slight dynamic_image_container">';
                content += '              <img src="'+source[count]+'" class="img-fluid" alt="">';
                content += '              <a data-fancybox="gallery" href="'+source[count]+'">';
                content += '                  <div class="mask"></div>';
                content += '              </a>';
                content += '          </div>';
                          // <!--/.Card image-->

                          // <!--Card content-->
                content += '          <div style="min-height:'+maxheight+';max-height:'+maxheight+';height:'+maxheight+';overflow:hidden;"';
                content += '          class="card-block text-justify">';
                              // <!--Category & Title-->
                $.ajax({
                  url: dir + for_content + '.txt',
                  // url: for_content + '.txt',
                  async: false,
                  success: function (data){
                    content += '				<p class="roboto-regular">'+data+'</p>';
                  }
                });


                // content += '          </hr>';
                content += '          </div>';
                          // <!--/.Card content-->

                // content += '      </div>';
                      // <!--/.Card-->

                content += '  </div>';







                count += 1;
            });
            content += '  </div>';

            $("#"+container).html(content);
        }
    });

    // $('html, body').animate({
    //       scrollTop: $("#dining_nav_container").offset().top
    //   }, 800);


    hideLoading(0);
}








function call_gallery(dir,fileextension,container,group_title,fontstyle,maxheight,captioned){
  showLoading('');
    var content = "";
    var trigger = "'"+container+"_content'";
    // var video_details = "";
    $.ajax({
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
        url: dir,
        success: function (data) {
          var background = "background:url('videos/luks_thumbnail.png');background-size:100% 100%;";
            //List all .png file names in the page
            content = "";
            content += "<br>";
            content += "<center>";
            // onclick="toggle_cuisine('+trigger+');"
            content += '<h4  class="'+fontstyle+' gold-header cursor_pointer">'+group_title+'</h4>';
            content += "</center>";
            content += "<hr>";
            content += "<div id='"+container+"_content'>";
            var count = 1;
            var source = [];
            var title = [];
            $(data).find("a:contains(" + fileextension + ")").each(function () {
              total_videos++;
                // var filename = this.href.replace(window.location, "").replace("http://", "").replace("localhost/", "").replace("lukslofts2/", "").replace("192.168.149.59/", "").replace(window.location.hostname+"/", "");
                var filename = this.href.split("/").pop();

                source[count] = dir + filename;
                // source[count] = filename;
                // title[count] = filename.replace(".mp4", "");
                var for_content = filename.replace(".jpg", "");
                // title[count] = title[count].replace("_", " ");
                for_content = for_content.replace(window.location.hostname+"/", "");

                // console.log(filename);




                content += '  <div class="col-sm-12">';

                      // <!--Card-->
                content += '      <div class="col-sm-6>';

                          // <!--Card image-->
                content += '          <div class="view overlay hm-white-slight dynamic_image_container">';
                content += '          <center>';
                content += '              <a data-fancybox="gallery" href="'+source[count]+'">';
                content += '              <img src="'+source[count]+'" class="img-fluid" style="height:200px;overflow:hidden" alt="">';
                content += '              </a>';
                content += '              <a>';
                content += '                  <div class="mask"></div>';
                content += '              </a>';
                content += '          </center>';
                content += '          </div>';
                content += '      </div>';

              if (captioned == 'true'){
                content += '      <div class="col-sm-6>';
                          // <!--/.Card image-->

                          // <!--Card content-->
                content += '          <div style="min-height:'+maxheight+';max-height:'+maxheight+';height:'+maxheight+';overflow:hidden;"';
                content += '          class="card-block text-justify">';
                              // <!--Category & Title-->
                $.ajax({
                  url: dir + for_content + '.txt',
                  // url: for_content + '.txt',
                  async: false,
                  success: function (data){
                    content += '				<p class="roboto-regular">'+data+'</p>';
                  }
                });


                content += '          </hr>';
                content += '          </div>';
                content += '      </div>';
              }
                          // <!--/.Card content-->

                content += '      </div>';
                      // <!--/.Card-->







                count += 1;
            });
            content += '  </div>';

            $("#"+container).html(content);
        }
    });

    // $('html, body').animate({
    //       scrollTop: $("#dining_nav_container").offset().top
    //   }, 800);


    hideLoading(0);
}




function call_youtube_gallery(dir,fileextension,container,group_title,fontstyle,maxheight,captioned){
  showLoading('');
    var content = "";
    var trigger = "'"+container+"_content'";
    // var video_details = "";
    $.ajax({
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
        url: dir,
        success: function (data) {
          var background = "background:url('videos/luks_thumbnail.png');background-size:100% 100%;";
            //List all .png file names in the page
            content = "";
            content += "<br>";
            // onclick="toggle_cuisine('+trigger+');"
            // content += '<h3  class="'+fontstyle+' gold-header cursor_pointer">'+group_title+'</h3>';
            content += "<hr>";
            content += "<div id='"+container+"_content'>";
            var count = 1;
            var source = [];
            var title = [];
            $(data).find("a:contains(" + fileextension + ")").each(function () {
              total_videos++;
                // var filename = this.href.replace(window.location, "").replace("http://", "").replace("localhost/", "").replace("lukslofts2/", "").replace("192.168.149.59/", "").replace(window.location.hostname+"/", "");
                var filename = this.href.split("/").pop();

                source[count] = dir + filename;
                // source[count] = filename;
                // title[count] = filename.replace(".mp4", "");
                var for_content = filename.replace(fileextension, "");
                    for_content = for_content.replace(window.location.hostname+"/", "");
                // title[count] = title[count].replace("_", " ");
                // console.log(filename);




                content += '  <div class="col-sm-6">';
                content += '      <div class="col-sm-12">';
                content += '          <div style="min-height:'+maxheight+';max-height:'+maxheight+';height:'+maxheight+';overflow:hidden;"';
                content += '          class="gold-cont card-block text-justify roboto-regular">';
                              // <!--Category & Title-->
                $.ajax({
                  url: dir + for_content + '.txt',
                  // url: for_content + '.txt',
                  async: false,
                  success: function (data){
                    content += '				<p class="roboto-regular">'+data+'</p>';
                  }
                });


                content += '          </hr>';
                content += '          </div>';
                content += '      </div>';
                          // <!--/.Card content-->

                content += '      </div>';
                      // <!--/.Card-->







                count += 1;
            });
            content += '  </div>';

            $("#"+container).html(content);
        }
    });

    // $('html, body').animate({
    //       scrollTop: $("#dining_nav_container").offset().top
    //   }, 800);


    hideLoading(0);
}




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
function construct_nav(){
  $(window).load(function(){
  if (Modernizr.mq('(min-width: 200px)') && Modernizr.mq('(max-width: 700px)')) {
    $('.depth-1').toggle();
    $('.depth-2').toggle();
    		$('.depth-0').each(function(){
          var marker_1 = $(this).data('marker');
          $(this).click(function(){
            $('.depth-1.'+marker_1).slideToggle();
            $('.depth-2.'+marker_1).slideToggle();
          });


        });
    		// $('.depth-1').each(function(){
        //   var marker_2 = $(this).data('marker');
        //   $(this).click(function(){
        //     $('.depth-2.'+marker_2).slideToggle();
        //   });
        //
        //
        // });

  }


});
}

function click_caller(){
  // $(window).load(function(){
    $('#call_us').click();
    console.log('call_initialized');

  // });
}

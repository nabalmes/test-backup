
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
  if (background == ""){
    background = '#FFF url("assets/css/images/overlay.png")';
  }
  $('#loader-wrapper').css('background',background);
  $('#loader-wrapper').fadeIn();
  $('body').addClass('overflow_hidden');
}
function hideLoading(duration){
  setTimeout(function(){
    $('#loader-wrapper').fadeOut();
    $('body').removeClass('overflow_hidden');
  }, duration);
}

function show_page(me){
  $('body').addClass('modal-open');
showLoading('');
    $('#modal_content').html("");
  $('#modal_content').load('pages/' + $(me).data("trigger") + '.html');
  $('#page-modal').modal('show');
  hideLoading(600);
}




function close_page(){
  showLoading('');
  // console.log($('#modal_content'));
    $('#modal_content').load('pages/empty.html');
    $('#page-modal').modal('hide');
    $('body').removeClass('modal-open');
    hideLoading(600);

}


function change_logo(page,title,fontstyle,caption){
  var logo_content = "";
  if (page == ''){
      logo_content += "  <h1>";
      logo_content += "  <a style='";
      logo_content += "  text-decoration:none;";
      logo_content += "  color:#FFF;'";
      logo_content += "  href='index.html'>LuksLofts</a>";
      logo_content += "  </h1>";
      logo_content += "  <p>Luxurious and Contemporary Lifestyle</p>";
    }else{
      logo_content += "  <h1>";
      logo_content += "  <a class='"+fontstyle+"' style='";
      logo_content += "  text-decoration:none;";
      logo_content += "  color:#FFF;'";
      logo_content += "  >"+title+"</a>";
      logo_content += "  </h1>";
      logo_content += "  <p>"+caption+"</p>";
    }
$('#logo').html(logo_content);
}

function redirect_main(me){
  $('#header-wrapper').css('height','').css('padding','');


  showLoading('');
 // if loft hide #bgvid #header
  var page = $(me).data("trigger");
  var site = page + '.html';
  if (site !== 'undefined.html'){
  $('#page_container').load('pages/' + site);
  }
  // if (site !== 'undefined.html' && site == 'location.html'){
  // $('html, body').animate({
  //       scrollTop: $("#page_container").offset().top
  //   }, 800);
  // }
  if (site == 'premium.html' || site == 'luxury.html' || site == 'honeymoon.html'){
    $('#bgvid').addClass('hidden');
    if (Modernizr.mq('(min-width: 200px)') && Modernizr.mq('(max-width: 700px)')) {
    $('#header-wrapper').css('height','-=100px').css('padding','0px');
    } else if (Modernizr.mq('(min-width: 701px)') && Modernizr.mq('(max-width: 1000px)')){
    $('#header-wrapper').css('height','-=100px').css('padding','');
    }else {
    $('#header-wrapper').css('height','-=160px').css('padding','');
    }
    $('html, body').animate({
          scrollTop: $("body").offset().top
      }, 800);
    $('#page-wrapper').css('background','');
    change_logo('lofts','','','');
    $('#page-wrapper').css('background','url("images/lofts_image/'+page+'.jpg")').css('background-attachment','top');
    $('#page-wrapper').css('background-repeat','no-repeat').css('background-size','100%');
  }else {
    if (site == 'news.html' || site == 'location.html' ){
      $('#bgvid').addClass('hidden');
      if (Modernizr.mq('(min-width: 200px)') && Modernizr.mq('(max-width: 700px)')) {
      $('#header-wrapper').css('height','-=100px').css('padding','10px');
      } else if (Modernizr.mq('(min-width: 701px)') && Modernizr.mq('(max-width: 1000px)')){
      // $('#header-wrapper').css('height','-=100px').css('padding','');
      }else {
      // $('#header-wrapper').css('height','-=160px').css('padding','');
      }
      $('#page-wrapper').css('background','');
      if (site == 'news.html'){
        change_logo('news.html','Hotel Reviews','heading_font','TV SHOWS | NEWS | TRENDING EVENTS');
      $('#page-wrapper').css('background','url("images/news/bg.jpg")').css('background-attachment','top');
      }else{
        change_logo('location.html','Hotel Location','heading_font','PALLOCAN WEST, BATANGAS CITY');
        $('#page-wrapper').css('background','url("images/location/bg.jpg")').css('background-attachment','top');
      }
      $('#page-wrapper').css('background-repeat','no-repeat').css('background-size','100%');
    }
    else if (site == 'dining.html' ){
      $('#bgvid').addClass('hidden');
      if (Modernizr.mq('(min-width: 200px)') && Modernizr.mq('(max-width: 700px)')) {
      $('#header-wrapper').css('height','-=100px').css('padding','10px');
      } else if (Modernizr.mq('(min-width: 701px)') && Modernizr.mq('(max-width: 1000px)')){
      // $('#header-wrapper').css('height','-=100px').css('padding','');
      }else {
      // $('#header-wrapper').css('height','-=160px').css('padding','');
      }
      $('#page-wrapper').css('background','');
      change_logo('dining.html','Dining','heading_font','After a long day full of activities or tour around the hotel, <br> it’s time to relax and reward oneself.');
      $('#page-wrapper').css('background','url("images/dining/bg.jpg")').css('background-attachment','top');
      $('#page-wrapper').css('background-repeat','no-repeat').css('background-size','100%');
      close_page();
    }
    else if (site == 'services.html' ){
      $('#bgvid').addClass('hidden');
      if (Modernizr.mq('(min-width: 200px)') && Modernizr.mq('(max-width: 700px)')) {
      $('#header-wrapper').css('height','-=100px').css('padding','10px');
      } else if (Modernizr.mq('(min-width: 701px)') && Modernizr.mq('(max-width: 1000px)')){
      // $('#header-wrapper').css('height','-=100px').css('padding','');
      }else {
      // $('#header-wrapper').css('height','-=160px').css('padding','');
      }
      $('#page-wrapper').css('background','');
      change_logo('services.html','Services','heading_font','Luks Lofts Hotel combines comfort, luxury and extraordinary service.');
      $('#page-wrapper').css('background','url("images/services/bg.jpg")').css('background-attachment','top');
      $('#page-wrapper').css('background-repeat','no-repeat').css('background-size','100%');
      close_page();
    }
    else if (site == 'media.html' ){
      $('#bgvid').addClass('hidden');
      if (Modernizr.mq('(min-width: 200px)') && Modernizr.mq('(max-width: 700px)')) {
      $('#header-wrapper').css('height','-=100px').css('padding','10px');
      } else if (Modernizr.mq('(min-width: 701px)') && Modernizr.mq('(max-width: 1000px)')){
      // $('#header-wrapper').css('height','-=100px').css('padding','');
      }else {
      // $('#header-wrapper').css('height','-=160px').css('padding','');
      }
      $('#page-wrapper').css('background','');
      change_logo('media.html','Gallery','heading_font','Images &amp; Videos');
      $('#page-wrapper').css('background','url("images/gal_bg.jpg")').css('background-attachment','top');
      $('#page-wrapper').css('background-repeat','no-repeat').css('background-size','100%');
      close_page();
    }
    else if (site == 'tv_and_tab.html' ){
      $('#bgvid').addClass('hidden');
      if (Modernizr.mq('(min-width: 200px)') && Modernizr.mq('(max-width: 700px)')) {
      $('#header-wrapper').css('height','-=100px').css('padding','10px');
      } else if (Modernizr.mq('(min-width: 701px)') && Modernizr.mq('(max-width: 1000px)')){
      // $('#header-wrapper').css('height','-=100px').css('padding','');
      }else {
      // $('#header-wrapper').css('height','-=160px').css('padding','');
      }
      $('#page-wrapper').css('background','');
      change_logo('tv_and_tab.html','tv &amp; tablet','heading_font','Communication and Entertainment');
      $('#page-wrapper').css('background','url("images/tv_and_tab/bg.jpg")').css('background-attachment','top');
      $('#page-wrapper').css('background-repeat','no-repeat').css('background-size','100%');
      close_page();
    }
    else if (site == 'about.html' ){
      $('#bgvid').addClass('hidden');
      if (Modernizr.mq('(min-width: 200px)') && Modernizr.mq('(max-width: 700px)')) {
      $('#header-wrapper').css('height','-=100px').css('padding','10px');
      } else if (Modernizr.mq('(min-width: 701px)') && Modernizr.mq('(max-width: 1000px)')){
      // $('#header-wrapper').css('height','-=100px').css('padding','');
      }else {
      // $('#header-wrapper').css('height','-=160px').css('padding','');
      }
      $('#page-wrapper').css('background','');
      change_logo('about.html','LuksLofts','','About Hotel | Terms &amp; Conditions');
      $('#page-wrapper').css('background','url("images/about/bg.jpg")').css('background-attachment','top');
      $('#page-wrapper').css('background-repeat','no-repeat').css('background-size','100%');
      close_page();
    }
    else if (site == 'contact.html' ){
      $('#bgvid').addClass('hidden');
      if (Modernizr.mq('(min-width: 200px)') && Modernizr.mq('(max-width: 700px)')) {
      $('#header-wrapper').css('height','-=100px').css('padding','10px');
      } else if (Modernizr.mq('(min-width: 701px)') && Modernizr.mq('(max-width: 1000px)')){
      // $('#header-wrapper').css('height','-=100px').css('padding','');
      }else {
      // $('#header-wrapper').css('height','-=160px').css('padding','');
      }
      $('#page-wrapper').css('background','');
      change_logo('contact.html','Contact','heading_font','Do you have a question?<br>send us your inquiries and requests.');
      $('#page-wrapper').css('background','url("images/contact/bg.jpg")').css('background-attachment','top');
      $('#page-wrapper').css('background-repeat','no-repeat').css('background-size','100%');
      close_page();
    }
    else {
      if (Modernizr.mq('(min-width: 200px)') && Modernizr.mq('(max-width: 600px)')){
        $('#bgvid').addClass('hidden');
        $('#page-wrapper').css('background','');
        // change_logo('about.html','LuksLofts','','About Hotel | Terms &amp; Conditions');
        $('#header-wrapper').css('height','-=120px').css('padding','10px');

        $('#page-wrapper').css('background','url("images/lofts_image/main.png")').css('background-attachment','top');
        $('#page-wrapper').css('background-repeat','no-repeat').css('background-size','140%');
        close_page();
      }else{

      $('#page-wrapper').css('background','').css('background-attachment','');
      $('#page-wrapper').css('background-repeat','').css('background-size','');
      $('#bgvid').removeClass('hidden');
      change_logo('','','','');
      $('#header-wrapper').css('height','').css('padding','');
    }
    }
  }
  hideLoading(1000);

}
function initial_load(){
  $('#page_container').load('pages/home.html');
  if (Modernizr.mq('(min-width: 200px)') && Modernizr.mq('(max-width: 600px)')){
    $('#bgvid').addClass('hidden');
    $('#page-wrapper').css('background','');
    // change_logo('about.html','LuksLofts','','About Hotel | Terms &amp; Conditions');
    $('#header-wrapper').css('height','-=120px').css('padding','10px');

    $('#page-wrapper').css('background','url("images/lofts_image/main.png")').css('background-attachment','top');
    $('#page-wrapper').css('background-repeat','no-repeat').css('background-size','140%');
    close_page();
  }else{

  $('#page-wrapper').css('background','').css('background-attachment','');
  $('#page-wrapper').css('background-repeat','').css('background-size','');
  $('#bgvid').removeClass('hidden');
  change_logo('','','','');
  $('#header-wrapper').css('height','').css('padding','');
}
}

function hide_partial_gallery_base(){
  $('#gallery_base').css('max-height','650px').css('overflow','hidden');
  $('#hidepartialgallery').addClass('hidden');
  $('#showpartialgallery').removeClass('hidden');
  $('html, body').animate({
        scrollTop: $("#intro-wrapper").offset().top
    }, 800);
}
function show_partial_gallery_base(){
  $('#gallery_base').css('max-height','100%').css('overflow','hidden');
  $('#hidepartialgallery').removeClass('hidden');
  $('#showpartialgallery').addClass('hidden');
  scroll_tobase_gal();
}



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
  $('html, body').animate({
        scrollTop: $("#gallery_bottom").offset().top - 600
    }, 800);

}
function scroll_tobase_price(marker){
  $('html, body').animate({
        scrollTop: $("#pricing_bottom_"+marker).offset().top - 600
    }, 800);

}


function scrollto(section){
  $('html, body').animate({
        scrollTop: $("#"+section+"-section").offset().top
    }, 800);
}
function scrollto_horizontal(section){
  if (section == 1){
  $('#horizontal-div').animate({
        scrollLeft: 0
    }, 800);
  }
  if (section == 2){
  $('#horizontal-div').animate({
        scrollLeft: $('html, body').width() + 6
    }, 800);
  }
  if (section == 3){
  $('#horizontal-div').animate({
        scrollLeft: ($('html, body').width() + 6 ) * 2
    }, 800);
  }

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
    }, 800);
    $('#header-wrapper').fadeIn();
}




// CALL GALLERY IN DINING

function toggle_cuisine(content){
$('#'+content).slideToggle("slow");
}

function call_dining_gallery(dir,fileextension,container,group_title,fontstyle,maxheight){
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
            content += '<h2 onclick="toggle_cuisine('+trigger+');" class="'+fontstyle+' cursor_pointer">'+group_title+'&nbsp;<i class="fa fa-angle-down"></i></h2>';
            content += "<hr>";
            content += "<div id='"+container+"_content'>";
            var count = 1;
            var source = [];
            var title = [];
            $(data).find("a:contains(" + fileextension + ")").each(function () {
              total_videos++;
                var filename = this.href.replace(window.location, "").replace("http://", "").replace("localhost/", "").replace("lukslofts2/", "").replace("192.168.149.59/", "").replace(window.location.hostname+"/", "");
                // source[count] = dir + filename;
                source[count] = filename;
                // title[count] = filename.replace(".mp4", "");
                var for_content = filename.replace(".jpg", "");
                for_content = for_content.replace(window.location.hostname+"/", "");

                // title[count] = title[count].replace("_", " ");
                // console.log(filename);




                content += '  <div class="col-lg-4 col-md-12 mb-r">';

                      // <!--Card-->
                content += '      <div class="card card-cascade wider">';

                          // <!--Card image-->
                content += '          <div class="view overlay hm-white-slight dynamic_image_container">';
                content += '              <img src="'+source[count]+'" class="img-fluid" alt="">';
                content += '              <a>';
                content += '                  <div class="mask"></div>';
                content += '              </a>';
                content += '          </div>';
                          // <!--/.Card image-->

                          // <!--Card content-->
                content += '          <div style="min-height:'+maxheight+';max-height:'+maxheight+';height:'+maxheight+';overflow:hidden;"';
                content += '          class="card-block text-justify">';
                              // <!--Category & Title-->
                $.ajax({
                  // url: dir + for_content + '.txt',
                  url: for_content + '.txt',
                  async: false,
                  success: function (data){
                    content += '				<p class="roboto-regular">'+data+'</p>';
                  }
                });


                content += '          </hr>';
                content += '          </div>';
                          // <!--/.Card content-->

                content += '      </div>';
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


    hideLoading(600);
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
            content += '<h2 onclick="toggle_cuisine('+trigger+');" class="'+fontstyle+' cursor_pointer">'+group_title+'&nbsp;<i class="fa fa-angle-down"></i></h2>';
            content += "<hr>";
            content += "<div id='"+container+"_content'>";
            var count = 1;
            var source = [];
            var title = [];
            $(data).find("a:contains(" + fileextension + ")").each(function () {
              total_videos++;
                var filename = this.href.replace(window.location, "").replace("http://", "").replace("localhost/", "").replace("lukslofts2/", "").replace("192.168.149.59/", "").replace(window.location.hostname+"/", "");
                // source[count] = dir + filename;
                source[count] = filename;
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
                content += '              <img src="'+source[count]+'" class="img-fluid" alt="">';
                content += '              <a>';
                content += '                  <div class="mask"></div>';
                content += '              </a>';
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
                  // url: dir + for_content + '.txt',
                  url: for_content + '.txt',
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


    hideLoading(600);
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
            content += '<h2 onclick="toggle_cuisine('+trigger+');" class="'+fontstyle+' cursor_pointer">'+group_title+'&nbsp;<i class="fa fa-angle-down"></i></h2>';
            content += "<hr>";
            content += "<div id='"+container+"_content'>";
            var count = 1;
            var source = [];
            var title = [];
            $(data).find("a:contains(" + fileextension + ")").each(function () {
              total_videos++;
                var filename = this.href.replace(window.location, "").replace("http://", "").replace("localhost/", "").replace("lukslofts2/", "").replace("192.168.149.59/", "").replace(window.location.hostname+"/", "");
                // source[count] = dir + filename;
                source[count] = filename;
                // title[count] = filename.replace(".mp4", "");
                var for_content = filename.replace(fileextension, "");
                    for_content = for_content.replace(window.location.hostname+"/", "");
                // title[count] = title[count].replace("_", " ");
                // console.log(filename);




                content += '  <div class="col-sm-6">';
                content += '      <div class="col-sm-12">';
                content += '          <div style="min-height:'+maxheight+';max-height:'+maxheight+';height:'+maxheight+';overflow:hidden;"';
                content += '          class="card-block text-justify">';
                              // <!--Category & Title-->
                $.ajax({
                  // url: dir + for_content + '.txt',
                  url: for_content + '.txt',
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


    hideLoading(600);
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

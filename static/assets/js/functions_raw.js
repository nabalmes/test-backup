function createCookie(t, e, i) {
    var o;
    if (days) {
        var n = new Date;
        n.setTime(n.getTime() + 60 * i * 60 * 1e3), o = "; expires=" + n.toGMTString()
    } else o = "";
    document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e) + o + "; path=/"
}

function clickHome(t) {
    t && "" != t ? $("#home_main_btn").attr("href").indexOf("../") > -1 ? window.location.href = "../" + t : window.location.href = t : window.location.href = $("#home_main_btn").attr("href")
}

function readCookie(t) {
    for (var e = encodeURIComponent(t) + "=", i = document.cookie.split(";"), o = 0; o < i.length; o++) {
        for (var n = i[o];
            " " === n.charAt(0);) n = n.substring(1, n.length);
        if (0 === n.indexOf(e)) return decodeURIComponent(n.substring(e.length, n.length))
    }
    return null
}

function sethotelier_booking() {
    setTimeout(function() {
        $("body").addClass("navPanel-visible-reverse");
        try {
            $("#promo_div").remove()
        } catch (t) {}
        setTimeout(function() {
            $("body.navPanel-visible-reverse").find("#page-wrapper").unbind("click").click(function() {
                $("body").removeClass("navPanel-visible-reverse")
            })
        }, 10)
    }, 0)
}

function eraseCookie(t) {
    createCookie(t, "", -1)
}
var temp = "",
    img = "";
temp = readCookie("temp"), img = readCookie("img");
var callbackFunction = function(t) {
    t.query.results.channel.item.description.replace("<![CDATA[", "").replace("]]>", "");
    var e = t.query.results.channel.item.condition.code;
    t.query.results.channel.item.condition.text.toLowerCase();
    0 == e && (img = "wi wi-yahoo-0"), 1 == e && (img = "wi wi-yahoo-1"), 2 == e && (img = "wi wi-yahoo-2"), 3 == e && (img = "wi wi-yahoo-3"), 4 == e && (img = "wi wi-yahoo-4"), 5 == e && (img = "wi wi-yahoo-5"), 6 == e && (img = "wi wi-yahoo-6"), 7 == e && (img = "wi wi-yahoo-7"), 8 == e && (img = "wi wi-yahoo-8"), 9 == e && (img = "wi wi-yahoo-9"), 10 == e && (img = "wi wi-yahoo-10"), 11 == e && (img = "wi wi-yahoo-11"), 12 == e && (img = "wi wi-yahoo-12"), 13 == e && (img = "wi wi-yahoo-13"), 14 == e && (img = "wi wi-yahoo-14"), 15 == e && (img = "wi wi-yahoo-15"), 16 == e && (img = "wi wi-yahoo-16"), 17 == e && (img = "wi wi-yahoo-17"), 18 == e && (img = "wi wi-yahoo-18"), 19 == e && (img = "wi wi-yahoo-19"), 20 == e && (img = "wi wi-yahoo-20"), 21 == e && (img = "wi wi-yahoo-21"), 22 == e && (img = "wi wi-yahoo-22"), 23 == e && (img = "wi wi-yahoo-23"), 24 == e && (img = "wi wi-yahoo-24"), 25 == e && (img = "wi wi-yahoo-25"), 26 == e && (img = "wi wi-yahoo-26"), 27 == e && (img = "wi wi-yahoo-27"), 28 == e && (img = "wi wi-yahoo-28"), 29 == e && (img = "wi wi-yahoo-29"), 30 == e && (img = "wi wi-yahoo-30"), 31 == e && (img = "wi wi-yahoo-31"), 32 == e && (img = "wi wi-yahoo-32"), 33 == e && (img = "wi wi-yahoo-33"), 34 == e && (img = "wi wi-yahoo-34"), 35 == e && (img = "wi wi-yahoo-35"), 36 == e && (img = "wi wi-yahoo-36"), 37 == e && (img = "wi wi-yahoo-37"), 38 == e && (img = "wi wi-yahoo-38"), 39 == e && (img = "wi wi-yahoo-39"), 40 == e && (img = "wi wi-yahoo-40"), 41 == e && (img = "wi wi-yahoo-41"), 42 == e && (img = "wi wi-yahoo-42"), 43 == e && (img = "wi wi-yahoo-43"), 44 == e && (img = "wi wi-yahoo-44"), 45 == e && (img = "wi wi-yahoo-45"), 46 == e && (img = "wi wi-yahoo-46"), 47 == e && (img = "wi wi-yahoo-47"), 3200 == e && (img = "wi wi-yahoo-3200"), temp = t.query.results.channel.item.condition.temp, eraseCookie("temp"), createCookie("temp", temp, 1), eraseCookie("img"), createCookie("img", img, 1), $("#temperature_val").text(temp), $("#current_weather_ico").attr("class", img).css("color", "#333")
};

function getWeather() {
    if ($("#loader_weather") && $("#loader_weather").length > 0);
    else {
        $("body").append('<div id="loader_weather" class="hidden"></div>');
        try {
            $("#loader_weather").html("<script src=\"https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='batangas city, ph') and u='c' limit 1&format=json&callback=callbackFunction\"><\/script>")
        } catch (t) {}
    }
}
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function updateClock() {
    var t = new Date,
        e = t.getHours(),
        i = t.getMinutes(),
        o = (t.getSeconds(), t.getDay(), t.getDate()),
        n = t.getMonth(),
        a = t.getFullYear(),
        r = e >= 12 ? " PM" : " AM",
        s = (e = (e %= 12) || 12) + ":" + (i = i < 10 ? "0" + i : i) + r,
        l = "<br />" + months[n] + " " + o + " " + a;
    $(".timer").html(s), $(".datestring").attr("style", "color:#333 !important;").html(l).css("font-size", "0.9em")
}

function getCookie(t) {
    return document.cookie.length > 0 && (c_start = document.cookie.indexOf(t + "="), -1 != c_start) ? (c_start = c_start + t.length + 1, c_end = document.cookie.indexOf(";", c_start), -1 == c_end && (c_end = document.cookie.length), unescape(document.cookie.substring(c_start, c_end))) : ""
}

function showLoading(t) {}

function sethotelierwithdate(t) {
    "https://apac.littlehotelier.com/reservations/lukslofthoteldirect/&locale=en" != $("#select_rate").val() && window.open($("#select_rate").val(), "blank_")
}

function sethotelierwithparams(t, e, i) {
    window.open("https://apac.littlehotelier.com/" + i + "/lukslofthoteldirect/" + e + "?locale=en&" + t, "blank_")
}
$(function() {
    $.ajaxSetup({
        headers: {
            "X-CSRFToken": getCookie("csrftoken")
        }
    })
});
try {
    $.ajax({
        method: "get",
        url: $("#home_main_btn").attr("href").indexOf("../") > -1 ? "../xml/rates.json" : "xml/rates.json",
        success: function(t) {
            $("body").append('<div id="booknow_div" class="" align="right" style="display:block;position:fixed;top:0px;right:0px;width:' + $("#navPanel").width() + 'px !important;border-radius:0px;position:fixed;background:#333;padding:0px;z-index:99999;font-size:0.8em;"></div>');
            var e = $('<div style="padding:20px;background:#fff;width:100%;text-align:left;height:' + .9 * window.screen.height + "px !important;max-height:" + .9 * window.screen.height + 'px !important;overflow-y:auto;" class="reserve_toggle"></div>');
            e.append('<br class="hide-small"/><br class="hide-small"/><br /><p id="booknow_div_hide"><span class="pull-left pointer"><i class="fa fa-angle-left"></i> <span id="inside_booknow_div">BACK</span></span></p>');
            var i = $("<br /><form style='padding-left:10px;margin-bottom:0px !important;'><select style='border-radius:0px;opacity:0.87;display:block;cursor:pointer;background:#fff !important;width:90%;' class='form-control dining_services_font' id='select_rate'></select> </form>"),
                o = t.properties.property.rateplans.rateplan;
            if (o && o.length > 0) {
                i.find("select").append("<option style='font-weight:normal;padding:5px;width:100%;' value='https://apac.littlehotelier.com/reservations/lukslofthoteldirect/?locale=en' >&nbsp;&nbsp;Select Package&nbsp;</option>");
                for (var n = 0; n < o.length; n++) i.find("select").append("<option style='font-weight:normal;padding:5px;' value='https://apac.littlehotelier.com/reservations/lukslofthoteldirect/" + o[n].id.text + "/?locale=en' >&nbsp;&#9989;&nbsp;" + o[n].name + "&nbsp;</option>")
            }
            e.append(i), e.append('<a onclick="sethotelierwithdate(this)" data-id="" class="btn btn-danger" style="border-radius:0px;background:#333;font-size:0.8em;font-weight:normal;width:87%;margin-left:10px;padding:10px;margin-top:-5px;">View Selected Package!</a>'), e.append("<br />"), e.append('<a onclick="sethotelier()" class="btn btn-danger" style="border-radius:0px;background:#333;font-size:0.8em;font-weight:normal;padding:10px;width:87%;margin-left:10px;margin-bottom:10px;">Check Rates and Offers!</a><br />'), e.append('<h5 style="font-size:0.8em;color:#e31d28 !important;font-weight:normal;padding:15px;text-align:left;padding-left:0px;margin-top:0px;padding:0px;"> </h5>'), e.append('<div class="container"><div class="col-md-12" style="color:#fff;"><br /><br /><span id="weather-label" style="font-size:1em !important;color:#333 !important;">Local Weather</span><br><span style="color:#333 !important;font-size:1.3em;font-weight:bold;" id="temperature_val"></span><span style="color:#333 !important;font-size:1.3em;font-weight:bold;" class="degc">&degC</span> <i style="font-size:1.3em;font-weight:bold;" id="current_weather_ico" > </i><br><span class="smalleraddress">Batangas City Philippines</span></div></div>'), e.append('<div class="container"><div class="col-md-12" style="color:#fff;"><br /><br /><span id="time-label" style="font-size:1em !important;color:#333 !important;">Time/Date</span><br><span style="margin:0px;padding:0px !important;color:#333 !important;font-size:1.3em;font-weight:bold;" class="timer"></span><span style="color:#333 !important;" class="datestring"></span></div></div>'), e.append("<br />"), e.append("<br />"), e.append("<br />"), $("#booknow_div").append(e), $(".smalleraddress").attr("style", "color:#333 !important;").css("font-size", "0.8em"), updateClock(), getWeather(), $("#booknow_div_hide").click(function() {
                $("body").removeClass("navPanel-visible-reverse")
            })
        }
    })
} catch (t) {}

function openpage(t) {
    window.open(t, "blank_")
}

function close_promo_div() {
    $("#promo_div").hide()
}

function slide_midd() {
    $("html, #page-wrapper").animate({
        scrollTop: $("#header-wrapper").height() - 50
    }, 200)
}
"#promo" == window.location.hash && (window.location.href = $("#home_main_btn").attr("href").indexOf("../") > -1 ? "../promo" : "promo"), "#honeymoon" == window.location.hash && (window.location.href = $("#home_main_btn").attr("href").indexOf("../") > -1 ? "../accommodation/honeymoon.html" : "accommodation/honeymoon.html"), "#contact" == window.location.hash && (window.location.href = $("#home_main_btn").attr("href").indexOf("../") > -1 ? "../contact" : "contact");
var footer_div = $(".footer_div").clone();
$(".footer_div").remove(), footer_div.appendTo("#page-wrapper"), $("#highlights").find("h1") && $("#highlights").find("h1").length > 0 && Modernizr.mq("(max-width: 768px)") ? ($("#header_hover").append('<div id="slide_middiv" style="z-index:999;cursor:pointer;position:absolute;bottom:18px;width:100%;" onclick="slide_midd();" ><span style="position:absolute;bottom:38px;left:10px;color:#fff !important;width:100%;text-shadow:none !important;">' + $("#highlights").find("h1").html() + '</span><br /><span  class="" style="z-index:999;cursor:pointer;position:absolute;bottom:18px;color:#fff !important;width:20px;height:20px;border-left:1px solid #fff;border-bottom:1px solid #fff;transform:rotate(-45deg);"></span></div>'), $("#slide_middiv").find("span:nth-child(2)").attr("style", "color:#FFF !important"), setTimeout(function() {
    $("#highlights h1").remove(), $("#highlights .elegant-line-decor").remove()
}, 10)) : $("#header_hover").append('<div id="slide_middiv" style="z-index:999;cursor:pointer;position:absolute;bottom:18px;width:100%;" onclick="slide_midd();" ><span style="position:absolute;bottom:38px;left:10px;color:#fff !important;width:100%;text-shadow:none !important;">Experience<br />Luxury in Luks Lofts</span><br /><span  class="" style="z-index:999;cursor:pointer;position:absolute;bottom:18px;color:#fff !important;width:20px;height:20px;border-left:1px solid #fff;border-bottom:1px solid #fff;transform:rotate(-45deg);"></span></div>'), Modernizr.mq("(min-width: 768px)") ? ($("body").append("<style>body{height:" + $(window).height() + "px !important;max-height:" + $(window).height() + "px !important;overflow-y:hidden !important;overflow-x:hidden !important;}</style>"), $("body").append("<style>body.navPanel-visible #page-wrapper{max-height:" + $(window).height() + "px !important;height:" + $(window).height() + "px !important;overflow-y:scroll !important;overflow-x:hidden !important;}</style>"), $("body").append("<style>body.navPanel-visible-reverse #page-wrapper{max-height:" + $(window).height() + "px !important;height:" + $(window).height() + "px !important;overflow-y:scroll !important;overflow-x:hidden !important;}</style>"), $("body").append("<style>body #page-wrapper{height:" + $(window).height() + "px !important;max-height:" + $(window).height() + "px !important;overflow-y:scroll !important;overflow-x:hidden;}</style>")) : ($("body").append("<style>body{height:" + .9 * window.screen.height + "px !important;max-height:" + .9 * window.screen.height + "px !important;overflow-y:hidden !important;overflow-x:hidden !important;}</style>"), $("body").append("<style>body.navPanel-visible #page-wrapper{max-height:" + .9 * window.screen.height + "px !important;height:" + .9 * window.screen.height + "px !important;overflow-y:scroll !important;overflow-x:hidden !important;}</style>"), $("body").append("<style>body.navPanel-visible-reverse #page-wrapper{max-height:" + .9 * window.screen.height + "px !important;height:" + .9 * window.screen.height + "px !important;overflow-y:scroll !important;overflow-x:hidden !important;}</style>"), $("body").append("<style>body #page-wrapper{height:" + .9 * window.screen.height + "px !important;max-height:" + .9 * window.screen.height + "px !important;overflow-y:scroll !important;overflow-x:hidden;}</style>")), $("body").append('<div id="static_style" style="display:none;"></div>');
var cats_nav = $("#navPanel").find("a");
if ($("#header_hover").attr("style", "padding:0px;margin:0px;background:transparent !important;background-size:100% 150% !important;background-repeat:no-repeat !important;overflow:hidden;background-position:center center !important;"), $("#page-wrapper").append('<div class="top_icon" style="z-index:10000 !important;position:fixed;top:10px;right:20px;cursor:pointer;font-size:1.4em;"><a id="langtrigger" style=""><span  data-trans-word="Language" class="data-trans-word hide-large" style="vertical-align:middle;font-size:0.5em !important;padding:1em;color:#FFF !important;">语言</span> <i class="fa fa-angle-down hide-large" style="color:#fff !important;"></i></a><span class="hide-small">&nbsp;&nbsp;</span><a class="hide-small" style="color:#fff !important;" href="'+(window.screen.width > 700 ? ($("#home_main_btn").attr("href").indexOf("../") > -1 ? "../" : "") + "contact" : "tel:+63433021000")+'" ><img src="' + ($("#home_main_btn").attr("href").indexOf("../") > -1 ? "../2018/icons/top/phone.png" : "2018/icons/top/phone.png") + '" style="height:1em;" /></a><span class="hide-small">&nbsp;&nbsp;</span><a  style="color:#fff !important;" class="hide-small" onclick="clickHome(\'about/location.html\');"><img src="' + ($("#home_main_btn").attr("href").indexOf("../") > -1 ? "../2018/icons/top/marker.png" : "2018/icons/top/marker.png") + '" style="height:1em;" /></a><span class="hide-small">&nbsp;&nbsp;</span><a class="hide-small" style="color:#fff !important;" onclick="clickHome(\'contact\');" ><img src="' + ($("#home_main_btn").attr("href").indexOf("../") > -1 ? "../2018/icons/top/envelope.png" : "2018/icons/top/envelope.png") + '" style="height:1em;"></a><i class="hide-small"></i></div>'), $(".top_icon").prepend('<a href="' + ($("#home_main_btn").attr("href").indexOf("../") > -1 ? "../" : "") + 'zh-CN" class="language-btn  hide-small"><span style="color:#fff !important;font-size:0.6em !important;" data-language="zh" > 中文 </span>&nbsp;'), $(".top_icon").prepend('<a class="language-btn  hide-small"><span style="color:#fff !important;font-size:0.6em !important;" data-language="default" > English </span>&nbsp;&nbsp;'), $("body").append('<div id="language_modal" class="col-md-12" style="display:none;z-index:99999999;background:#000;position:fixed;top:0px;width:100%;min-height:200px;height:' + window.screen.height + 'px;"><center id="lang_modal_innder"></center><a id="close_language" style="position:absolute;top:10px;right:10px;"><img src="' + ($("#home_main_btn").attr("href").indexOf("../") > -1 ? "../2018/icons/cancel.png" : "2018/icons/cancel.png") + '" style="height:2em;" /></a></div>'), $("#lang_modal_innder").append("<br /><br />"), $("#lang_modal_innder").append('<a class="language-btn"><span style="color:#fff !important;font-size:0.6em;" data-language="default" > English </span><hr style="width:30%;border:0.03em solid #aaa !important;" />'), $("#lang_modal_innder").append('<a  href="' + ($("#home_main_btn").attr("href").indexOf("../") > -1 ? "../" : "") + 'zh-CN" class="language-btn"><span style="color:#fff !important;font-size:0.6em;" data-language="zh" > 中文 </span></a><hr style="width:30%;border:0.03em solid #aaa !important;" />'), $("#lang_modal_innder").append("<br /><br />"), $("#lang_modal_innder").append('<a style="color:#fff !important;" href="tel:+63433021000" ><img src="' + ($("#home_main_btn").attr("href").indexOf("../") > -1 ? "../2018/icons/top/phone.png" : "2018/icons/top/phone.png") + '" style="height:1.5em;" /></a><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><a  style="color:#fff !important;"  onclick="clickHome(\'about/location.html\');"><img src="' + ($("#home_main_btn").attr("href").indexOf("../") > -1 ? "../2018/icons/top/marker.png" : "2018/icons/top/marker.png") + '" style="height:1.5em;" /></a><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><a style="color:#fff !important;" onclick="clickHome(\'contact\');" ><img src="' + ($("#home_main_btn").attr("href").indexOf("../") > -1 ? "../2018/icons/top/envelope.png" : "2018/icons/top/envelope.png") + '" style="height:1.5em;"></a>'), $("#langtrigger").click(function() {
        $("#language_modal").show()
    }), $("#close_language").click(function() {
        $("#language_modal").hide()
    }), Modernizr.mq("(min-width: 768px)") ? $("#page-wrapper").append('<div id="scollbg"  style="z-index:997;position:fixed;top:0px;left:0px;width:98.8%;height:50px;background:#FFF ;"></div>') : $("#page-wrapper").append('<div id="scollbg"  style="z-index:997;position:fixed;top:0px;left:0px;width:100%;height:50px;background:#FFF ;"></div>'), $("#scollbg").css("opacity", 0), $("body.no-book") && $("body.no-book").length > 0 ? ($("#addedlogo").removeClass("hidden"), $("#scollbg").css("opacity", 1), $(".top_icon img").css("filter", "brightness(20%)").css("-webkit-filter", "brightness(20%)").css("-moz-filter", "brightness(20%)").css("-ms-filter", "brightness(20%)").css("-o-filter", "brightness(20%)"), $(".top_icon span").css("filter", "brightness(20%)").css("-webkit-filter", "brightness(20%)").css("-moz-filter", "brightness(20%)").css("-ms-filter", "brightness(20%)").css("-o-filter", "brightness(20%)"), $(".top_icon i").css("filter", "brightness(20%)").css("-webkit-filter", "brightness(20%)").css("-moz-filter", "brightness(20%)").css("-ms-filter", "brightness(20%)").css("-o-filter", "brightness(20%)")) : $("#page-wrapper").scroll(function() {
        $(this).scrollTop() > 10 ? ($("#addedlogo").removeClass("hidden"), $("#scollbg").css("opacity", 1), $(".top_icon img").css("filter", "brightness(20%)").css("-webkit-filter", "brightness(20%)").css("-moz-filter", "brightness(20%)").css("-ms-filter", "brightness(20%)").css("-o-filter", "brightness(20%)"), $(".top_icon span").css("filter", "brightness(20%)").css("-webkit-filter", "brightness(20%)").css("-moz-filter", "brightness(20%)").css("-ms-filter", "brightness(20%)").css("-o-filter", "brightness(20%)"), $(".top_icon i").css("filter", "brightness(20%)").css("-webkit-filter", "brightness(20%)").css("-moz-filter", "brightness(20%)").css("-ms-filter", "brightness(20%)").css("-o-filter", "brightness(20%)")) : ($("#addedlogo").addClass("hidden"), $("#scollbg").css("opacity", 0), $(".top_icon img").css("filter", "brightness(100%)").css("-webkit-filter", "brightness(100%)").css("-moz-filter", "brightness(100%)").css("-ms-filter", "brightness(100%)").css("-o-filter", "brightness(100%)"), $(".top_icon span").css("filter", "brightness(100%)").css("-webkit-filter", "brightness(100%)").css("-moz-filter", "brightness(100%)").css("-ms-filter", "brightness(100%)").css("-o-filter", "brightness(100%)"), $(".top_icon i").css("filter", "brightness(100%)").css("-webkit-filter", "brightness(100%)").css("-moz-filter", "brightness(100%)").css("-ms-filter", "brightness(100%)").css("-o-filter", "brightness(100%)"))
    }), $(".style1").removeClass("style1"), $(".style11").removeClass("style11"), $(".style3").removeClass("style3"), $(".modal_container").removeClass("modal_container"), $("#footer_details_map br:first-child").remove(), $("#footer_details_map br:first-child").remove(), $('#titleBar a[href="#navPanel"]').html("menu"), Modernizr.mq("(min-width: 768px)")) {
    $("body.no-book") && $("body.no-book").length > 0 ? $("#page-wrapper").append('<img onclick="clickHome();" id="addedlogo" class="" src="' + ($("#home_main_btn").attr("href").indexOf("../") > -1 ? "../images/top-logo2.png" : "images/top-logo2.png") + '" style="height:48px;width:auto;position:fixed;left:36%;margin-top:4px;z-index:999990;" />') : $("#page-wrapper").append('<img onclick="clickHome();" id="addedlogo" class="hidden" src="' + ($("#home_main_btn").attr("href").indexOf("../") > -1 ? "../images/top-logo2.png" : "images/top-logo2.png") + '" style="height:48px;width:auto;position:fixed;left:36%;margin-top:4px;z-index:999990;" />'), $("#header-wrapper .col-md-7").attr("style", "min-height:" + .758 * $(window).width() + "px !important;height:" + .758 * $(window).width() + "px !important;"), $("#header_carousel").attr("style", "min-height:" + .758 * $(window).width() + "px !important;height:" + .758 * $(window).width() + "px !important;position:absolute !important;top:0px;left:0px;");
    try {
        $("video").attr("style", $("video").attr("style") + "width:100% !important;")
    } catch (t) {}
    $("#scollbg").css("height", "60px"), $(".top_icon img").css("height", "1.2em").css("margin-right", "20px"), Modernizr.mq("(max-width: 1400px)") ? ($("#logo h2").attr("style", $("#logo h2").attr("style") + "text-align:left !important;margin-top:10%;text-transform:none !important;"), $("#logo h2 a").attr("style", $("#logo h2 a").attr("style") + "text-align:left !important;font-style:italic;font-family:Times New Roman !important;font-size:0.9em !important;"), $("#logo img").attr("style", $("#logo img").attr("style") + "width:40% !important;margin-top:8%;margin-left:20%;")) : ($("#logo h2").attr("style", $("#logo h2").attr("style") + "text-align:left !important;margin-top:0%;"), $("#logo h2 a").attr("style", $("#logo h2 a").attr("style") + "text-align:left !important;font-style:italic;font-family:Times New Roman !important;font-size:0.9em !important;"), $("#logo img").attr("style", $("#logo img").attr("style") + "width:40% !important;margin-top:5%;margin-left:20%;")), $("#logo").css("top", $("#header-wrapper").height() - $("#logo").height() - 150), $("body.no-book") && $("body.no-book").length > 0 || $("#header-wrapper").append('<img onclick="clickHome();" id="centr_logo" class="filter_white pointer" src="' + ($("#home_main_btn").attr("href").indexOf("../") > -1 ? "../2018/icons/logo-thin.png" : "2018/icons/logo-thin.png") + '"  />');
    for (var interval_chat = setInterval(function() {
            $(".purechat-widget-title-link").attr("style", "font-family:cinzel !important;"), "font-family:cinzel !important;" == $(".purechat-widget-title-link").attr("style") && clearInterval(interval_chat)
        }, 300), parents = $("#nav ul").find("ul"), i = 0; i < parents.length; i++) $(parents[i]).hover(function() {
        $($(this).parent().find("a")[0]).addClass("active")
    }, function() {
        $($(this).parent().find("a")[0]).removeClass("active")
    });
    $("#header-wrapper").attr("style", "overflow: hidden; margin:0px 0px 0px 0px !important; padding: 0px; z-index: 0;width:100%;left:0px !important;"), $("body").append("<script type='text/javascript' data-cfasync='true'>window.purechatApi = { l: [], t: [], on: function () { this.l.push(arguments); } }; (function () { var done = false; var script = document.createElement('script'); script.async = true; script.type = 'text/javascript'; script.src = 'https://app.purechat.com/VisitorWidget/WidgetScript'; document.getElementsByTagName('HEAD').item(0).appendChild(script); script.onreadystatechange = script.onload = function (e) { if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) { var w = new PCWidget({c: '12d9f278-62b7-4c5e-9c11-61942dea28bc', f: true }); done = true; } }; })();<\/script>")
} else {
    $("body.no-book") && $("body.no-book").length > 0 ? $("#page-wrapper").append('<img onclick="clickHome();" id="addedlogo" class="" src="' + ($("#home_main_btn").attr("href").indexOf("../") > -1 ? "../images/top-logo2.png" : "images/top-logo2.png") + '" style="width:auto;height:46px;position:fixed;left:36%;margin-top:2px;z-index:999999;" />') : $("#page-wrapper").append('<img onclick="clickHome();" id="addedlogo" class="hidden" src="' + ($("#home_main_btn").attr("href").indexOf("../") > -1 ? "../images/top-logo2.png" : "images/top-logo2.png") + '" style="width:auto;height:46px;position:fixed;left:36%;margin-top:2px;z-index:999999;" />'), $(".triangle_bg_top").remove();
    try {
        $('p[style="width:110%;"]').attr("style", "width:100% !important;"), $('p[style="width:110%;text-align:justify;letter-spacing:1px;"]').attr("style", "width:100% !important;")
    } catch (t) {}
    $("#nav a.link").attr("style", "color:#FFF !important;"), $(".top_padd_sm").css("padding-top", "20px"), Modernizr.mq("(max-width: 580px)"), $("#header-wrapper .col-md-7").attr("style", "min-height:" + .758 * $(window).width() + "px !important;height:" + .758 * $(window).width() + "px !important;max-height:" + .758 * $(window).width() + "px !important;"), $("#header_carousel").attr("style", "min-height:" + .758 * $(window).width() + "px !important;height:" + .758 * $(window).width() + "px !important;max-height:" + .758 * $(window).width() + "px !important;position:absolute !important;top:0px;left:0px;"), $("nav a.link").attr("style", "color:#fff !important;font-family:arial !important;");
    var top_slogan = $("#highlights h1").clone();
    $("#highlights h1").css("font-size", "0.8em"), $(".hidden-small").hide(), $(".hide-small").hide(), $("#header #logo p").remove(), $("#header #logo img").attr("style", "width:0.5em;"), $("#dining_nav_container").css("height", "80px");
    var logo_text = $("#header #logo h2 a").html();
    Modernizr.mq("(max-width: 580px)") ? ($("#header #logo h2 a").html('<img onclick="clickHome();" id="luks_logo_sm" class="filter_white pointer" src="' + ($("#home_main_btn").attr("href").indexOf("../") > -1 ? "../2018/icons/logo-thin.png" : "2018/icons/logo-thin.png") + '" style="top:90px !important;width:30% !important;height:auto;" /><p style="color:#fff !important;margin-top:0%;font-size:0.5em;width:100%;text-align:center !important;left:0px !important;top:0px !important;font-family:Times New Roman !important;">' + logo_text + "</p>"), $("#header #logo h2 a").attr("style", "font-family:Times New Roman !important;font-style:italic;font-size:1.5em !important;line-height:1.3em;margin-top:-2% !important;text-shadow:0px 2px 15px #555555  !important;opacity:1;text-align:center !important;width:100% !important;left:0px !important;")) : ($("#header #logo h2 a").html('<img onclick="clickHome();" id="luks_logo_sm" class="filter_white pointer" src="' + ($("#home_main_btn").attr("href").indexOf("../") > -1 ? "../2018/icons/logo-thin.png" : "2018/icons/logo-thin.png") + '" style="top:90px !important;width:16% !important;height:auto;" /><p style="color:#fff !important;margin-top:0%;font-size:0.4em;width:100%;text-align:center !important;left:0px !important;top:0px !important;font-family:Times New Roman !important;">' + logo_text + "</p>"), $("#header #logo h2 a").attr("style", "font-family:Times New Roman !important;font-style:italic;font-size:1em !important;line-height:0.6em;margin-top:0% !important;text-shadow:0px 2px 15px #555555  !important;opacity:1;text-align:center !important;padding:0px !important;width:100% !important;left:0px !important;"));
    var logo_logo = $("#logo #luks_logo_sm").clone().attr("id", "luks_logo");
    $("#logo #luks_logo_sm").remove(), $("#header-wrapper").append(logo_logo), $("#luks_logo").css("z-index", "99999")
}

function scrollto(t) {
    $("html, body").animate({
        scrollTop: $("#" + t + "-section").offset().top
    }, 100)
}

function scrollto_elem(t) {
    $("html, body").animate({
        scrollTop: $(t).offset().top
    }, 100)
}

function to_top() {
    $("html, body").animate({
        scrollTop: $("body").offset().top
    }, 200)
}

function sethotelier() {
    window.open("https://apac.littlehotelier.com/properties/lukslofthoteldirect?locale=en")
}

function hovering_change() {
    $(".hover_swap_img").hover(function(t) {
        $(this).attr("src").indexOf("collage.png") >= 0 && $(this).attr("src", $(this).attr("src").replace("collage.png", "collage_hvr.png"))
    }, function(t) {
        $(this).attr("src").indexOf("collage_hvr.png") >= 0 && $(this).attr("src", $(this).attr("src").replace("collage_hvr.png", "collage.png"))
    })
}

function travel_agency() {
    window.location = "https://lukslofts.com/lukslofts_review.html"
}

function click_caller() {
    $("#call_us").click(), console.log("call_initialized")
}

function open_dialog_fb(t) {
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + t + "&", "Luks Lofts Luxury Hotel", "location,status,scrollbars,resizable,width=300, height=300")
}

function open_dialog_twitter(t) {
    window.open("https://twitter.com/home?status=" + encodeURIComponent(t), "Luks Lofts Luxury Hotel", "location,status,scrollbars,resizable,width=500, height=500")
}
$("#page-wrapper").focus(), $(document).ready(function() {
    $("body.no-book") && $("body.no-book").length > 0 && $("#header-wrapper").remove()
}), Modernizr.mq("(max-width: 768px)") && ($("#header-wrapper").attr("style", $("#header-wrapper").attr("style") + "font-size:0.7em !important;"), $("#page_container p").attr("style", $("#page_container p").attr("style") + "font-size:0.8em !important;"), setTimeout(function() {
    $(".data-image-translate").attr("style", $(".data-image-translate").attr("style") + "font-size:0.6em !important;"), $(".features_item p").attr("style", $(".features_item p").attr("style") + "font-size:0.4em !important;")
}, 10)), $(document).ready(function() {
    $("body").removeClass("overflow_hidden"), $("#loader-wrapper").hide()
});

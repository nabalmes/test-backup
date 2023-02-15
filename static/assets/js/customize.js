// Luxury Read More
$('.read-more-luxury').click(function () {
    $('.luxury-para-02').toggle(1000);
    $('.luxury-para-03').toggle(500);
    $(this).toggleClass('read-more');
    // $(this).text('Read less ').append('<i class="fas fa-chevron-up"></i>');

    $.fn.extend({
        toggleText: function (a, b) {
            return this.text(this.text() == b ? a : b)
            // .append('<i class="fas fa-chevron-up"></i>');
        }
    });

    $(this).toggleText("Read more", "Read less");
});

$('.read-more-honeymoon').click(function () {
    $('.honeymoon-para-02').toggle(1000);
    $('.honeymoon-para-03').toggle(500);
    $(this).toggleClass('read-more');
    // $(this).text('Read less ').append('<i class="fas fa-chevron-up"></i>');

    $.fn.extend({
        toggleText: function (a, b) {
            return this.text(this.text() == b ? a : b)
            // .append('<i class="fas fa-chevron-up"></i>');
        }
    });

    $(this).toggleText("Read more", "Read less");
});

$('.read-more-fest').click(function () {
    $('.fest-para-02').toggle(1000);
    $(this).toggleClass('read-more');
    // $(this).text('Read less ').append('<i class="fas fa-chevron-up"></i>');

    $.fn.extend({
        toggleText: function (a, b) {
            return this.text(this.text() == b ? a : b)
            // .append('<i class="fas fa-chevron-up"></i>');
        }
    });

    $(this).toggleText("Read more", "Read less");
});

function AppendFBbutton(facebook_link, container) {
    var shareFB = $('<a>').attr({
        style: "font-family: var(--font-serif) !important;",
        class: "pull-right",
        href: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(facebook_link),
        onclick: "javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;",
        target: "_blank",
        title: "Share on Facebook"
    }).append(
        '<i class="fab fa-facebook-f"></i>'
    );

    container.append(shareFB);

};

$(".hero-scroll").click(function () {
    $('html, #page-wrapper').animate({
        scrollTop: $(".hero-slider").height() - 50
    }, 600);
});

$(".explore-pulse, .explore-btn").click(function () {
    $('html, #page-wrapper').animate({
        scrollTop: $(".hero-slider").height() - 100
    }, 600);
});

$("document").ready(function () {
    $(".tab-slider--body").hide();
    $(".tab-slider--body:first").show();
});

$(".tab-slider--nav li").click(function () {
    $(".tab-slider--body").hide();

    var activeTab = $(this).attr("rel");

    $("#" + activeTab).fadeIn();

    if ($(this).attr("rel") == "tab2") {
        $('.tab-slider--tabs').addClass('slide');
    } else {
        $('.tab-slider--tabs').removeClass('slide');
    }
    
    $(".tab-slider--nav li").removeClass("active");
    $(this).addClass("active");
});

var acc = document.getElementsByClassName("luks-accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active-accordion");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
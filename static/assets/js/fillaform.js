function sendForm(form, onComplete) {
    $('#contact-form-loading').removeClass('hidden');
    var inputs = form.find('input, select, textarea');

    var obj = {};
    inputs.each(function (i, f) {
        var f = $(inputs[i]);

        if (!(f.attr('id') || f.attr('name'))) { return; }
        obj[String(f.attr('id') || f.attr('name'))] = f.val();
    });
    //
    $.post('https://fillaform.integritynet.biz', { data: JSON.stringify(obj), 'url': window.location.toString() }, function () {
        if (onComplete != undefined) {
            onComplete();
        } else {
            $('#contact-form-loading').addClass('hidden');
            $('.form-wrapper').addClass('hidden');
            $('.form-message').fadeIn();
        }
    });
}

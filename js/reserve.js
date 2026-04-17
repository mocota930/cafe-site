
$(function () {
    $('.accordion-btn').click(function () {
        var $form = $('.form-wrapper');

        if ($form.is(':visible')) {
            $form.slideUp();
        } else {
            $form.slideDown();
        }
    });

});
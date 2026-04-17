$(function () {
    // ハンバーガーメニュークラス着脱
    $('.hamburger-btn').click(function () {
        $('#hamburger-menu').toggleClass('active');
        $('#navi').toggleClass('active');
    });

    $('.nav-list a').click(function () {
        $('#hamburger-menu').removeClass('active');
        $('#navi').removeClass('active');
    });
});
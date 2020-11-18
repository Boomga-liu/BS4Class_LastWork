$(document).ready(function () {
    $('.nav-link').click(function (e) {
        $(this).parent().addClass('active').siblings().removeClass('active');
    })
})
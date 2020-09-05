/*Add white background to navbar when scrolled*/
$(function () {
    $(document).scroll(function () {
        var $nav = $(".main-menu");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

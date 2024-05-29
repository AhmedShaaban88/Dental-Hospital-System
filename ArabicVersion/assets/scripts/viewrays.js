$(document).on("onInit.fb", function (e, instance) {
    if($(".fancybox-toolbar").find("#rotate_button").length === 0){
        $(".fancybox-toolbar").prepend('<button id="rotate_button" title="Rotate" class="fancybox-button"><i class="icon-rotate-ccw3"></i></button>')
    }
    if($(".fancybox-toolbar").find("#delete_button").length === 0){
        $(".fancybox-toolbar").prepend('<button id="delete_button" title="Delete" class="fancybox-button" data-target="#deleteXRays" data-toggle="modal"><i class="icon-trash-alt"></i></button>')
    }
    var click = 1;
    $(".fancybox-toolbar").on("click", "#rotate_button",function () {
        var n = 90 * click++;
        $(".fancybox-image").css("webkitTransform", 'rotate(' + n + 'deg)');
        $(".fancybox-image").css("mozTransform", "rotate(" + n + 'deg)');
    })
});

$('[data-fancybox="gallery"]').fancybox({
    buttons: [
        "zoom",
        "slideShow",
        "fullScreen",
        "download",
        "thumbs",
        "close"
    ],
});

const from = $("#fromdate");
const to = $("#todate");
$.fn.datepicker.dates['ar'] = {
    days: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعه', 'السبت'],
    daysShort: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعه', 'السبت'],
    daysMin: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعه', 'السبت'],
    months: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو', 'اغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر'],
    monthsShort: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو', 'اغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر'],
    today: "اليوم",
};
from.datepicker('destroy');
from.datepicker({
    language: 'ar',
    autoclose: true,
    format: "yyyy/mm/dd",

});
to.datepicker('destroy');
to.datepicker({
    language: 'ar',
    autoclose: true,
    format: "yyyy/mm/dd",

});

var form = $("form:first");
const loaderContent = $("#loader-content");
const beforeSearch = $("#before-search");
const raysSelect = $("select:eq(0)");
const raysHelper = $(".help:first");
form.on("submit",function (e) {
    if (raysSelect.val() === ''){
        raysHelper.removeClass('hidden');
        e.preventDefault();
    }else{
        raysHelper.addClass('hidden');
        loaderContent.removeClass('hidden');
        beforeSearch.hide();
    }
});

raysSelect.on("change", function () {
    if(!raysHelper.hasClass('hidden')){
        raysHelper.addClass('hidden');
    }
});

//gotoup
$("#goTop").click(function () {
    $("html, body").animate( {
        scrollTop: $(this.hash).offset().top
    },800)
});


// edit patient info
const editBtn = $("#editBtn");
const returnBtn = $("#returnBtn");
const editPatientForm = $("#editPatient");
const staticPart = $("#static");
const adult = $("#adult");
const phoneRegex = /^[+]?[(]?[0-9]{3,}[)]?[-\s.]?[0-9]{3,}[-\s.]?[0-9]{4,}$/ig;
const phone1 = $("#phone1");
const phone2 = $("#phone2");
const phone1Help = $("#phone1Help");
const phone2Help = $("#phone2Help");
const typeHelp = $("#typeHelp");
const treeHeader = $(".parent-tree-header");
const treeHeader2 = $(".parent-tree-header2");

editBtn.click(function () {
   editPatientForm.show();
   staticPart.hide();
});
returnBtn.click(function () {
   editPatientForm.hide();
   staticPart.show();
});

const birth = $(".birth");
$.fn.datepicker.dates['ar'] = {
    days: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعه', 'السبت'],
    daysShort: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعه', 'السبت'],
    daysMin: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعه', 'السبت'],
    months: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو', 'اغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر'],
    monthsShort: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو', 'اغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر'],
    today: "اليوم",
};
birth.datepicker('destroy');
birth.datepicker({
    language: 'ar',
    autoclose: true,
    format: "yyyy/mm/dd",

});
const patientEditForm = $("#editPatientForm");
const nameRegex = /^([\u0600-\u06FF\s]){3,}$/;
const patientName = $("#pName");
const patientNameHelper = $("#pNameHelper");
patientName.on('input', function () {
    if(!nameRegex.test($(this).val().trim())){
        patientNameHelper.removeClass('hidden');
    }else {
        patientNameHelper.addClass('hidden');
    }
});

birth.on("change", function () {
    if(year - $(this).val().substr(0,4) > 12){
        adult.text("بالغ");
    }else{
        adult.text("طفل");
    }
});
phone1.on('input', function () {
    if(!phoneRegex.test($(this).val().trim())){
        phone1Help.removeClass('hidden');
    }else {
        phone1Help.addClass('hidden');
    }
});
phone2.on('input', function () {
    if(!phoneRegex.test($(this).val().trim())){
        phone2Help.removeClass('hidden');
    }else {
        phone2Help.addClass('hidden');
    }
});

patientEditForm.on("reset",function () {
    $("input").not("#pCode").each(function (i,v) {
        $(this).attr("value", "")
    });
    $(".checked").each(function () {
        $(this).removeClass("checked");
    })
});

patientEditForm.on("submit", function (e) {
    if(!nameRegex.test(patientName.val().trim())){
        patientNameHelper.removeClass('hidden');
        patientName.focus();
        e.preventDefault();
    }
    else if($(".checked").length === 0){
        patientNameHelper.addClass('hidden');
        typeHelp.removeClass('hidden');
        $(".radio-inline").focus();
        e.preventDefault();
    }
});



$(".post-even").removeClass("post-even").addClass("post-full");

var form = $("#raysForm");
const loaderContent = $("#loader-content");
const beforeSearch = $("#before-search");
const raysSelect = $("#rayTypes");
const raysHelper = $("#raysTypesHelper");

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

treeHeader.click(function () {
    $(this).parents('.tree-parent').next('.child-container').toggle(300);
});
treeHeader2.click(function () {
    debugger
    $(this).parents('.tree-parent').next('.child-container').toggle(300);
});


// chart modal
const teeth = $("#teeth-table tr td");
const teethModal = $(".teeth-modal:first-child");
const toothModal = $("#tooth-details");
const returnBtnModal = $("#returnBtnModal");
teeth.on("click", function () {
   teethModal.addClass("hidden");
   toothModal.removeClass("hidden");
});
returnBtnModal.on("click", function () {
   teethModal.removeClass("hidden");
   toothModal.addClass("hidden");
});

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


var modalTemplate = '<div class="modal-dialog modal-lg" role="document">\n' +
    '  <div class="modal-content">\n' +
    '    <div class="modal-header">\n' +
    '      <div class="kv-zoom-actions btn-group">{toggleheader}{fullscreen}{borderless}{close}</div>\n' +
    '      <h6 class="modal-title">{heading} <small><span class="kv-zoom-title"></span></small></h6>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '      <div class="floating-buttons btn-group"></div>\n' +
    '      <div class="kv-zoom-body file-zoom-content"></div>\n' + '{prev} {next}\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n';

// Buttons inside zoom modal
var previewZoomButtonClasses = {
    toggleheader: 'btn btn-default btn-icon btn-xs btn-header-toggle',
    fullscreen: 'btn btn-default btn-icon btn-xs',
    borderless: 'btn btn-default btn-icon btn-xs',
    close: 'btn btn-default btn-icon btn-xs'
};

// Icons inside zoom modal classes
var previewZoomButtonIcons = {
    prev: '<i class="icon-arrow-right32"></i>',
    next: '<i class="icon-arrow-left32"></i>',
    toggleheader: '<i class="icon-menu-open"></i>',
    fullscreen: '<i class="icon-screen-full"></i>',
    borderless: '<i class="icon-alignment-unalign"></i>',
    close: '<i class="icon-cross3"></i>'
};

// File actions
var fileActionSettings = {
    zoomClass: 'btn btn-link btn-xs btn-icon',
    zoomIcon: '<i class="icon-zoomin3"></i>',
    dragClass: 'btn btn-link btn-xs btn-icon',
    dragIcon: '<i class="icon-three-bars"></i>',
    removeClass: 'btn btn-link btn-icon btn-xs',
    removeIcon: '<i class="icon-trash"></i>',
    indicatorNew: '<i class="icon-file-plus text-slate"></i>',
    indicatorSuccess: '<i class="icon-checkmark3 file-icon-large text-success"></i>',
    indicatorError: '<i class="icon-cross2 text-danger"></i>',
    indicatorLoading: '<i class="icon-spinner2 spinner text-muted"></i>',

};


$(".file-input-ajax").fileinput({
    browseLabel: 'تصفح',
    browseIcon: '<span>اختر</span>',
    uploadIcon: '<span>حفظ</span>',
    removeIcon: '<span>حذف الكل</span>',
    uploadUrl: "http://www.google.com", // server upload action
    uploadAsync: true,
    maxFileCount: 10000,
    allowedFileExtensions: ["jpg", "png", "jpeg"],
    initialPreview: [],
    layoutTemplates: {
        icon: '<i class="icon-file-check"></i>',
        modal: modalTemplate
    },
    previewZoomButtonClasses: previewZoomButtonClasses,
    previewZoomButtonIcons: previewZoomButtonIcons,
    fileActionSettings: fileActionSettings
});

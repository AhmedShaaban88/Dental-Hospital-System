const transDate = $("#transdate");
const patientName = $("#pName");
const nameRegex = /^([\u0600-\u06FF\s]){3,}$/;
const patientNameHelp = $("#patientHelp");
const servicesName = $("#services");
const servicesNameHelp = $("#servicesHelp");
const transDateHelp = $("#dateHelp");
const form = $("#comp-form");
const searchContainer = $(".search-container:first");
const searchCotainerTransparent = $(".search-content-container .col-sm-6:last-child");
const searchInput = $("#search-input");
const searchItems = $("#search-list-items-container");
const loader = $("#loader-content-search");
const checkTransform = $("#checktransform");
const servicesContainer = $("#services-container");
const transdateContainer = $("#transdate-container");
patientName.on('focus', function () {
    searchContainer.fadeIn(100);
    searchCotainerTransparent.fadeIn(100);
    searchInput.focus();

});
searchInput.on("keyup", function () {
    //searchItems.removeClass("hidden");
    loader.removeClass("hidden");
});


//search
const doMean = $("#do_mean");
const correctWord = $("#correct_word");
var showDoMean = false;
searchInput.on("keyup", function (e) {
    words = e.target.value;
    var finalWord = '';
    var arabicWord;
    showDoMean = false;
    for(var i=0;i< words.length;i++){
        arabicWord = unikeycode(words.charCodeAt(i));
        finalWord += arabicWord;
        if(words[i] !== arabicWord){
            showDoMean = true;
        }

    }
    if(showDoMean){
        doMean.removeClass('hidden');
    }else {
        doMean.addClass('hidden');

    }

    correctWord.html(finalWord);
});

function unikeycode(char) {

    switch (char) {
        case 32:
            return ' ';
        case 65:
        case 97:
            return 'ش';
        case 66:
            return 'لآ';
        case 98:
            return 'لا';
        case 67:
        case 99:
            return 'ؤ';
        case 68:
        case 100:
            return 'ي';
        case 69:
        case 101:
            return 'ث';
        case 70:
        case 102:
            return 'ب';
        case 71:
            return 'لأ';
        case 103:
            return 'ل';
        case 72:
            return 'أ';
        case 104:
            return 'ا';
        case 73:
        case 105:
            return'ه';
        case 74:
        case 106:
            return 'ت';
        case 75:
        case 107:
            return 'ن';

        case 76:
        case 108:
            return 'م';

        case 77:
        case 109:
            return 'ة';

        case 78:
            return 'آ';
        case 110:
            return 'ى';

        case 79:
        case 111:
            return 'خ';

        case 80:
        case 112:
            return 'ح';

        case 81:
        case 113:
            return 'ض';

        case 82:
        case 114:
            return 'ق';

        case 83:
        case 115:
            return 'س';

        case 84:
        case 116:
            return 'ف';

        case 85:
        case 117:
            return 'ع';

        case 86:
        case 118:
            return 'ر';

        case 87:
        case 119:
            return 'ص';

        case 88:
        case 120:
            return 'ء';

        case 89:
        case 121:
            return 'غ';

        case 90:
        case 122:
            return 'ئ';

        case 58:
        case 59:
            return 'ك';

        case 60:
        case 44:
            return 'و';

        case 46:
        case 62:
            return 'ز';

        case 63:
        case 47:
            return 'ظ';

        case 126:
        case 96:
            return 'ذ';

        case 123:
        case 91:
            return 'ج';

        case 125:
        case 93:
            return 'د';

        case 39:
        case 34:
            return 'ط';

        default:
            return String.fromCharCode(char);

    }
}
$(".icon-x").click(function () {
    closeSearch();
});
$(searchCotainerTransparent).click(function () {
    if(searchContainer.css("display") === "block"){
        closeSearch();
    }
});
function closeSearch() {
    searchContainer.fadeOut(300);
    searchCotainerTransparent.fadeOut();
}
$.fn.datepicker.dates['ar'] = {
    days: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعه', 'السبت'],
    daysShort: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعه', 'السبت'],
    daysMin: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعه', 'السبت'],
    months: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو', 'اغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر'],
    monthsShort: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو', 'اغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر'],
    today: "اليوم",
};
transDate.datepicker('destroy');
transDate.datepicker({
    language: 'ar',
    autoclose: true,
    format: "yyyy/mm/dd",

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


$(document).ready(function () {

    $(".clear-select").on("click", function () {
        $(this).next("select").val(null).trigger('change');
        $(this).addClass("hidden");
    });
    $("select").on("change", function () {
        $(this).prev(".clear-select").removeClass("hidden");
    });
});

checkTransform.on("change",function () {
    if(servicesContainer.hasClass("hidden")){
        servicesContainer.removeClass("hidden");
        transdateContainer.removeClass("hidden");
    }else{
        servicesContainer.addClass("hidden");
        transdateContainer.addClass("hidden");
    }
});
patientName.on('input', function () {
    if(!nameRegex.test($(this).val().trim())){
        patientNameHelp.removeClass('hidden');
    }else {
        patientNameHelp.addClass('hidden');
    }
});
servicesName.on('change', function () {
    if($(this).val() === ''){
        servicesNameHelp.removeClass('hidden');
    }else {
        servicesNameHelp.addClass('hidden');
    }
});
transDate.on('change', function () {
    if($(this).val() === ''){
        transDateHelp.removeClass('hidden');
    }else {
        transDateHelp.addClass('hidden');
    }
});


form.on("submit",function (e) {
    if(!nameRegex.test(patientName.val().trim())){
        patientNameHelp.removeClass('hidden');
        patientName.focus();
        e.preventDefault();
    }
     else if (servicesName.val() === '' && !servicesContainer.hasClass("hidden")){
        servicesName.focus();
        servicesNameHelp.removeClass('hidden');
        e.preventDefault();
    }
    else if (transDate.val() === ''&& !transdateContainer.hasClass("hidden")){
        transDate.focus();
        transDateHelp.removeClass('hidden');
        e.preventDefault();
    }else{
         patientNameHelp.addClass('hidden');
         servicesNameHelp.addClass('hidden');
         transDateHelp.addClass('hidden');
     }
});

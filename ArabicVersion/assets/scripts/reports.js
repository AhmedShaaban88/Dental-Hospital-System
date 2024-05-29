const patientName = $("#pName");
const clinicName = $("#clinic");
const from = $("#fromdate");
const to = $("#todate");
const status = $("#status");
const lang = $("#lang");
const order = $("#order");
const orderBy = $("#order-by");
const patientNameHelp = $("#pName-help");
const clinicNameHelp = $("#clinic-help");
const fromHelp = $("#fromdate-help");
const toHelp = $("#todate-help");
const statusHelp = $("#status-help");
const langHelp = $("#lang-help");
const orderHelp = $("#order-help");
const orderByHelp = $("#order-by-help");
const viewBtn = $("#viewBtn");

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
clinicName.on("change", function () {
    if(!$(this).hasClass("hidden")){
        clinicNameHelp.addClass("hidden");
    }
});
from.on("change", function () {
    if(!$(this).hasClass("hidden")){
        fromHelp.addClass("hidden");
    }
});
to.on("change", function () {
    if(!$(this).hasClass("hidden")){
        toHelp.addClass("hidden");
    }
});
status.on("change", function () {
    if(!$(this).hasClass("hidden")){
        statusHelp.addClass("hidden");
    }
});
lang.on("change", function () {
    if(!$(this).hasClass("hidden")){
        langHelp.addClass("hidden");
    }
});
order.on("change", function () {
    if(!$(this).hasClass("hidden")){
        orderHelp.addClass("hidden");
    }
});
orderBy.on("change", function () {
    if(!$(this).hasClass("hidden")){
        orderByHelp.addClass("hidden");
    }
});
viewBtn.on("click", function () {
    if(patientName.val() === '') {
        patientNameHelp.removeClass("hidden");
        e.preventDefault();
    }else if(clinicName.val() === null){
        clinicNameHelp.removeClass("hidden");
        e.preventDefault();
    }
    else if(from.val() === ''){
        fromHelp.removeClass("hidden");
        e.preventDefault();
    }
    else if(to.val() === ''){
        toHelp.removeClass("hidden");
        e.preventDefault();
    }
    else if(status.val() === ''){
        statusHelp.removeClass("hidden");
        e.preventDefault();
    }
    else if(lang.val() === ''){
        langHelp.removeClass("hidden");
        e.preventDefault();
    }
    else if(order.val() === ''){
        orderHelp.removeClass("hidden");
        e.preventDefault();
    }
    else if(orderBy.val() === ''){
        orderByHelp.removeClass("hidden");
        e.preventDefault();
    }else{
        $(this).attr("data-toggle", "modal");
        $(this).attr("data-target", ".viewModal");
    }
});

const users = $("#users");
const extensions = $("#extensions");
const usersHelp = $("#users-help");
const extensionsHelp = $("#extensions-help");
const shareSave = $("#share-btn-save");
users.on("change", function () {
   if(!usersHelp.hasClass("hidden")){
       usersHelp.addClass("hidden");
   }
});
extensions.on("change", function () {
    if(!extensionsHelp.hasClass("hidden")){
        extensionsHelp.addClass("hidden");
    }
});
shareSave.on("click", function (e) {
   if(users.val() === null) {
       usersHelp.removeClass("hidden");
       e.preventDefault();
   }
});

// off-canvas-search
const searchContainer = $(".search-container:first");
const searchCotainerTransparent = $(".search-content-container .col-sm-6:last-child");
const searchInput = $("#search-input");
const searchPlaceHolder = $(".search-placeholder:first");
const searchItems = $("#search-list-items-container");
const loader = $("#loader-content-search");
patientName.on('focus', function () {
    searchContainer.fadeIn(100);
    searchCotainerTransparent.fadeIn(100);
    searchInput.focus();

});
searchInput.on("keyup", function () {
    searchPlaceHolder.addClass("hidden");
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

$(document).ready(function () {

    $(".clear-select").on("click", function () {
        $(this).next("select").val(null).trigger('change');
        $(this).addClass("hidden");
    });
    $("select").on("change", function () {
        $(this).prev(".clear-select").removeClass("hidden");
    });
});
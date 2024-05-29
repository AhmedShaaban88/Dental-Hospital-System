const nameRegex = /^([\u0600-\u06FF\s]){3,}$/;
const phoneRegex = /^[+]?[(]?[0-9]{3,}[)]?[-\s.]?[0-9]{3,}[-\s.]?[0-9]{4,}$/ig;
const birthDate = $("#pBirth");
const year = new Date().getFullYear();
const adult = $("#adult");
const birth = $(".birth");

const patientName = $("#pName");

const searchContainer = $(".search-container:first");
const searchCotainerTransparent = $(".search-content-container .col-sm-6:last-child");
const searchInput = $("#search-input");
const searchItems = $("#search-list-items-container");
const loader = $("#loader-content-search");
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

const nameHelp = $(".help:eq(0)");
const typeHelp = $(".help:eq(1)");
const phone1 = $("#phone1");
const phone2 = $("#phone2");
const phone1Help = $(".help:eq(2)");
const phone2Help = $(".help:eq(3)");
const form = $("form:first");

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

patientName.on('input', function () {
  if(!nameRegex.test($(this).val().trim())){
     nameHelp.removeClass('hidden');
  }else {
      nameHelp.addClass('hidden');
  }
});

birthDate.on("change", function () {
    if(year - $(this).val().substr(0,4) > 12){
        adult.text("بالغ");
    }else{
        adult.text("طفل");
    }
});


$("select:first").on("change",function () {
    $("select:nth-child(2)").removeAttr('disabled');
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
form.on("reset",function () {
   $(".checked").each(function () {
       $(this).removeClass("checked");
   });
});


form.on("submit",function (e) {
    if(!nameRegex.test(patientName.val().trim())){
        nameHelp.removeClass('hidden');
        patientName.focus();
        e.preventDefault();
    }
    else if($(".checked").length === 0){
        nameHelp.addClass('hidden');
        typeHelp.removeClass('hidden');
        $(".radio-inline").focus();
        e.preventDefault();
    }
    else if(phone1.val() !== '' && !phoneRegex.test(phone1.val().trim())){
        phone1Help.removeClass('hidden');
        phone1.focus();
        typeHelp.addClass('hidden');
        e.preventDefault();
    }
    else if(phone2.val() !== '' && !phoneRegex.test(phone2.val().trim())){
        phone2Help.removeClass('hidden');
        phone2.focus();
        typeHelp.addClass('hidden');
        e.preventDefault();
    }
    else{
        typeHelp.addClass('hidden');
        phone1Help.addClass('hidden');
        phone2Help.addClass('hidden');
    }
});



const searchContainer = $(".search-container:first");
const searchCotainerTransparent = $(".search-content-container .col-sm-6:last-child");
const searchInput = $("#search-input");
const patientName = $("#pName");
const patientNameHelper = $("#patientNameHelper");
const searchPlaceHolder = $(".search-placeholder:first");
const searchItems = $("#search-list-items-container");
const loader = $("#loader-content-search");
const clinicName = $("#clinicName");
const clinicNameHelper = $("#clinicNameHelper");
const transferClinicForm = $("#transferClinic");
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


clinicName.on("change", function () {
    if(!clinicNameHelper.hasClass('hidden')){
        clinicNameHelper.addClass("hidden");
    }else if($(this).val() === ''){
        clinicNameHelper.removeClass("hidden");
    }
});

//submit form
transferClinicForm.on("submit", function (e) {
    if(patientName.val() === ''){
        patientNameHelper.removeClass('hidden');
        e.preventDefault();
    }
    else if(clinicName.val() === ''){
       clinicNameHelper.removeClass('hidden');
       e.preventDefault();
   }
});

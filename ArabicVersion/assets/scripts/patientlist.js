/********************************* first page ****************************************************/
// adding new re-case
const clinicName = $("#re-case-clinic");
const clinicNameContainer = $("#clinicNameContainer");
const patientName = $("#patientName");
const patientNameContainer = $("#patientNameContainer");
const access = $("#re-case-status");
const timePicker = $("#timepicker");
const capacity = $("#capacity");
const date = $(".date");


// sorting table
$(".table:first th").click(function () {
    var y = $(".table:first tr:not(:first)");
    var current = $(this).find(".caret");
    var currentBold = $(this).find("span:first-child");
    current.toggleClass('sorted');
    currentBold.toggleClass('text-bold');
    $(".table:first th .caret").not(current).removeClass("sorted");
    $(".table:first th span:first-child").not(currentBold).removeClass("text-bold");
    var x = y.toArray().reverse();
    $(x).appendTo($("tbody:first"));
});


//patient list delete
var reason = $("#reasonCancel");
const helpText = $("#cancel-help");
$("#patientForm").on("submit",function (e) {
    if(reason.val() === ''){
        helpText.removeClass('hidden');
        e.preventDefault();
    }else{
        helpText.addClass('hidden');
    }
});

var deleteBtn = $("table:first tbody tr td:last-child .btn-group ul li:last-child a");
var rePlayBtn = $(".replay");

var cancelModal =  $("#patientExModalCancel");
var patientModal =  $("#patientExModal");
var patienReModal =  $("#patientReModal");
deleteBtn.click(function () {
    patienReModal.hide();
    if($(this).parents("td").prev("td").text() === 'كشف جديد') {
        patientModal.show();
        cancelModal.hide();
    }else{
        cancelModal.show();
        patientModal.hide();
    }
});


//adding re-case modal

rePlayBtn.click(function () {
    patientModal.hide();
    cancelModal.hide();
    patienReModal.show();
});



// help text for re-case
const  helpTextClinic= $("#re-case-clinic-helper");
const  helpTextPatient= $("#patientNameHelper");
const  helpTextAccess= $("#re-case-status-helper");
const  helpTextDate= $("#re-case-date");
const  helpTextTime= $("#timepickerHelper");
const  helpTextCapacity= $("#capacityHelper");
clinicName.on("change",function () {
    if(!helpTextClinic.hasClass('hidden')){
        helpTextClinic.addClass("hidden");
    }
});
access.on("change",function () {
    if(!helpTextAccess.hasClass('hidden')){
        helpTextAccess.addClass("hidden");
    }
});
date.on("change",function () {
    if(!helpTextDate.hasClass('hidden')){
        helpTextDate.addClass("hidden");
    }
});
timePicker.on("change",function () {
    if(!helpTextTime.hasClass('hidden')){
        helpTextTime.addClass("hidden");
    }
});
capacity.on("input",function () {
    if(parseInt(capacity.val()) < 0 || isNaN(parseInt(capacity.val()))){
        helpTextCapacity.removeClass("hidden");
    }else {
        helpTextCapacity.addClass("hidden");

    }
});
$("#patientReForm").on("submit",function (e) {
    if(clinicName.val() === '' && clinicNameContainer.css("display") !== 'none'){
        helpTextClinic.removeClass("hidden");
        e.preventDefault();
    }
    else if(patientName.val().trim() === '' && patientNameContainer.css("display") !== 'none'){
        helpTextPatient.removeClass("hidden");
        e.preventDefault();
    }
    else if(access.val() === ''){
        helpTextAccess.removeClass("hidden");
        e.preventDefault();
    }
    else if(date.val() === ''){
        helpTextDate.removeClass("hidden");
        e.preventDefault();
    }
    else if(timePicker.val() === ''){
        helpTextTime.removeClass("hidden");
        e.preventDefault();
    }
    else if(parseInt(capacity.val()) < 0 || isNaN(parseInt(capacity.val()))){
        helpTextCapacity.removeClass("hidden");
        e.preventDefault();
    }
});

// search
const searchInput = $("#search-input");
const doMean = $("#do_mean");
const correctWord = $("#correct_word");
var showDoMean = false;
searchInput.on("keyup", function (e) {
    arabicWord(e, showDoMean, correctWord, doMean);

});

/*mimic loading data according to search text
const loaderContent = $("#loader-content");
const form1 = $(".main-search:first");
form1.on("submit",function () {
    loaderContent.removeClass('hidden');
});
*/

/******************************* second page *******************************************************/
// future page inputs
const clinicNameFuture = $("#editReplaySelect");
const patientNameFuture = $("#patientNameFuture");
const statusFuture = $("#editReplaySelectStatus");
const futureDate = $("#futureDate");
const timePickerFuture = $("#timePicker2");

// sorting table

$(".table:eq(1) th").click(function () {
    var y = $(".table:eq(1) tr:not(:first)");
    var current = $(this).find(".caret");
    var currentBold = $(this).find("span:first-child");
    current.toggleClass('sorted');
    currentBold.toggleClass('text-bold');
    $(".table:eq(1) th .caret").not(current).removeClass("sorted");
    $(".table:eq(1) th span:first-child").not(currentBold).removeClass("text-bold");
    var x = y.toArray().reverse();
    $(x).appendTo($("tbody:eq(1)"));
});



const futureEditModal = $("#editFutureModal");
const futureDeleteModal = $("#deleteFuture");
const deleteAllModal = $("#deleteAllModal");
const deleteOneModal = $("#deleteWaitingPatientModal");
const deleteOneBtn = $(".delete-waiting-onc");
const editFutureBtn = $(".editFutureBtn");
const deleteFutureBtn = $(".deleteFutureBtn");

$("#deleteAll").click(function () {
    deleteAllModal.show();
    deleteOneModal.hide();
});
deleteOneBtn.click(function () {
    deleteAllModal.hide();
    deleteOneModal.show();
});
deleteFutureBtn.click(function () {
    futureEditModal.hide();
    futureDeleteModal.show();
});
editFutureBtn.click(function () {
    futureEditModal.show();
    futureDeleteModal.hide();
});


//future page check

const futureHelpTextClinicName = $("#editReplaySelectHelp");
const futureHelpTextPatientName = $("#patientNameFutureHelp");
const futureHelpTextStatus = $("#editReplaySelectStatusHelp");
const futureHelpTextData = $("#futureDateHelp");
const futureHelpTextTime = $("#timePicker2Help");

clinicNameFuture.on("change",function () {
    if(!futureHelpTextClinicName.hasClass('hidden')){
        futureHelpTextClinicName.addClass("hidden");
    }
});
statusFuture.on("change",function () {
    if(!futureHelpTextStatus.hasClass('hidden')){
        futureHelpTextStatus.addClass("hidden");
    }
});
date.on("change",function () {
    if(!futureHelpTextData.hasClass('hidden')){
        futureHelpTextData.addClass("hidden");
    }
});
timePickerFuture.on("change",function () {
    if(!futureHelpTextTime.hasClass('hidden')){
        futureHelpTextTime.addClass("hidden");
    }
});
$("#patientFutureForm").on("submit",function (e) {
    if(clinicNameFuture.val() === ''){
        futureHelpTextClinicName.removeClass("hidden");
        e.preventDefault();
    }
    else if(patientNameFuture.val().trim() === ''){
        futureHelpTextPatientName.removeClass("hidden");
        e.preventDefault();
    }
    else if(statusFuture.val() === ''){
        futureHelpTextStatus.removeClass("hidden");
        e.preventDefault();
    }
    else if(futureDate.val() === ''){
        futureHelpTextData.removeClass("hidden");
        e.preventDefault();
    }
    else if(timePickerFuture.val() === ''){
        futureHelpTextTime.removeClass("hidden");
        e.preventDefault();
    }
});





//search
const searchInput3 = $("#search-input3");
const doMean3 = $("#do_mean3");
const correctWord3 = $("#correct_word3");
var showDoMean3= false;
searchInput3.on("keyup", function (e) {
    arabicWord(e, showDoMean3, correctWord3, doMean3);

});

// const loaderContent1 = $("#loader-content1");
// const form2 = $(".main-search:eq(1)");

// form2.on("submit",function () {
//     loaderContent1.removeClass('hidden');
// });
/****************************** third page *********************************************************/





//sorting table

$(".table:last th").click(function () {
    var y = $(".table:last tr:not(:first)");
    var current = $(this).find(".caret");
    var currentBold = $(this).find("span:first-child");
    current.toggleClass('sorted');
    currentBold.toggleClass('text-bold');
    $(".table:last th .caret").not(current).removeClass("sorted");
    $(".table:last th span:first-child").not(currentBold).removeClass("text-bold");
    var x = y.toArray().reverse();
    $(x).appendTo($("tbody:last"));
});



//search

const searchInput2 = $("#search-input2");
const doMean2 = $("#do_mean2");
const correctWord2 = $("#correct_word2");
var showDoMean2 = false;

searchInput2.on("keyup", function (e) {
    arabicWord(e, showDoMean2, correctWord2, doMean2);

});


// const loaderContent2 = $("#loader-content2");


// const form3 = $(".main-search:eq(2)");

// form3.on("submit",function () {
//     loaderContent2.removeClass('hidden');
// });
/******************************** generic settings ***************************************/

//gotoup
$(".goTop").click(function () {
    $("html, body").animate( {
        scrollTop: $(this.hash).offset().top
    },800)
});

$.fn.datepicker.dates['ar'] = {
    days: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعه', 'السبت'],
    daysShort: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعه', 'السبت'],
    daysMin: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعه', 'السبت'],
    months: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو', 'اغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر'],
    monthsShort: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو', 'اغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر'],
    today: "اليوم",
};
date.datepicker('destroy');
date.datepicker({
    language: 'ar',
    autoclose: true,
    format: "yyyy/mm/dd",

});

timePicker.mdtimepicker({
    theme: 'red',
    hourPadding: true
});
timePickerFuture.mdtimepicker({
    theme: 'red',
    hourPadding: true

});

$(".mdtp__button:first-child").text("انهاء");
$(".mdtp__button:last-child").text("تم");
$(".mdtp__am:first-child").text('صباحا');
$(".mdtp__pm").text('مساءا');


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
function arabicWord(e, showMean, correct, doMean) {
    words = e.target.value;
    var finalWord = '';
    var arabicFinalWord;
    showMean = false;
    for(var i=0;i< words.length;i++){
        arabicFinalWord = unikeycode(words.charCodeAt(i));
        finalWord += arabicFinalWord;
        if(words[i] !== arabicFinalWord){
            showMean = true;
        }

    }
    if(showMean){
        doMean.removeClass('hidden');
    }else {
        doMean.addClass('hidden');
    }
    correct.html(finalWord);
}

// checkbox for search
$(document).ready(function () {
    /*********checkbox first page *************/
    var searchMethods = [];
    const checkboxes = $(".search-item");
    const checkboxesClass = checkboxes.parent("span");
    var checkall = $("#checkall");
    var checkAllClass = checkall.parent("span");
    const dropDown = $(".input-group-btn:first");
    const checkLabels = $(".check-labels");
    var checkedCount = 0;

    checkboxes.on("click", function (e) {
        checkedCount = $("input.search-item").parent("span.checked").length;
        if(checkedCount > checkboxes.length - 1){
            checkAllClass.addClass("checked").removeClass('indeterminate');
        }else if(checkedCount > 0 && checkedCount < checkboxes.length){
            checkAllClass.addClass("checked indeterminate");
        }else{
            checkAllClass.removeClass("checked indeterminate");
        }
    });
    checkall.on("click", function () {
        if(checkAllClass.hasClass("indeterminate")){
            checkAllClass.removeClass("indeterminate");
        }
        if($(".search-item").parent("span").hasClass("checked")){
            checkAllClass.removeClass("checked");
            checkboxesClass.removeClass('checked');
            checkboxes.prop('checked', false);
        }
        else{
            checkAllClass.addClass("checked");
            checkboxesClass.addClass('checked');
            checkboxes.prop('checked',true);
        }

    });

    checkLabels.each(function () {
        $(this).click(function () {
            dropDown.addClass("open");
        })
    });

    $("#search-btn").on("click", function () {
        searchMethods = [];
        checkboxes.each(function () {
            if($(this).parent("span").hasClass('checked')) {
                searchMethods.push($(this).attr('name'));
            }
        });
    });
    /*********checkbox second page *************/
    var searchMethods2 = [];
    const checkboxes2 = $(".search-item2");
    const checkboxesClass2 = checkboxes2.parent("span");
    var checkall2 = $("#checkall2");
    var checkAllClass2 = checkall2.parent("span");
   const dropDown2 = $("#waiting-list");
    const checkLabels2 = $(".check-labels2");
    var checkedCount2 = 0;

    checkboxes2.on("click", function (e) {
        checkedCount2 = $("input.search-item2").parent("span.checked").length;
        if(checkedCount2 > checkboxes2.length - 1){
            checkAllClass2.addClass("checked").removeClass('indeterminate');
        }else if(checkedCount2 > 0 && checkedCount2 < checkboxes2.length){
            checkAllClass2.addClass("checked indeterminate");
        }else{
            checkAllClass2.removeClass("checked indeterminate");
        }
    });
    checkall2.on("click", function () {
        if(checkAllClass2.hasClass("indeterminate")){
            checkAllClass2.removeClass("indeterminate");
        }
        if($(".search-item2").parent("span").hasClass("checked")){
            checkAllClass2.removeClass("checked");
            checkboxesClass2.removeClass('checked');
            checkboxes2.prop('checked', false);
        }
        else{
            checkAllClass2.addClass("checked");
            checkboxesClass2.addClass('checked');
            checkboxes2.prop('checked',true);
        }

    });

    checkLabels2.each(function () {
        $(this).click(function () {
            dropDown2.addClass("open");
        })
    });

    $("#search-btn2").on("click", function () {
        searchMethods2 = [];
        checkboxes2.each(function () {
            if($(this).parent("span").hasClass('checked')) {
                searchMethods2.push($(this).attr('name'));
            }
        });
    });

    /*********checkbox third page *************/

    var searchMethods3 = [];
    const checkboxes3 = $(".search-item3");
    const checkboxesClass3 = checkboxes3.parent("span");
    var checkall3 = $("#checkall3");
    var checkAllClass3 = checkall3.parent("span");
    const dropDown3 = $("#future-list");
    const checkLabels3 = $(".check-labels3");
    var checkedCount3 = 0;


    checkboxes3.on("click", function (e) {
        checkedCount3 = $("input.search-item3").parent("span.checked").length;
        if(checkedCount3 > checkboxes3.length - 1){
            checkAllClass3.addClass("checked").removeClass('indeterminate');
        }else if(checkedCount3 > 0 && checkedCount3 < checkboxes3.length){
            checkAllClass3.addClass("checked indeterminate");
        }else{
            checkAllClass3.removeClass("checked indeterminate");
        }
    });
    checkall3.on("click", function () {
        if(checkAllClass3.hasClass("indeterminate")){
            checkAllClass3.removeClass("indeterminate");
        }
        if($(".search-item3").parent("span").hasClass("checked")){
            checkAllClass3.removeClass("checked");
            checkboxesClass3.removeClass('checked');
            checkboxes3.prop('checked', false);
        }
        else{
            checkAllClass3.addClass("checked");
            checkboxesClass3.addClass('checked');
            checkboxes3.prop('checked',true);
        }

    });

    checkLabels3.each(function () {
        $(this).click(function () {
            dropDown3.addClass("open");
        })
    });

    $("#search-btn3").on("click", function () {
        searchMethods3 = [];
        checkboxes3.each(function () {
            if($(this).parent("span").hasClass('checked')) {
                searchMethods3.push($(this).attr('name'));
            }
        });
    })

});



//search canvas

const searchContainer = $(".search-container:first");
const searchCotainerTransparent = $(".search-content-container .col-sm-6:last-child");
const searchInputCanvas = $("#search-input-off-canvas");
const searchPlaceHolder = $(".search-placeholder:first");
const searchItems = $("#search-list-items-container");
const loaderCanvas = $("#loader-content-search");
const doMeanCanvas = $("#do_mean-off-canvas");
const correctWordCanvas = $("#correct_word-off-canvas");
var showDoMeanCanvas = false;

patientName.on('focus', function () {
    openCanvas();
});
patientNameFuture.on("focus",function () {
    openCanvas();

});
//  when every keyup
searchInputCanvas.on("keyup", function (e) {
    searchPlaceHolder.addClass("hidden");
    //searchItems.removeClass("hidden");
    loaderCanvas.removeClass("hidden");
    arabicWord(e,showDoMeanCanvas, correctWordCanvas, doMeanCanvas);
});


function openCanvas(){
    searchContainer.fadeIn(100);
    searchCotainerTransparent.fadeIn(100);
    searchInputCanvas.focus();
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

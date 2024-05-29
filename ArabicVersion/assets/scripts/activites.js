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
const patientName = $("#pName");
const employeeName = $("#eName");
var currentActive = null;
var prevActive = null;
var showDoMean = false;

const searchContainer = $(".search-container:first");
const searchCotainerTransparent = $(".search-content-container .col-sm-6:last-child");
const searchInput = $("#search-input");
const searchPlaceHolder = $(".search-placeholder:first-child");
const loader = $("#loader-content-search");
patientName.on('focus', function () {
    searchContainer.fadeIn(100);
    searchCotainerTransparent.fadeIn(100);
    searchInput.focus();
    if(currentActive === null){
        currentActive = 'patient';
    }else{
        if(currentActive === 'patient'){}
        else{
            currentActive = 'patient';
            prevActive = 'emp';
            doMean.addClass('hidden');
            showDoMean = false;
            searchInput.val('');
            searchPlaceHolder.removeClass("hidden");
            loader.addClass("hidden");
            correctWord.html('');

        }
    }


});
employeeName.on('focus', function () {
    searchContainer.fadeIn(100);
    searchCotainerTransparent.fadeIn(100);
    searchInput.focus();
    if(currentActive === null){
        currentActive = 'emp';
    }else{
        if(currentActive === 'emp'){}
        else{
            currentActive = 'emp';
            prevActive = 'patient';
            showDoMean = false;
            doMean.addClass('hidden');
            searchInput.val('');
            loader.addClass("hidden");
            correctWord.html('');
            searchPlaceHolder.removeClass("hidden");


        }
    }


});
//search
const doMean = $("#do_mean");
const correctWord = $("#correct_word");
searchInput.on("keyup", function (e) {
    //searchItems.removeClass("hidden");
    searchPlaceHolder.addClass("hidden");
    loader.removeClass("hidden");
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


//gotoup
$("#goTop").click(function () {
    $("html, body").animate( {
        scrollTop: $(this.hash).offset().top
    },800)
});


$(document).ready(function () {
    $(".select").select2({
        allowClear: true,
    })
});
$(".activity-Modal").on("shown.bs.modal",function (e) {
    const yValues = [30, 200, 100, 400, 150, 250,30, 200, 100, 400, 150, 250,30, 200, 100, 400, 150, 250,30, 200, 100, 400, 150, 250,30, 200, 100, 400, 150, 250,30];
    const xValues = [
        '01-01-2019', '02-01-2019', '03-01-2019', '04-01-2019', '05-01-2019', '06-01-2019','07-01-2019', '08-01-2019', '09-01-2019', '10-01-2019', '11-01-2019', '12-01-2019',
        '13-01-2019', '14-01-2019', '15-01-2019', '16-01-2019', '17-01-2019', '18-01-2019','19-01-2019', '20-01-2019', '21-01-2019', '22-01-2019', '23-01-2019', '24-01-2019',
        '25-01-2019', '26-01-2019', '27-01-2019', '28-01-2019', '29-01-2019', '30-01-2019','31-01-2019'


    ];

    $(function () {


        // Categorized axis
        // ------------------------------

        // Generate chart
        var axis_categorized = c3.generate({
            bindto: '#week-chart',
            point: {
                r: 4
            },
            size: {
                height: 500,
            },
            data: {
                columns: [
                    ['الشهر', ...yValues]
                ],
                type: 'spline'
            },
            color: {
                pattern: ['#821a3c']
            },
            axis: {
                x: {
                    label: 'الايام',
                    type: 'category',
                    categories: [...xValues],
                    tick: {
                        rotate: 80,
                        multiline: false
                    }
                },
                y:{
                    label: 'عدد الزيارات'
                }
            },
            grid: {
                x: {
                    show: true
                }
            }
        });

        $(".c3-axis-x:last-child").css("display","none");
        // Resize chart on sidebar width change
        $(".sidebar-control").on('click', function() {
            axis_categorized.resize();
        });
    });
});
var deleteSection = $("#delete-section");
var deleteCountInfo = $("#delete-count");
var deletedArr = [];
$(function () {
    // for every row in panel
    $(".check-row").on("change",function () {
        $(this).find("span:first-child").removeClass("indeterminate");
        const rowStatus = $(this).find("input").prop("checked");
        const boxs = $(this).parent(".parentRow").find(".check-labels");
        if(rowStatus){
            boxs.find("input").each(function (i,v) {
                let value = $(this).attr("value");
                $(this).prop("checked", true);
                $(this).parent("span").addClass("checked");
                if(deletedArr.indexOf(value) === -1){
                    deletedArr.push(value);
                }
            });
        }
        else{
            boxs.find("span").removeClass("checked");
            boxs.find("input").each(function (i,v) {
                let value = $(this).attr("value");
                $(this).prop("checked", false);
                if(deletedArr.indexOf(value) !== -1){
                    deletedArr.splice(deletedArr.indexOf(value),1);
                }
            });
        }
        if(deletedArr.length > 0){
            deleteSection.removeClass("hidden");
            deleteCountInfo.text(deletedArr.length);
        }else{
            deleteSection.addClass("hidden");
        }
    });
    $(".check-labels").on("change",function () {
        const parentRow = $(this).parents(".parentRow").find(".check-row");
        const childern = $(this).parents(".parentRow").find(".check-labels").find("span:first-child");
        const value = $(this).find("input").attr("value");
        if(deletedArr.indexOf(value) === -1){
            deletedArr.push(value);
        }else{
            deletedArr.splice(deletedArr.indexOf(value),1);
        }
        childernArr = [];
        childern.each(function (i,v) {
            if($(v).hasClass("checked")) {
                childernArr.push(i);
                if (childernArr.length > 0 && childernArr.length < childern.length) {
                    parentRow.find("input").prop("checked",true);
                    parentRow.find("span:first-child").addClass("checked indeterminate");

                } else if (childernArr.length === childern.length) {
                    parentRow.find("input").prop("checked",true);
                    parentRow.find("span:first-child").removeClass("indeterminate").addClass("checked");
                }

            }
            else {
                if(childernArr.length === 0){
                    parentRow.find("span:first-child").removeClass("checked indeterminate");
                    parentRow.find("input").prop("checked",false);
                }
            }
        });
        if(deletedArr.length > 0){
            deleteSection.removeClass("hidden");
            deleteCountInfo.text(deletedArr.length);
        }else{
            deleteSection.addClass("hidden");
        }
    });
});

$('#ss').fu_popover({
    content:'<b>Hello World!</b>',
    dismissable:true,
    trigger: 'hover'
});

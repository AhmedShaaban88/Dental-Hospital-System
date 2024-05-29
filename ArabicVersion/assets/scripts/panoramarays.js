var imageHelper = $("#imageHelper");
var uploadBtn = $("#uploadBtn");
//sorting table
$("th").click(function () {
    var y = $("tr:not(:first)");
    var current = $(this).find(".caret");
    var currentBold = $(this).find("span:first-child");
    current.toggleClass('sorted');
    currentBold.toggleClass('text-bold');
    $("th .caret").not(current).removeClass("sorted");
    $("th span:first-child").not(currentBold).removeClass("text-bold");
    var x = y.toArray().reverse();
    $(x).appendTo($("tbody"));
});


const form = $("#filterForm");
const table = $(".table-responsive:first");
//mimic loading data according to search text
form.on("submit",function () {
    loaderContent.removeClass('hidden');
    table.hide();
});

//gotoup
$("#goTop").click(function () {
    $("html, body").animate( {
        scrollTop: $(this.hash).offset().top
    },800)
});
///daterange
start = moment();
end = moment();
$('#reportrange').daterangepicker({
    showDropdowns: true,
    showWeekNumbers: false,
    startDate: start,
    maxDate: moment().endOf("day"),
    minDate: "01/08/2018",
    endDate: end,
    ranges: {
        'اليوم': [moment(), moment()],
        'أمس': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'مده اسبوع': [moment().subtract(6, 'days'), moment()],
        'مده شهر ': [moment().startOf('month'), moment().endOf('month')],
        'في هذا الشهر': [moment().startOf('month'), moment()],//.endOf('month')
        'الشهر السابق': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    autoUpdateInput: false,
    opens: "left",
    buttonClasses: ['btn btn-default'],
    applyClass: 'btn-small btn-primary',
    locale: {
        format: 'DD/MM/YYYY',
        applyLabel: 'موافق',
        cancelLabel: 'الغاء',
        daysOfWeek: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعه', 'السبت'],
        monthNames: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو', 'اغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر'],
        firstDay: 6
    },
}, cb);
cb(start, end);
function cb(start, end) {
    $('#reportrange span').html(start.format('YYYY/MM/DD') + '  - ' + end.format('YYYY/MM/DD'));
}
$('#reportrange').on('apply.daterangepicker', function (ev, picker) {
    ev.preventDefault();
    startDate = picker.startDate.format('DD/MM/YYYY');
    endDate = picker.endDate.format('DD/MM/YYYY');
    rowkey = 0;
});

// checkbox for search
$(document).ready(function () {
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
    })

});
//search

const searchInput = $("#search-input");
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
    uploadUrl: "http://localhost", // server upload action
    uploadAsync: true,
    maxFileCount: 10000,
    maxFileSize: 1024,
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
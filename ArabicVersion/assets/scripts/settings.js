const eye1 = $(".eye:first i");
const eye2 = $(".eye:eq(1) i");
const eye3 = $(".eye:last i");
const oldPassword = $(".password:first");
const password = $(".password:eq(1)");
const confPassword = $(".password:last");
const empName = $("#emp-name");
$(document).ready(function () {
    eye1.click(function () {
        if( $(this).hasClass('icon-eye-blocked')) {
            $(this).removeClass('icon-eye-blocked').addClass('icon-eye');
            oldPassword.attr('type', 'text');
        }else{
            $(this).removeClass('icon-eye').addClass('icon-eye-blocked');
            oldPassword.attr('type', 'password');
        }
    });
    eye2.click(function () {
        if(eye2.hasClass('icon-eye-blocked')) {
            $(this).removeClass('icon-eye-blocked').addClass('icon-eye');
          password.attr('type', 'text');
        }else{
            $(this).removeClass('icon-eye').addClass('icon-eye-blocked');
            password.attr('type', 'password');
        }
    });
    eye3.click(function () {
        if(eye3.hasClass('icon-eye-blocked')) {
            $(this).removeClass('icon-eye-blocked').addClass('icon-eye');
          confPassword.attr('type', 'text');
        }else{
            $(this).removeClass('icon-eye').addClass('icon-eye-blocked');
            confPassword.attr('type', 'password');
        }
    });
    $(".check-labels").each(function (i_,v) {

        const parentPanel = $(this).parentsUntil(".panel-container");
        const parentPanelRows = parentPanel.find(".check-row").find("span:first-child");
        const parentPanelRowsCount = parentPanel.find(".check-row").length;
        var currentRowsChecked = 0;
        var currentRowsInter = 0;

        const parentRow = $(this).parentsUntil(".panel-body").find(".check-row");
        const childern = $(this).parentsUntil(".panel-body").find(".col-sm-2").find(".check-labels").find("span:first-child:not(.caret)");
        const childernAllCount = $(this).parent(".col-sm-2").siblings(".col-sm-2").find(".check-labels").find("input");
        var childernEnableCount = childernAllCount.length + 1;

        for(var i=0; i< childernAllCount.length + 1; i++){
            if($(childernAllCount[i]).prop("disabled") === true){
                childernEnableCount--;
            }
        }
        childernArr = [];
        childern.each(function (i,v) {

            if($(v).hasClass("checked") && !$(v).hasClass("indeterminate")) {
                childernArr.push(i);
                if (childernArr.length > 0 && childernArr.length < childernEnableCount && !parentRow.find("input").prop("checked")) {
                    parentRow.find("input").prop("checked",true);
                    parentRow.find("span:first-child").addClass("checked indeterminate");


                } else if (childernArr.length === childernEnableCount) {
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
        for(let i=0;i<parentPanelRowsCount;i++){
            if($(parentPanelRows[i]).hasClass("indeterminate")){
                currentRowsInter++;
                parentPanel.find(".check-panel").find("input").prop("checked",true);
                parentPanel.find(".check-panel").find("span:first-child").addClass("checked indeterminate");
                break;

            }
            else if($(parentPanelRows[i]).hasClass("checked") && !$(parentPanelRows[i]).hasClass("indeterminate")){
                currentRowsChecked++;
                if(currentRowsChecked === parentPanelRowsCount){
                    parentPanel.find(".check-panel").find("input").prop("checked",true);
                    parentPanel.find(".check-panel").find("span:first-child").addClass("checked").removeClass("indeterminate");

                }else{
                    parentPanel.find(".check-panel").find("input").prop("checked",true);
                    parentPanel.find(".check-panel").find("span:first-child").addClass("checked indeterminate");
                }
            }
            else{
                if(currentRowsChecked === 0){
                    parentPanel.find(".check-panel").find("input").prop("checked",false);
                    parentPanel.find(".check-panel").find("span:first-child").removeClass("checked indeterminate");

                }

            }
        }


    });
    // for every dropdown item
    $(".drop-items").on("change", function () {
        const dropDown = $(this).parentsUntil(".dropdown-container").find(".btn-group");
        const childern = dropDown.find(".drop-items").find("span:first-child");
        const checkall = $(this).parentsUntil(".col-sm-2").find(".checkall");
        const checkAllClass = checkall.find("span:first-child:not(.caret)");
        const checkedCount = dropDown.find(".drop-items").length;
        dropDown.addClass("open");
        const parentPanel = $(this).parentsUntil(".panel-container");
        const parentRow = $(this).parentsUntil(".panel-body").find(".check-row");
        const childern2 = $(this).parentsUntil(".panel-body").find(".col-sm-2").find(".check-labels").find("span:first-child:not(.caret)");
        const childernAllCount = $(this).parentsUntil(".col-sm-2").parent(".col-sm-2").siblings(".col-sm-2").find(".check-labels").find("input");
        var childernEnableCount = childernAllCount.length + 1;

        for(var i=0; i< childernAllCount.length + 1; i++){
            if($(childernAllCount[i]).prop("disabled") === true){
                childernEnableCount--;
            }
        }
        childernArr = [];
        childernArr2 = [];

        childern.each(function (i,v) {
            if($(v).hasClass("checked")) {
                childernArr.push(i);
                if (childernArr.length > 0 && childernArr.length < checkedCount) {
                    checkall.find("input").prop("checked",true);
                    checkAllClass.addClass("checked indeterminate");
                    parentPanel.find(".check-panel").find("input").prop("checked",true);
                    parentPanel.find(".check-panel").find("span:first-child").addClass("checked indeterminate");
                    parentRow.find("input").prop("checked",true);
                    parentRow.find("span:first-child").addClass("checked indeterminate");
                } else if (childernArr.length === checkedCount) {
                    checkall.find("input").prop("checked",true);
                    checkAllClass.removeClass("indeterminate").addClass("checked");
                    childern2.each(function (i,v) {
                        if($(v).hasClass("checked") && !$(v).hasClass("indeterminate")) {
                            childernArr2.push(i);
                            if (childernArr2.length === childernEnableCount) {
                                parentRow.find("input").prop("checked",true);
                                parentRow.find("span:first-child").removeClass("indeterminate").addClass("checked");
                                parentPanel.find(".check-panel").find("input").prop("checked",true);
                                parentPanel.find(".check-panel").find("span:first-child").removeClass("indeterminate").addClass("checked");
                            }
                        }
                    });
                }
            }
            else {
                if(childernArr.length === 0){
                    checkAllClass.removeClass("checked indeterminate");
                    checkall.find("input").prop("checked",false);
                    childern2.each(function (i,v) {
                        if($(v).hasClass("checked") && !$(v).hasClass("indeterminate")) {
                            childernArr2.push(i);
                            if (childernArr2.length > 0) {
                                parentRow.find("input").prop("checked",true);
                                parentRow.find("span:first-child").addClass("checked indeterminate");
                                parentPanel.find(".check-panel").find("input").prop("checked",true);
                                parentPanel.find(".check-panel").find("span:first-child").addClass("checked indeterminate");
                            }
                        }else{
                            parentRow.find("input").prop("checked",false);
                            parentRow.find("span:first-child").removeClass("checked indeterminate");
                            parentPanel.find(".check-panel").find("input").prop("checked",false);
                            parentPanel.find(".check-panel").find("span:first-child").removeClass("checked indeterminate");
                        }
                    });
                }

            }

        });



    });

    // for allselect dropdown
    $(".checkall").on("click", function () {
        const dropItems = $(this).parentsUntil(".dropdown-container").find(".btn-group").find(".drop-items");
        const checkAllClass = $(this).parentsUntil(".dropdown-container").find("span:first-child:not(.caret)");
        const checkAllInput = $(this).find("input");
        if(checkAllClass.hasClass("indeterminate")){
            checkAllInput.prop("checked",false);
            checkAllClass.removeClass("indeterminate checked");
            dropItems.each(function (i,v) {
                $(v).find("span:first-child").removeClass("checked");
                $(v).find("input").prop("checked", false);
            });

        }
        else if(checkAllClass.hasClass("checked")){
            checkAllClass.removeClass("checked");
            checkAllInput.prop('checked', false);
            dropItems.each(function (i,v) {
                $(v).find("span:first-child").removeClass("checked");
                $(v).find("input").prop("checked", false);
            });
        }
        else{
            checkAllClass.addClass("checked");
            checkAllInput.prop('checked',true);
            dropItems.each(function (i,v) {
                $(v).find("span:first-child").addClass("checked");
                $(v).find("input").prop("checked", true);
            });
        }

        const parentPanel = $(this).parentsUntil(".panel-container");
        const parentPanelRows = parentPanel.find(".check-row").find("span:first-child");
        const parentPanelRowsCount = parentPanel.find(".check-row").length;
        var currentRowsChecked = 0;

        const parentRow = $(this).parentsUntil(".panel-body").find(".check-row");
        const childern = $(this).parentsUntil(".panel-body").find(".col-sm-2").find(".check-labels").find("span:first-child:not(.caret)");
        const childernAllCount = $(this).parentsUntil(".col-sm-2").parent(".col-sm-2").siblings(".col-sm-2").find(".check-labels").find("input");
        var childernEnableCount = childernAllCount.length + 1;

        for(var i=0; i< childernAllCount.length + 1; i++){
            if($(childernAllCount[i]).prop("disabled") === true){
                childernEnableCount--;
            }
        }
        childernArr = [];
        childern.each(function (i,v) {

            if($(v).hasClass("checked") && !$(v).hasClass("indeterminate")) {
                childernArr.push(i);
                if (childernArr.length > 0 && childernArr.length < childernEnableCount) {
                    parentRow.find("input").prop("checked",true);
                    parentRow.find("span:first-child").addClass("checked indeterminate");
                } else if (childernArr.length === childernEnableCount) {
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
        for(let i=0;i<parentPanelRowsCount;i++){
            if($(parentPanelRows[i]).hasClass("indeterminate")){
                parentPanel.find(".check-panel").find("input").prop("checked",true);
                parentPanel.find(".check-panel").find("span:first-child").addClass("checked indeterminate");

            }else if($(parentPanelRows[i]).hasClass("checked") && !$(parentPanelRows[i]).hasClass("indeterminate")){
                currentRowsChecked++;
                if(currentRowsChecked === parentPanelRowsCount){
                    parentPanel.find(".check-panel").find("input").prop("checked",true);
                    parentPanel.find(".check-panel").find("span:first-child").addClass("checked").removeClass("indeterminate");

                }
            }
            else{
                if(currentRowsChecked === 0){
                    parentPanel.find(".check-panel").find("input").prop("checked",false);
                    parentPanel.find(".check-panel").find("span:first-child").removeClass("checked indeterminate");
                }

            }
        }
    });

    //for every panel
    $(".check-panel").on("change",function () {
        $(this).find("span:first-child").removeClass("indeterminate");
        const panelStatus = $(this).find("input").prop("checked");
        const rows = $(this).parent(".panel-title").parent(".panel-heading").parent(".panel").find(".panel-body").find(".check-row");
        rows.each(function (i,v) {
            if(panelStatus){
                $(v).find("span").addClass("checked");
                $(v).find("input").prop("checked",true);
            }else{
                $(v).find("span").removeClass("checked indeterminate");
                $(v).find("input").prop("checked",false);
            }
            const boxs = $(v).parent(".col-sm-4").siblings(".col-sm-2").find(".check-labels");
            if($(v).find("span").hasClass("checked")){
                boxs.find("input").each(function (i,v) {
                    if(!$(v).prop("disabled")){
                        $(this).prop("checked", true);
                        $(this).parent("span").addClass("checked")
                    }
                });
            }
            else{
                boxs.find("span").removeClass("checked");
                boxs.find("input").each(function (i,v) {
                    if(!$(v).prop("disabled")){
                        $(this).prop("checked", false);

                    }
                });
            }

        });


    });

    // for every row in panel
    $(".check-row").on("change",function () {
        $(this).find("span:first-child").removeClass("indeterminate");
        const rowStatus = $(this).find("input").prop("checked");
        const boxs = $(this).parent(".col-sm-4").siblings(".col-sm-2").find(".check-labels");
        var currentRowsChecked = 0;
        const parentPanel = $(this).parent(".col-sm-4").parentsUntil(".panel-container").find(".check-panel");
        const parentPanelRows = $(this).parent(".col-sm-4").parentsUntil(".panel-container").find(".check-row").find("input");
        const parentPanelRowsCount = parentPanelRows.length;
        var rowsCount = 0;
        if(rowStatus){
            boxs.find("input").each(function (i,v) {
                if(!$(v).prop("disabled")){
                    $(this).prop("checked", true);
                    $(this).parent("span").addClass("checked");
                }
            });
        }
        else{
            boxs.find("span").removeClass("checked");
            boxs.find("input").each(function (i,v) {
                if(!$(v).prop("disabled")){
                    $(this).prop("checked", false);
                }
            });
        }

        for(let i=0;i<parentPanelRowsCount;i++){
            if($(parentPanelRows[i]).prop("checked")){
                rowsCount++;
                if(rowsCount === parentPanelRowsCount){
                    parentPanel.find("input").prop("checked", true);
                    parentPanel.find("span:first-child").removeClass("indeterminate").addClass("checked");

                }else if(rowsCount > 0){
                    parentPanel.find("input").prop("checked", true);
                    parentPanel.find("span:first-child").addClass("checked indeterminate");
                }
            }
            else {
                if (rowsCount === 0) {
                    parentPanel.find("input").prop("checked", false);
                    parentPanel.find("span:first-child").removeClass("checked indeterminate");
                }
            }
        }
    });

//for every box in rows
    $(".check-labels").on("change",function () {

        const parentPanel = $(this).parentsUntil(".panel-container");
        const parentPanelRows = parentPanel.find(".check-row").find("span:first-child");
        const parentPanelRowsCount = parentPanel.find(".check-row").length;
        var currentRowsChecked = 0;
        var currentRowsInter = 0;

        const parentRow = $(this).parentsUntil(".panel-body").find(".check-row");
        const childern = $(this).parentsUntil(".panel-body").find(".col-sm-2").find(".check-labels").find("span:first-child:not(.caret)");
        const childernAllCount = $(this).parent(".col-sm-2").siblings(".col-sm-2").find(".check-labels").find("input");
        var childernEnableCount = childernAllCount.length + 1;

        for(var i=0; i< childernAllCount.length + 1; i++){
            if($(childernAllCount[i]).prop("disabled") === true){
                childernEnableCount--;
            }
        }
        childernArr = [];
        childern.each(function (i,v) {

            if($(v).hasClass("checked") && !$(v).hasClass("indeterminate")) {
                childernArr.push(i);
                if (childernArr.length > 0 && childernArr.length < childernEnableCount) {
                    parentRow.find("input").prop("checked",true);
                    parentRow.find("span:first-child").addClass("checked indeterminate");


                } else if (childernArr.length === childernEnableCount) {
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
        for(let i=0;i<parentPanelRowsCount;i++){
            if($(parentPanelRows[i]).hasClass("indeterminate")){
                currentRowsInter++;
                parentPanel.find(".check-panel").find("input").prop("checked",true);
                parentPanel.find(".check-panel").find("span:first-child").addClass("checked indeterminate");
                break;

            }
            else if($(parentPanelRows[i]).hasClass("checked") && !$(parentPanelRows[i]).hasClass("indeterminate")){
                currentRowsChecked++;
                if(currentRowsChecked === parentPanelRowsCount){
                    parentPanel.find(".check-panel").find("input").prop("checked",true);
                    parentPanel.find(".check-panel").find("span:first-child").addClass("checked").removeClass("indeterminate");

                }else{
                    parentPanel.find(".check-panel").find("input").prop("checked",true);
                    parentPanel.find(".check-panel").find("span:first-child").addClass("checked indeterminate");
                }
            }
            else{
                if(currentRowsChecked === 0){
                    parentPanel.find(".check-panel").find("input").prop("checked",false);
                    parentPanel.find(".check-panel").find("span:first-child").removeClass("checked indeterminate");

                }

            }
        }


    });
});


const langs = $(".lang");
const currentLang= $("#lang-info b");
langs.click(function () {
   currentLang.text($(this).text());
});

// avatar image

const avatar = $("#avatar");
const caption = $(".caption:first");
avatar.on("mouseover", function () {
    caption.css("visibility", "visible");
    $(this).css("filter", "brightness(30%)");
});
avatar.on("mouseleave", function () {
    caption.css("visibility", "hidden");
    $(this).css("filter", "brightness(100%)");
});
caption.on("mouseover", function () {
    avatar.css("filter", "brightness(30%)");
    $(this).css("visibility", "visible");
});
caption.on("mouseleave", function () {
    avatar.css("filter", "brightness(100%)");
    $(this).css("visibility", "hidden");


});
// chart

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


// image upload

const editModal = $("#editImg");
const deleteModal = $("#deleteImg");
const editBtn = $("#editImgBtn");
const deleteBtn = $("#deleteImgBtn");
editBtn.click(function () {
   editModal.show();
   deleteModal.hide();
});
deleteBtn.click(function () {
   editModal.hide();
   deleteModal.show();
});


// Start upload preview image
var $uploadCrop,
    tempFilename,
    rawImg,
    imageId;
function readFile(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('.upload-demo').addClass('ready');
            $('#cropImagePop').modal('show');
            rawImg = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

$uploadCrop = $('#upload-demo').croppie({
    viewport: {
        width: 200,
        height: 200,
    },
    enforceBoundary: false,
    enableExif: true
});
$('#cropImagePop').on('shown.bs.modal', function(){
    $uploadCrop.croppie('bind', {
        url: rawImg
    });
});

$('.item-img').on('change', function () {
    imageId = $(this).data('id');
    tempFilename = $(this).val();
    $('#cancelCropBtn').data('id', imageId); readFile(this); });
$('#cropImageBtn').on('click', function (ev) {
    $uploadCrop.croppie('result', {
        type: 'base64',
        format: 'jpeg',
        size: {width: 200, height: 200}
    }).then(function (resp) {
        $("#preview").removeClass("hidden");
        $('#item-img-output').attr('src', resp);
        //$('#cropImagePop').modal('hide');
    });
});

//send image to server
$("#saveAvatar").on("click", function () {

});
// End upload preview image

const detailsModal = $("#details-modal");
const closeModal = $("#close-details");

$(document).ready(function () {
    debugger
   $(this).click(function (e) {
       debugger
       if(!$(e.target).parents().is('.modal') && !$(e.target).is('.c3-event-rect') && !detailsModal.hasClass('hidden')){
           detailsModal.addClass('hidden');
       }
   });
    $(".c3-event-rect").on('click',function () {
        debugger
        detailsModal.removeClass("hidden");
    });
    closeModal.on("click", function () {
        detailsModal.addClass('hidden');
    });

});


// off-canvas-search
const searchContainer = $(".search-container:first");
const searchCotainerTransparent = $(".search-content-container .col-sm-6:last-child");
const searchInput = $("#search-input");
const searchPlaceHolder = $(".search-placeholder:first");
const searchItems = $("#search-list-items-container");
const loader = $("#loader-content-search");
empName.on('focus', function () {
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
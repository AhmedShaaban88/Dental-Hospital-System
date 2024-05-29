const loaderContent = $("#loader-content");
const timePicker = $(".timepicker");
const timePickerNew = $("#timepickerNew");
const timePickerEdit = $("#editTimepicker");
const date = $(".date");
const dateEdit = $("#editDate");
const dateNew = $("#date");
const  clinicName= $("select:eq(1)");
const  clinicNameParentStatus = clinicName.parents(".form-group");
const  helpClinicName= $(".help:eq(0)");
const  helpTextCapacity= $(".help:eq(1)");
const  helpTextDate= $(".help:eq(2)");
const  helpTextTime= $(".help:eq(3)");
const  helpTextCapacityEdit= $(".help:eq(4)");
const  helpTextDateEdit= $(".help:eq(5)");
const  helpTextTimeEdit= $(".help:eq(6)");
const capacity = $("#newFormCapacity");
const capacityEdit = $("#editFormCapacity");
const editBtn = $("table:first tbody tr td:last-child .btn-group ul li:first-child a");
const deleteBtn = $("table:first tbody tr td:last-child .btn-group ul li:eq(1) a");
const newBtn = $("#newCapacityBtn");
const capacityNewModal = $("#addCapacitymodal");
const capacityEditmodal = $("#editCapacitymodal");
const capacityDeleteModal = $("#deleteCapacitymodal");

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
$(".mdtp__button:first-child").text("انهاء");
$(".mdtp__button:last-child").text("تم");
$(".mdtp__am:first-child").text('صباحا');
$(".mdtp__pm").text('مساءا');


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
//gotoup

$("#goTop").click(function () {
    $("html, body").animate( {
        scrollTop: $(this.hash).offset().top
    },800)
});

const form = $("#filterForm");
const table = $(".table-responsive:first");
//mimic loading data according to search text
form.on("submit",function () {
    loaderContent.removeClass('hidden');
    table.hide();
});


newBtn.on("click",function () {
  capacityEditmodal.hide();
  capacityDeleteModal.hide();
  capacityNewModal.show();
});
editBtn.on('click',function () {
    capacityDeleteModal.hide();
    capacityNewModal.hide();
    capacityEditmodal.show();
});
deleteBtn.on('click',function () {
    capacityDeleteModal.show();
    capacityNewModal.hide();
    capacityEditmodal.hide();
});

clinicName.on("change",function () {
    if(!helpClinicName.hasClass('hidden')){
        helpClinicName.addClass("hidden");
    }
});
dateNew.on("change",function () {
    if(!helpTextDate.hasClass('hidden')){
        helpTextDate.addClass("hidden");
    }
});
dateEdit.on("change",function () {
    if(!helpTextDateEdit.hasClass('hidden')){
        helpTextDateEdit.addClass("hidden");
    }
});
timePickerNew.on("change",function () {
    if(!helpTextTime.hasClass('hidden')){
        helpTextTime.addClass("hidden");
    }
});
timePickerEdit.on("change",function () {
    if(!helpTextTimeEdit.hasClass('hidden')){
        helpTextTimeEdit.addClass("hidden");
    }
});
capacity.on("input",function () {
    if(parseInt(capacity.val()) < 0 || isNaN(parseInt(capacity.val()))){
        helpTextCapacity.removeClass("hidden");
    }else {
        helpTextCapacity.addClass("hidden");

    }
});
capacityEdit.on("input",function () {
    if(parseInt(capacityEdit.val()) < 0 || isNaN(parseInt(capacityEdit.val()))){
        helpTextCapacityEdit.removeClass("hidden");
    }else {
        helpTextCapacityEdit.addClass("hidden");

    }
});
$("#clinicNewForm").on("submit",function (e) {
    if(!clinicNameParentStatus.hasClass('hidden') && clinicName.val() === ''){
        helpClinicName.removeClass("hidden");
        e.preventDefault();
    }
    else if(parseInt(capacity.val()) < 0 || isNaN(parseInt(capacity.val()))){
        helpTextCapacity.removeClass("hidden");
        e.preventDefault();
    }
    else if(dateNew.val() === ''){
        helpTextDate.removeClass("hidden");
        e.preventDefault();
    }
    else if(timePickerNew.val() === ''){
        helpTextTime.removeClass("hidden");
        e.preventDefault();
    }

});
$("#clinicEditForm").on("submit",function (e) {
    if(parseInt(capacityEdit.val()) < 0 || isNaN(parseInt(capacityEdit.val()))){
        helpTextCapacityEdit.removeClass("hidden");
        e.preventDefault();
    }
    else if(dateEdit.val() === ''){
        helpTextDateEdit.removeClass("hidden");
        e.preventDefault();
    }
    else if(timePickerEdit.val() === ''){
        helpTextTimeEdit.removeClass("hidden");
        e.preventDefault();
    }

});

$(document).ready(function () {
    $(".addCapacity").modal({
        backdrop: 'static',
        show: false
    });
});
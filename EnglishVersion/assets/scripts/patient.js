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
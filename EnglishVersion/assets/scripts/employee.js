// edit employee info
const editBtn = $("#editBtn");
const returnBtn = $("#returnBtn");
const editEmployeeForm = $("#editEmployee");
const staticPart = $("#static");
const phoneRegex = /^[+]?[(]?[0-9]{3,}[)]?[-\s.]?[0-9]{3,}[-\s.]?[0-9]{4,}$/ig;
const phone1 = $("#phone1");
const phone2 = $("#phone2");
const phone1Help = $("#phone1Help");
const phone2Help = $("#phone2Help");
const job = $("select:eq(0)");
const jobHelp = $("#jobHelp");
const typeHelp = $("#typeHelp");


editBtn.click(function () {
   editEmployeeForm.show();
   staticPart.hide();
});
returnBtn.click(function () {
   editEmployeeForm.hide();
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
const employeeEditForm = $("#editEmployeeForm");
const nameRegex = /^([\u0600-\u06FF\s]){3,}$/;
const employeeName = $("#pName");
const employeeNameHelper = $("#pNameHelper");
employeeName.on('input', function () {
    if(!nameRegex.test($(this).val().trim())){
        employeeNameHelper.removeClass('hidden');
    }else {
        employeeNameHelper.addClass('hidden');
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

employeeEditForm.on("reset",function () {
    $("input[type='text']").each(function (i,v) {
        $(this).attr("value", "")
    });
    $(".checked").each(function () {
        $(this).removeClass("checked");
    })
});

employeeEditForm.on("submit", function (e) {
    if(!nameRegex.test(employeeName.val().trim())){
        employeeNameHelper.removeClass('hidden');
        employeeName.focus();
        e.preventDefault();
    }
    else if (job.val() === ''){
        job.focus();
        jobHelp.removeClass('hidden');
        e.preventDefault();
    }
    else if($(".checked").length === 0){
        jobHelp.addClass('hidden');
        typeHelp.removeClass('hidden');
        $(".radio-inline").focus();
        e.preventDefault();
    }

});


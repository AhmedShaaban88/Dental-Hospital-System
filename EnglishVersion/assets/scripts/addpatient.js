// $("#error").click(function () {
//     new PNotify({
//         title: 'Error!',
//         text: 'sorry unexpected error happend',
//         addclass:'alert bg-danger alert-styled-left',
//     })
// });
// $("#success").click(function () {
//     new PNotify({
//         title: 'Error!',
//         text: 'sorry unexpected error happend',
//         addclass:'alert bg-success alert-styled-left',
//     })
// });
const nameRegex = /^([\u0600-\u06FF\s]){3,}$/;
const phoneRegex = /^[+]?[(]?[0-9]{3,}[)]?[-\s.]?[0-9]{3,}[-\s.]?[0-9]{4,}$/ig;
const birthDate = $("#pBirth");
const year = new Date().getFullYear();
const adult = $("#adult");
const birth = $(".birth");
const patientName = $("#pName");
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

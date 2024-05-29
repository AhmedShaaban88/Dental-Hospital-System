// $("#error").click(function () {
//     new PNotify({
//         title: 'خطأ!',
//         text: 'حدث خطأ غير متوقع',
//         addclass:'alert bg-danger alert-styled-left',
//     })
// });
// $("#success").click(function () {
//     new PNotify({
//         title: 'تم بنجاح',
//         text: 'تم حفظ المعلومات بنجاح',
//         addclass:'alert bg-success alert-styled-left',
//     })
// });
const nameRegex = /^([\u0600-\u06FF\s]){3,}$/;
const phoneRegex = /^[+]?[(]?[0-9]{3,}[)]?[-\s.]?[0-9]{3,}[-\s.]?[0-9]{4,}$/ig;
const employeeName = $("#eName");
const form = $("form:first");
const job = $("select:eq(0)");
const jobHelp = $(".help:eq(1)");
const typeHelp = $(".help:eq(2)");
const phone1 = $("#phone1");
const phone2 = $("#phone2");
const phone1Help = $(".help:eq(3)");
const phone2Help = $(".help:eq(4)");



employeeName.on('input', function () {
  if(!nameRegex.test($(this).val().trim())){
      $(this).next("small").removeClass('hidden');
  }else {
      $(this).next("small").addClass('hidden');
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
form.on("reset",function () {
   $(".checked").each(function () {
       $(this).removeClass("checked");
   })
});
form.on("submit",function (e) {
    if(!nameRegex.test(employeeName.val().trim())){
        employeeName.next("small").removeClass('hidden');
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

//gotoup

$("#goTop").click(function () {
    $("html, body").animate( {
        scrollTop: $(this.hash).offset().top
    },800)
});
const timePicker = $("#timePicker");
const timePickerGeneral = $(".timepicker");
const helpTextTime= $("#timePickerHelp");
const specificForm = $("#specific-time");

const repeate = $("#repeate");
const helpRepeate= $("#repeateHelper");

const startTime = $("#timePicker2");
const helpStartTime= $("#timePicker2Help");

const endTime = $("#timePicker3");
const helpEndTime= $("#timePicker3Help");

const repeateForm = $("#repeate-form");
var regNumber = /^\d+$/;
specificForm.on("submit", function (e) {
    if(timePicker.val() === ''){
        helpTextTime.removeClass("hidden");
        e.preventDefault();
    }
});
timePicker.on("change",function () {
    if(!helpTextTime.hasClass('hidden')){
        helpTextTime.addClass("hidden");
    }
});
repeate.on("input",function () {
    if(!regNumber.test($(this).val())){
        helpRepeate.removeClass("hidden");
    }else{
        helpRepeate.addClass("hidden");

    }
});
startTime.on("change",function () {
    if(!helpStartTime.hasClass('hidden')){
        helpStartTime.addClass("hidden");
    }
});
endTime.on("change",function () {
    if(!helpEndTime.hasClass('hidden')){
        helpEndTime.addClass("hidden");
    }
});
repeateForm.on("submit", function (e) {
    if(repeate.val() === ''){
        helpRepeate.removeClass("hidden");
        e.preventDefault();
    }
    else if(startTime.val() === ''){
        helpStartTime.removeClass("hidden");
        e.preventDefault();
    }
    else if(endTime.val() === ''){
        helpEndTime.removeClass("hidden");
        e.preventDefault();
    }
});
$(document).ready(function () {
    timePickerGeneral.mdtimepicker({
        theme: 'red',
        hourPadding: true
    });
    timePickerGeneral.mdtimepicker({
        theme: 'red',
        hourPadding: true

    });

    $(".mdtp__button:first-child").text("انهاء");
    $(".mdtp__button:last-child").text("تم");
    $(".mdtp__am:first-child").text('صباحا');
    $(".mdtp__pm").text('مساءا');

});






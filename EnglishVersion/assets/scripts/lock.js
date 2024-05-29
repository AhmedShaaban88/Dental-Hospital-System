const date = new Date();
const day = $("#day");
$("#date").text(date.getDate()+ ' / ' + parseInt(date.getMonth()+ 1)  + ' / ' + date.getFullYear());
switch (date.getDay()) {
    case 0:
        day.text('السبت');
        break;
    case 1:
        day.text('الاحد');
        break;
    case 2:
        day.text('الاثنين');
        break;
    case 3:
        day.text('الثلاثاء');
        break;
    case 4:
        day.text('الاربعاء');
        break;
    case 5:
        day.text('الخميس');
        break;
    case 6:
        day.text('الجمعه');
        break;
    default:
        break;


}
$(document).ready(function () {
    var eye = $(".eye:first i");
    var password = $("#passwordInput");
    eye.click(function () {
        if(eye.hasClass('icon-eye-blocked')) {
            eye.removeClass('icon-eye-blocked').addClass('icon-eye');
            password.attr('type', 'text');
        }else{
            eye.removeClass('icon-eye').addClass('icon-eye-blocked');
            password.attr('type', 'password');
        }
    });

});
const raysTypes = $("#raysTypes");
const raysTypeHelper = $("#raysTypeHelper");
const maxRays = $("#maxRays");
const raysMaxHelper = $("#raysMaxHelper");
const raySettingForm = $("#raySettingForm");

raysTypes.on("change", function () {
    if(!raysTypeHelper.hasClass('hidden')){
        raysTypeHelper.addClass("hidden");
    }else if($(this).val() === ''){
        raysTypeHelper.removeClass("hidden");
    }
});
maxRays.on("change", function () {
    if(parseInt($(this).val()) <= 0){
            raysMaxHelper.removeClass("hidden");
    }else{
        raysMaxHelper.addClass("hidden");
    }

});

raySettingForm.on("submit", function (e) {
    if(raysTypes.val() === ''){
        raysTypeHelper.removeClass('hidden');
        e.preventDefault();
    }
    else if(parseInt($(maxRays).val()) <= 0 || $(maxRays).val() === ''){
        raysMaxHelper.removeClass('hidden');
       e.preventDefault();
   }
});

const raysTypes = $("#raysTypes");
const raysTypeHelper = $("#raysTypeHelper");
const maxRays = $("#maxRays");
const raysMaxHelper = $("#raysMaxHelper");
const raySettingForm = $("#raySettingForm");
const raysTypesEdit = $("#raysTypesEdit");
const raysTypeHelperEdit = $("#raysTypeHelperEdit");
const maxRaysEdit = $("#maxRaysEdit");
const raysMaxHelperEdit = $("#raysMaxHelperEdit");
const raySettingFormEdit = $("#raySettingFormEdit");
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

raysTypesEdit.on("change", function () {
    if(!raysTypeHelperEdit.hasClass('hidden')){
        raysTypeHelperEdit.addClass("hidden");
    }else if($(this).val() === ''){
        raysTypeHelperEdit.removeClass("hidden");
    }
});
maxRaysEdit.on("change", function () {
    if(parseInt($(this).val()) <= 0){
        raysMaxHelperEdit.removeClass("hidden");
    }else{
        raysMaxHelperEdit.addClass("hidden");
    }

});

raySettingFormEdit.on("submit", function (e) {
    if(raysTypesEdit.val() === ''){
        raysTypeHelperEdit.removeClass('hidden');
        e.preventDefault();
    }
    else if(parseInt($(maxRaysEdit).val()) <= 0 || $(maxRaysEdit).val() === ''){
        raysMaxHelperEdit.removeClass('hidden');
        e.preventDefault();
    }
});

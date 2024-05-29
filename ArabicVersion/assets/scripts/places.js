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

$("select:first").on("change",function () {
    $("#search-input").removeAttr('disabled').css("background-color", "#ffffff");
   $("button[type='submit']").removeAttr('disabled');
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

const mainLocation = $("#mainLocation");
const secLocation = $("#secLoc");
const secLocationEn = $("#secLocEn");
const floor = $("#floor");
const specialization = $("#Mainspec");

const  helpTextMain= $(".help:eq(0)");
const  helpTextSec= $(".help:eq(1)");
const  helpTextEn= $(".help:eq(2)");
const  helpTextFloor= $(".help:eq(3)");
const  helpTextSpecialization= $(".help:eq(4)");

mainLocation.on("change",function () {
    if(!helpTextMain.hasClass('hidden')){
        helpTextMain.addClass("hidden");
    }
});
secLocation.on("input",function () {
    if(!helpTextSec.hasClass('hidden')){
        helpTextSec.addClass("hidden");
    }else if(secLocation.val() === ''){
        helpTextSec.removeClass("hidden");
    }
});
secLocationEn.on("input",function () {
    if(!helpTextEn.hasClass('hidden')){
        helpTextEn.addClass("hidden");
    }else if(secLocationEn.val() === ''){
        helpTextEn.removeClass("hidden");
    }
});
floor.on("change",function () {
    if(!helpTextFloor.hasClass('hidden')){
        helpTextFloor.addClass("hidden");
    }
});
specialization.on("change",function () {
    if(!helpTextSpecialization.hasClass('hidden')){
        helpTextSpecialization.addClass("hidden");
    }
});

$("#placeForm").on("submit",function (e) {
    if(mainLocation.val() === ''){
        helpTextMain.removeClass("hidden");
        e.preventDefault();
    }
    else if(secLocation.val() === ''){
        helpTextSec.removeClass("hidden");
        e.preventDefault();
    }
    else if(secLocationEn.val() === ''){
        helpTextEn.removeClass("hidden");
        e.preventDefault();
    }
    else if(floor.val() === ''){
        helpTextFloor.removeClass("hidden");
        e.preventDefault();
    }
    else if(specialization.val() === null){
        helpTextSpecialization.removeClass("hidden");
        e.preventDefault();
    }
});

const editModal = $("#editPlace");
const deleteModal = $("#deletePlace");
const editModalBtn  =  $("table:first tbody tr td:last-child .btn-group ul li:first-child a");
const deleteModalBtn  = $("table:first tbody tr td:last-child .btn-group ul li:eq(1) a");

editModalBtn.click(function () {
    editModal.show();
    deleteModal.hide();
});
deleteModalBtn.click(function () {
    editModal.hide();
    deleteModal.show();
});


const mainLocationEdit = $("#mainLocationEdit");
const secLocationEdit = $("#secLocEdit");
const secLocationEnEdit = $("#secLocEnEdit");
const floorEdit = $("#floorEdit");
const specializationEdit = $("#specEdit");

const  helpTextMainEdit= $(".help:eq(5)");
const  helpTextSecEdit= $(".help:eq(6)");
const  helpTextSecEnEdit= $(".help:eq(7)");
const  helpTextFloorEdit= $(".help:eq(8)");
const  helpTextSpecializationEdit= $(".help:eq(9)");

mainLocationEdit.on("change",function () {
    if(!helpTextMainEdit.hasClass('hidden')){
        helpTextMainEdit.addClass("hidden");
    }
});
secLocationEdit.on("input",function () {
    if(!helpTextSecEdit.hasClass('hidden')){
        helpTextSecEdit.addClass("hidden");
    }else if(secLocationEdit.val() === ''){
        helpTextSecEdit.removeClass("hidden");
    }
});
secLocationEnEdit.on("input",function () {
    if(!helpTextSecEnEdit.hasClass('hidden')){
        helpTextSecEnEdit.addClass("hidden");
    }else if(secLocationEnEdit.val() === ''){
        helpTextSecEnEdit.removeClass("hidden");
    }
});
floorEdit.on("change",function () {
    if(!helpTextFloorEdit.hasClass('hidden')){
        helpTextFloorEdit.addClass("hidden");
    }
});
specializationEdit.on("change",function () {
    if(!helpTextSpecializationEdit.hasClass('hidden')){
        helpTextSpecializationEdit.addClass("hidden");
    }
});

$("#placeFormEdit").on("submit",function (e) {
    if(mainLocationEdit.val() === ''){
        helpTextMainEdit.removeClass("hidden");
        e.preventDefault();
    }
    else if(secLocationEdit.val() === ''){
        helpTextSecEdit.removeClass("hidden");
        e.preventDefault();
    }
    else if(secLocationEnEdit.val() === ''){
        helpTextSecEnEdit.removeClass("hidden");
        e.preventDefault();
    }
    else if(floorEdit.val() === ''){
        helpTextFloorEdit.removeClass("hidden");
        e.preventDefault();
    }
    else if(specializationEdit.val() === null){
        helpTextSpecializationEdit.removeClass("hidden");
        e.preventDefault();
    }
});
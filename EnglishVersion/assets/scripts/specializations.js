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

const specName = $("#specName");

const  helpTextSpecName= $(".help:eq(0)");


specName.on("input",function () {
    if(!helpTextSpecName.hasClass('hidden')){
        helpTextSpecName.addClass("hidden");
    }else if(specName.val() === ''){
        helpTextSpecName.removeClass("hidden");
    }
});


$("#specForm").on("submit",function (e) {
    if(specName.val() === ''){
        helpTextSpecName.removeClass("hidden");
        e.preventDefault();
    }
});

const editModal = $("#editSpec");
const deleteModal = $("#deleteSpec");
const editModalBtn  = $("table:first tbody tr td:last-child .btn-group ul li:first-child a");
const deleteModalBtn  = $("table:first tbody tr td:last-child .btn-group ul li:eq(1) a");

editModalBtn.click(function () {
    editModal.show();
    deleteModal.hide();
});
deleteModalBtn.click(function () {
    editModal.hide();
    deleteModal.show();
});


const specNameEdit = $("#specNameEdit");

const  helpTextSpecNameEdit= $(".help:eq(1)");


specNameEdit.on("input",function () {
    if(!helpTextSpecNameEdit.hasClass('hidden')){
        helpTextSpecNameEdit.addClass("hidden");
    }else if(specNameEdit.val() === ''){
        helpTextSpecNameEdit.removeClass("hidden");
    }
});


$("#specFormEdit").on("submit",function (e) {
    if(specNameEdit.val() === ''){
        helpTextSpecNameEdit.removeClass("hidden");
        e.preventDefault();
    }
});
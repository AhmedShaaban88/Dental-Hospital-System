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

const specNameEn = $("#specNameEn");

const  helpTextSpecNameEn = $(".help:eq(1)");


specName.on("input",function () {
    if(!helpTextSpecName.hasClass('hidden')){
        helpTextSpecName.addClass("hidden");
    }else if(specName.val() === ''){
        helpTextSpecName.removeClass("hidden");
    }
});
specNameEn.on("input",function () {
    if(!helpTextSpecNameEn.hasClass('hidden')){
        helpTextSpecNameEn.addClass("hidden");
    }else if(specNameEn.val() === ''){
        helpTextSpecNameEn.removeClass("hidden");
    }
});


$("#specForm").on("submit",function (e) {
    if(specName.val() === ''){
        helpTextSpecName.removeClass("hidden");
        e.preventDefault();
    }
    else if(specNameEn.val() === ''){
        helpTextSpecNameEn.removeClass("hidden");
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

const  helpTextSpecNameEdit= $(".help:eq(2)");

const specNameEditEn = $("#specNameEditEn");

const  helpTextSpecNameEditEn= $(".help:eq(3)");


specNameEdit.on("input",function () {
    if(!helpTextSpecNameEdit.hasClass('hidden')){
        helpTextSpecNameEdit.addClass("hidden");
    }else if(specNameEdit.val() === ''){
        helpTextSpecNameEdit.removeClass("hidden");
    }
});
specNameEditEn.on("input",function () {
    if(!helpTextSpecNameEditEn.hasClass('hidden')){
        helpTextSpecNameEditEn.addClass("hidden");
    }else if(specNameEditEn.val() === ''){
        helpTextSpecNameEditEn.removeClass("hidden");
    }
});


$("#specFormEdit").on("submit",function (e) {
    if(specNameEdit.val() === ''){
        helpTextSpecNameEdit.removeClass("hidden");
        e.preventDefault();
    }
    else if(specNameEditEn.val() === ''){
        helpTextSpecNameEditEn.removeClass("hidden");
        e.preventDefault();
    }
});
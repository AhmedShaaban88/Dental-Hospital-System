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

const arabicName = $("#arabicName");
const englishName = $("#englishName");
const arabicNameEdit = $("#arabicNameEdit");
const englishNameEdit = $("#englishNameEdit");
const  helpTextArabicName= $(".help:eq(0)");
const  helpTextEnglishName= $(".help:eq(1)");
const  helpTextArabicNameEdit= $(".help:eq(2)");
const  helpTextEnglishNameEdit= $(".help:eq(3)");
const newForm = $("#newDepForm");
const editForm = $("#editDepForm");
const editBtn = $("table:first tbody tr td:last-child .btn-group ul li:first-child a");
const deleteBtn = $("table:first tbody tr td:last-child .btn-group ul li:eq(1) a");
const newBtn = $("#newDept");
const deptNewModal = $("#newDepartmentModal");
const deptEditmodal = $("#editDepartmentModal");
const deptDeleteModal = $("#deleteDepartmentModal");


newBtn.on("click",function () {
    deptEditmodal.hide();
    deptDeleteModal.hide();
    deptNewModal.show();
});
editBtn.on('click',function () {
    deptDeleteModal.hide();
    deptNewModal.hide();
    deptEditmodal.show();
});
deleteBtn.on('click',function () {
    deptDeleteModal.show();
    deptNewModal.hide();
    deptEditmodal.hide();
});
arabicName.on("input",function () {
    if(!helpTextArabicName.hasClass('hidden')){
        helpTextArabicName.addClass("hidden");
    }else if($(this).val() === ''){
        helpTextArabicName.removeClass("hidden");
    }
});
englishName.on("input",function () {
    if(!helpTextEnglishName.hasClass('hidden')){
        helpTextEnglishName.addClass("hidden");
    }else if($(this).val() === ''){
        helpTextEnglishName.removeClass("hidden");
    }
});
arabicNameEdit.on("input",function () {
    if(!helpTextArabicNameEdit.hasClass('hidden')){
        helpTextArabicNameEdit.addClass("hidden");
    }else if($(this).val() === ''){
        helpTextArabicNameEdit.removeClass("hidden");
    }
});
englishNameEdit.on("input",function () {
    if(!helpTextEnglishNameEdit.hasClass('hidden')){
        helpTextEnglishNameEdit.addClass("hidden");
    }else if($(this).val() === ''){
        helpTextEnglishNameEdit.removeClass("hidden");
    }
});

newForm.on("submit",function (e) {
    if(arabicName.val() === ''){
        helpTextArabicName.removeClass("hidden");
        e.preventDefault();
    }else if(englishName.val() === ''){
        helpTextEnglishName.removeClass("hidden");
        e.preventDefault();
    }
});
editForm.on("submit",function (e) {
    if(arabicNameEdit.val() === ''){
        helpTextArabicNameEdit.removeClass("hidden");
        e.preventDefault();
    }else if(englishNameEdit.val() === ''){
        helpTextEnglishNameEdit.removeClass("hidden");
        e.preventDefault();
    }
});
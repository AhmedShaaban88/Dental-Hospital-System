const arabicName = $("#arabicName");
const englishName = $("#englishName");
const  helpTextArabicName= $(".help:eq(0)");
const  helpTextEnglishName= $(".help:eq(1)");
const arabicNameSec = $("#arabicNameSec");
const englishNameSec = $("#englishNameSec");
const  helpTextArabicNameSec= $(".help:eq(2)");
const  helpTextEnglishNameSec= $(".help:eq(3)");
const arabicNameMainEdit = $("#arabicNameEdit");
const englishNameMainEdit = $("#englishNameEdit");
const  helpTextArabicNameMainEdit= $(".help:eq(4)");
const  helpTextEnglishNameMainEdit= $(".help:eq(5)");
const arabicNameSubEdit = $("#arabicNameSubEdit");
const englishNameSubEdit = $("#englishNameSubEdit");
const  helpTextArabicNameSubEdit= $(".help:eq(6)");
const  helpTextEnglishNameSubEdit= $(".help:eq(7)");
const secBtn = $(".secBtn");
const editMainBtn = $(".editMain");
const deleteMainBtn = $(".deleteMain");
const editSubBtn = $(".editSubBtn");
const deleteSubBtn = $(".deleteSubBtn");
const secServices = $("#secondaryServices");
const editMainServices = $("#editMainService");
const deleteMainServices = $("#deleteMainService");
const editSubServices = $("#editSubService");
const deleteSubServices = $("#deleteSubService");
const treeHeader = $(".parent-tree-header");
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
arabicNameSec.on("input",function () {
    if(!helpTextArabicNameSec.hasClass('hidden')){
        helpTextArabicNameSec.addClass("hidden");
    }else if($(this).val() === ''){
        helpTextArabicNameSec.removeClass("hidden");
    }
});
englishNameSec.on("input",function () {
    if(!helpTextEnglishNameSec.hasClass('hidden')){
        helpTextEnglishNameSec.addClass("hidden");
    }else if($(this).val() === ''){
        helpTextEnglishNameSec.removeClass("hidden");
    }
});
arabicNameMainEdit.on("input",function () {
    if(!helpTextArabicNameMainEdit.hasClass('hidden')){
        helpTextArabicNameMainEdit.addClass("hidden");
    }else if($(this).val() === ''){
        helpTextArabicNameMainEdit.removeClass("hidden");
    }
});
englishNameMainEdit.on("input",function () {
    if(!helpTextEnglishNameMainEdit.hasClass('hidden')){
        helpTextEnglishNameMainEdit.addClass("hidden");
    }else if($(this).val() === ''){
        helpTextEnglishNameMainEdit.removeClass("hidden");
    }
});
arabicNameSubEdit.on("input",function () {
    if(!helpTextArabicNameSubEdit.hasClass('hidden')){
        helpTextArabicNameSubEdit.addClass("hidden");
    }else if($(this).val() === ''){
        helpTextArabicNameSubEdit.removeClass("hidden");
    }
});
englishNameSubEdit.on("input",function () {
    if(!helpTextEnglishNameSubEdit.hasClass('hidden')){
        helpTextEnglishNameSubEdit.addClass("hidden");
    }else if($(this).val() === ''){
        helpTextEnglishNameSubEdit.removeClass("hidden");
    }
});
secBtn.on('click',function () {
    secServices.show();
    editMainServices.hide();
    deleteMainServices.hide();
});
editMainBtn.on('click',function () {
    editMainServices.show();
    secServices.hide();
    deleteMainServices.hide();
});
deleteMainBtn.on('click',function () {
    deleteMainServices.show();
    editMainServices.hide();
    secServices.hide();
});
editSubBtn.on('click',function () {
    editSubServices.show();
    deleteSubServices.hide();
});
deleteSubBtn.on('click',function () {
    deleteSubServices.show();
    editSubServices.hide();
});

$("#mainForm").on("submit",function (e) {
    if(arabicName.val() === ''){
        helpTextArabicName.removeClass("hidden");
        e.preventDefault();
    }else if(englishName.val() === ''){
        helpTextEnglishName.removeClass("hidden");
        e.preventDefault();
    }
});
$("#secondaryForm").on("submit",function (e) {
    if(arabicNameSec.val() === ''){
        helpTextArabicNameSec.removeClass("hidden");
        e.preventDefault();
    }else if(englishNameSec.val() === ''){
        helpTextEnglishNameSec.removeClass("hidden");
        e.preventDefault();
    }
});
$("#editMainForm").on("submit",function (e) {
    if(arabicNameMainEdit.val() === ''){
        helpTextArabicNameMainEdit.removeClass("hidden");
        e.preventDefault();
    }else if(englishNameMainEdit.val() === ''){
        helpTextEnglishNameMainEdit.removeClass("hidden");
        e.preventDefault();
    }
});
$("#editSubForm").on("submit",function (e) {
    if(arabicNameSubEdit.val() === ''){
        helpTextArabicNameSubEdit.removeClass("hidden");
        e.preventDefault();
    }else if(englishNameSubEdit.val() === ''){
        helpTextEnglishNameSubEdit.removeClass("hidden");
        e.preventDefault();
    }
});

treeHeader.click(function () {
   $(this).parents('.tree-parent').next('.child-container').toggle(300);
});

//gotoup
$("#goTop").click(function () {
    $("html, body").animate( {
        scrollTop: $(this.hash).offset().top
    },800)
});
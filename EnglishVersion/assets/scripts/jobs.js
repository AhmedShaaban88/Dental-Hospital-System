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
const jobName = $("#jobName");
const jobNameEdit = $("#jobNameEdit");
const  helpTextJobName= $(".help:eq(0)");
const  helpTextjobNameEdit= $(".help:eq(1)");
const newForm = $("#jobForm");
const editForm = $("#editJobForm");
const editBtn = $("table:first tbody tr td:last-child .btn-group ul li:first-child a");
const deleteBtn = $("table:first tbody tr td:last-child .btn-group ul li:eq(1) a");
const newBtn = $("#newJob");
const jobNewModal = $("#newJobModal");
const jobEditModal = $("#editJobModal");
const jobDeleteModal = $("#deleteJobModal");

newBtn.on("click",function () {
    jobEditModal.hide();
    jobDeleteModal.hide();
    jobNewModal.show();
});
editBtn.on('click',function () {
    jobDeleteModal.hide();
    jobNewModal.hide();
    jobEditModal.show();
});
deleteBtn.on('click',function () {
    jobDeleteModal.show();
    jobNewModal.hide();
    jobEditModal.hide();
});
jobName.on("input",function () {
    if(!helpTextJobName.hasClass('hidden')){
        helpTextJobName.addClass("hidden");
    }else if(this.val() === ''){
        helpTextJobName.removeClass("hidden");
    }
});
jobNameEdit.on("input",function () {
    if(!helpTextjobNameEdit.hasClass('hidden')){
        helpTextjobNameEdit.addClass("hidden");
    }else if(this.val() === ''){
        helpTextjobNameEdit.removeClass("hidden");
    }
});

newForm.on("submit",function (e) {
    if(jobName.val() === ''){
        helpTextJobName.removeClass("hidden");
        e.preventDefault();
    }
});
editForm.on("submit",function (e) {
    if(jobNameEdit.val() === ''){
        helpTextjobNameEdit.removeClass("hidden");
        e.preventDefault();
    }
});
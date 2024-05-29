//sorting table
$("#plan-table th").click(function () {
    var y = $("#plan-table tr:not(:first)");
    var current = $(this).find(".caret");
    var currentBold = $(this).find("span:first-child");
    current.toggleClass('sorted');
    currentBold.toggleClass('text-bold');
    $(".table:first-child th .caret").not(current).removeClass("sorted");
    $(".table:first-child th span:first-child").not(currentBold).removeClass("text-bold");
    var x = y.toArray().reverse();
    $(x).appendTo($("tbody:first"));
});

const editBtn = $(".editChartBtn");
const deleteBtn = $(".deleteChartBtn");
const editModal = $("#editChart");
const deleteModal = $("#deletePlan");

editBtn.click(function () {
    deleteModal.hide();
    editModal.show();
});
deleteBtn.click(function () {
    editModal.hide();
    deleteModal.show();
});

const loader = $("#loader-content");
const beforeSearch = $("#before-search");
const waitingList = $("#waiting-list");
$("select:first").on("change",function () {
    loader.removeClass('hidden');
    waitingList.hide();
    beforeSearch.hide();
   setTimeout(function () {
      waitingList.show();
      loader.addClass('hidden')();
   },1000)
});

//gotoup

$("#goTop").click(function () {
    $("html, body").animate( {
        scrollTop: $(this.hash).offset().top
    },800)
});
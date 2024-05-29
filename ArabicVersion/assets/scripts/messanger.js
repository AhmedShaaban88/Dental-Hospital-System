const loaderContent = $("#loader-content");
const people = $(".navigation .media");
let currentActiveImg = $("#user-active-img");
let currentActiveName = $("#user-active-name");
let currentActiveStatus = $("#user-active-status");
const statusChat = $(".status-chat");
const currentChatContainer = $(".current-container");
const sendBtn = $("#send-btn");
const message = $("#message-content");
const file = $("input[type='file']");
$(".chat-list").niceScroll();
$(".last-message").each(function (i,v) {
    if($(v).text().length > 20){
        $(v).text($(v).text().substr(0,20) + ' ...')
    }
});
// const media = document.getElementsByClassName("media-list")[0];
//
// $(document).ready( function () {
//     media.scrollTop = media.scrollHeight - 200;
// });


people.on("click",function () {
    currentActiveImg.attr("src",$(this).find("img").attr("src"));
    currentActiveName.html($(this).find(".media-body").find(".user-name").html());

    if($(this).find(".status").hasClass("online")){
        currentActiveStatus.addClass("online");
        currentActiveStatus.find("#active").removeClass("hidden");
        currentActiveStatus.find("#offline").addClass("hidden");

    }else{
        currentActiveStatus.removeClass("online");
        currentActiveStatus.find("#active").addClass("hidden");
        currentActiveStatus.find("#offline").removeClass("hidden").html("نشط منذ" + " " +"<b>10 د</b>");

    }
    $(".chat-list").niceScroll();

});
senderInfo = {
    img: "../shared/images/avatar.png"
};

var modalTemplate = '<div class="modal-dialog modal-lg" role="document">\n' +
    '  <div class="modal-content">\n' +
    '    <div class="modal-header">\n' +
    '      <div class="kv-zoom-actions btn-group">{toggleheader}{fullscreen}{borderless}{close}</div>\n' +
    '      <h6 class="modal-title">{heading} <small><span class="kv-zoom-title"></span></small></h6>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '      <div class="floating-buttons btn-group"></div>\n' +
    '      <div class="kv-zoom-body file-zoom-content"></div>\n' + '{prev} {next}\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n';

// Buttons inside zoom modal
var previewZoomButtonClasses = {
    toggleheader: 'btn btn-default btn-icon btn-xs btn-header-toggle',
    fullscreen: 'btn btn-default btn-icon btn-xs',
    borderless: 'btn btn-default btn-icon btn-xs',
    close: 'btn btn-default btn-icon btn-xs'
};

// Icons inside zoom modal classes
var previewZoomButtonIcons = {
    prev: '<i class="icon-arrow-right32"></i>',
    next: '<i class="icon-arrow-left32"></i>',
    toggleheader: '<i class="icon-menu-open"></i>',
    fullscreen: '<i class="icon-screen-full"></i>',
    borderless: '<i class="icon-alignment-unalign"></i>',
    close: '<i class="icon-cross3"></i>'
};

// File actions
var fileActionSettings = {
    zoomClass: 'btn btn-link btn-xs btn-icon',
    zoomIcon: '<i class="icon-zoomin3"></i>',
    dragClass: 'btn btn-link btn-xs btn-icon',
    dragIcon: '<i class="icon-three-bars"></i>',
    removeClass: 'btn btn-link btn-icon btn-xs',
    removeIcon: '<i class="icon-trash"></i>',
    indicatorNew: '<i class="icon-file-plus text-slate"></i>',
    indicatorSuccess: '<i class="icon-checkmark3 file-icon-large text-success"></i>',
    indicatorError: '<i class="icon-cross2 text-danger"></i>',
    indicatorLoading: '<i class="icon-spinner2 spinner text-muted"></i>',

};

$(".file-input-ajax").fileinput({
    browseLabel: 'تصفح',
    browseIcon: '<span>اختر</span>',
    uploadIcon: '<span>حفظ</span>',
    removeIcon: '<span>حذف الكل</span>',
    uploadUrl: "http://www.google.com", // server upload action
    uploadAsync: true,
    maxFileCount: 10000,
    allowedFileExtensions: ["jpg", "png", "jpeg"],
    initialPreview: [],
    layoutTemplates: {
        icon: '<i class="icon-file-check"></i>',
        modal: modalTemplate
    },
    previewZoomButtonClasses: previewZoomButtonClasses,
    previewZoomButtonIcons: previewZoomButtonIcons,
    fileActionSettings: fileActionSettings
});
$(".file-input").fileinput({
    browseLabel: 'تصفح',
    browseIcon: '<span>اختر</span>',
    uploadIcon: '<span>حفظ</span>',
    removeIcon: '<span>حذف الكل</span>',
    uploadUrl: "http://www.google.com", // server upload action
    uploadAsync: true,
    maxFileCount: 10000,
    allowedFileExtensions: [".pdf",".doc",".docs",".xls",".xlsx",".txt"],
    initialPreview: [],
    layoutTemplates: {
        icon: '<i class="icon-file-check"></i>',
        modal: modalTemplate
    },
    previewZoomButtonClasses: previewZoomButtonClasses,
    previewZoomButtonIcons: previewZoomButtonIcons,
    fileActionSettings: fileActionSettings
});
$(document).on("onInit.fb", function (e, instance) {
    if($(".fancybox-toolbar").find("#rotate_button").length === 0){
        $(".fancybox-toolbar").prepend('<button id="rotate_button" title="Rotate" class="fancybox-button"><i class="icon-rotate-ccw3"></i></button>')
    }
    if($(".fancybox-toolbar").find("#delete_button").length === 0){
        $(".fancybox-toolbar").prepend('<button id="delete_button" title="Delete" class="fancybox-button" data-target="#deleteXRays" data-toggle="modal"><i class="icon-trash-alt"></i></button>')
    }
    var click = 1;
    $(".fancybox-toolbar").on("click", "#rotate_button",function () {
        var n = 90 * click++;
        $(".fancybox-image").css("webkitTransform", 'rotate(' + n + 'deg)');
        $(".fancybox-image").css("mozTransform", "rotate(" + n + 'deg)');
    })
});

$('[data-fancybox="gallery"]').fancybox({
    buttons: [
        "zoom",
        "slideShow",
        "fullScreen",
        "download",
        "thumbs",
        "close"
    ],
});

sendBtn.on("click", function () {
    const msg = message.val().trim();
    const time = new Date();
    const dateTime = {hour: time.getHours(), minute: time.getMinutes()};
    if(msg.length > 0) {
        $(".chat-list").append(` <li class="media date-step">
                            <span>اليوم</span>
                        </li>
                        <li class=\"media\">
      <div class=\"media-left\"><a>
      <img src=${senderInfo.img} class=\"img-circle\" alt=\"\">
      </a>
      </div><div class=\"media-body\">
      <div class=\"media-content\">${msg}</div>
      <span class=\"media-annotation display-block mt-10\">${dateTime.hour + ":" + dateTime.minute}  </span></div></li>`);
        message.val("");
    }
});


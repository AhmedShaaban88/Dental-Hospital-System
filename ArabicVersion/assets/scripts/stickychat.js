const people = $(".people li a");



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

var chatsCount;
var lastAdded ;
var activeIds = [];
if(window.innerWidth > 993){
    chatsCount = 3;
}else if(window.innerWidth > 768 && window.innerWidth < 993){
    chatsCount = 2;
}else{
    chatsCount = 1;
}
people.on("click", function () {

    const userId = $(this).attr("id");
    if(activeIds.indexOf(userId) === -1){
        activeIds.push(userId);
        const src = $(this).find("img").attr("src");
        const name = $(this).find(".text-semibold").html();
        const status = $(this).find(".media-right").find("span:first").hasClass("status-mark");
        if($(".chat-panel").length < chatsCount){
            lastAdded = ("<div id="+userId+" class=\"panel chat-panel chat-container-individual\">\n" +
                "    <div class=\"panel-heading\">\n" +
                "        <h5 class=\"text-bold panel-title border-bottom-blue\">\n" +
                "\n" +
                "            <span onclick='addMoreOrRemove(this)' class=\"text-muted pointer close-chat\"><i class=\"icon-x\"></i></span>" +
                "            <a class=\"collapsed btn current-container\" data-toggle=\"collapse\" data-parent=\"#accordion-styled\" href="+ '#chat-active'+userId +">\n" +
                "\n" +
                "                        <img class=\"user-active-img\" alt=\"avatar\" src= "+ src +">\n"+
                "                        <span class=\"ml-5 user-active-name\">"+name+"</span>\n" +
                "                        <span  class=\"status online user-active-status\">\n" +
                "                                       <i class=\"icon-circle2\"></i>\n" +
                "\n" +
                "                                    </span>\n" +
                "                        <span class=\"badge badge-danger\">1</span>\n" +
                "\n" +
                "                    </a>\n" +
                "\n" +
                "        </h5>\n" +
                "        <div id="+ 'chat-active'+userId +" class=\"panel-collapse collapse\">\n" +
                "            <div class=\"panel-body\">\n" +
                "\n" +
                "                <ul class=\"media-list chat-list content-group\">\n" +
                "                    <!---------------loader ------------------------------------>\n" +
                "                    <div class=\"pace-demo loader-content\">\n" +
                "                        <div class=\"theme_tail theme_tail_with_text\"><div class=\"pace_progress\" data-progress=\"60\" style=\"width: 60%;\"></div><div class=\"pace_activity\"></div></div>\n" +
                "                    </div>\n" +
                "                    <li class=\"media date-step\">\n" +
                "                        <span>10 فبراير</span>\n" +
                "                    </li>\n" +
                "\n" +
                "                    <li class=\"media\">\n" +
                "                        <div class=\"media-left\">\n" +
                "                            <a>\n" +
                "                                <img src=\"../shared/images/avatar.png\" class=\"img-circle\" alt=\"\">\n" +
                "                            </a>\n" +
                "                        </div>\n" +
                "\n" +
                "                        <div class=\"media-body\">\n" +
                "                            <div class=\"media-content\">\n" +
                "                                Below mounted advantageous spread yikes bat stubbornly crud a and a excepting<br>\n" +
                "                                <a href=\"#\">File.txt</a>\n" +
                "                            </div>\n" +
                "                            <span class=\"media-annotation text-right display-block mt-10\">9:54 am </span>\n" +
                "                        </div>\n" +
                "                    </li>\n" +
                "\n" +
                "                    <li class=\"media reversed\">\n" +
                "                        <div class=\"media-body\">\n" +
                "                            <div class=\"media-content\">Far squid and that hello fidgeted and when. As this oh darn but slapped casually husky sheared that cardinal hugely one and some unnecessary factiously hedgehog a feeling one rudely much but one owing sympathetic regardless more astonishing evasive tasteful much.</div>\n" +
                "                            <span class=\"media-annotation display-block mt-10\"> 10:24 am </span>\n" +
                "                        </div>\n" +
                "\n" +
                "                        <div class=\"media-right\">\n" +
                "                            <a href=\"#\">\n" +
                "                                <img src=\"../shared/images/avatar.png\" class=\"img-circle\" alt=\"\">\n" +
                "                            </a>\n" +
                "                        </div>\n" +
                "                    </li>\n" +
                "                    <li class=\"media reversed\">\n" +
                "                        <div class=\"media-body\">\n" +
                "                            <div class=\"media-content\">\n" +
                "                                <a href=\"../shared/images/bg1.jpg\" data-fancybox=\"gallery\">\n" +
                "                                    <img alt=\"ray-image\" src=\"../shared/images/bg1.jpg\" class=\"x-ray-img\">\n" +
                "                                </a>\n" +
                "                                <a href=\"../shared/images/bg2.jpg\" data-fancybox=\"gallery\">\n" +
                "                                    <img alt=\"ray-image\" src=\"../shared/images/bg2.jpg\" class=\"x-ray-img\">\n" +
                "                                </a>\n" +
                "                                <a href=\"../shared/images/bg3.jpg\" data-fancybox=\"gallery\">\n" +
                "                                    <img alt=\"ray-image\" src=\"../shared/images/bg3.jpg\" class=\"x-ray-img\">\n" +
                "                                </a> <a href=\"../shared/images/bg1.jpg\" data-fancybox=\"gallery\">\n" +
                "                                <img alt=\"ray-image\" src=\"../shared/images/bg1.jpg\" class=\"x-ray-img\">\n" +
                "                            </a>\n" +
                "                                <a href=\"../shared/images/bg2.jpg\" data-fancybox=\"gallery\">\n" +
                "                                    <img alt=\"ray-image\" src=\"../shared/images/bg2.jpg\" class=\"x-ray-img\">\n" +
                "                                </a>\n" +
                "                                <a href=\"../shared/images/bg3.jpg\" data-fancybox=\"gallery\">\n" +
                "                                    <img alt=\"ray-image\" src=\"../shared/images/bg3.jpg\" class=\"x-ray-img\">\n" +
                "                                </a>\n" +
                "                            </div>\n" +
                "                            <span class=\"media-annotation display-block mt-10\"> 10:24 am </span>\n" +
                "                        </div>\n" +
                "\n" +
                "                        <div class=\"media-right\">\n" +
                "                            <a href=\"#\">\n" +
                "                                <img src=\"../shared/images/avatar.png\" class=\"img-circle\" alt=\"\">\n" +
                "                            </a>\n" +
                "                        </div>\n" +
                "                    </li>\n" +
                "\n" +
                "\n" +
                "\n" +
                "\n" +
                "\n" +
                "\n" +
                "                </ul>\n" +
                "\n" +
                "                <div class=\"row\">\n" +
                "                    <div class=\"col-sm-12\">\n" +
                "                        <form>\n" +
                "                            <textarea name=\"enter-message\" class=\"form-control message-content content-group\" rows=\"2\" cols=\"1\" placeholder=\"اكتب رساله...\"></textarea>\n" +
                "                            <button type=\"button\" class=\"btn btn-rounded send-btn\"><img src=\"../shared/images/send.png\"></button>\n" +
                "                            <ul class=\"icons-list icons-list-extended mt-10 text-left\">\n" +
                "                                <li><a data-target=\".addPhotos\" data-toggle=\"modal\" data-popup=\"tooltip\" title=\"ارسل صوره\" data-container=\"body\"><i class=\"icon-file-picture\"></i></a></li>\n" +
                "                                <li>\n" +
                "                                    <label data-target=\".addFile\" data-toggle=\"modal\" data-popup=\"tooltip\" title=\"ارسل ملف\" data-container=\"body\" class=\"custom-file-upload\">\n" +
                "                                        <i class=\"icon-file-plus\"></i>\n" +
                "                                    </label>\n" +
                "                                </li>\n" +
                "\n" +
                "                            </ul>\n" +
                "                        </form>\n" +
                "                    </div>\n" +
                "                </div>\n" +
                "\n" +
                "\n" +
                "\n" +
                "            </div>\n" +
                "        </div>\n" +

                "    </div>\n" +
                "\n" +
                "\n" +
                "</div>");
            $("#chats").prepend(lastAdded);
        }
        else{
            $(".more-persons").append("<li onclick='replaceChats($(this).find(\".uname\").html(),$(this).index(),"+ userId +")' id="+userId+" class=\"more-chat-elements\"><a href=\"#\"><span class=\"badge badge-danger\">1</span><span class='uname'>" + name +"</span></a><span class=\"close-add-chat text-muted pointer\"><i class=\"icon-x\"></i></span></li>")
            $(".more-chats").removeClass("hidden");
        }
    }
    else{
        $(`#chat-active${userId}`).addClass("in");
    }
   // $(".close-chat").on("click",function (i,v) {
   //         $(this).parentsUntil(".chat-container-individual").parent().remove();
   //         activeIds.splice(activeIds.indexOf(userId),1);
   // });
    $(".close-add-chat").on("click",function (e) {
        $(this).parent().remove();
        activeIds.splice(activeIds.indexOf(userId),1);
        $(this).parentsUntil(".more-chats").find(".btn-group").addClass("open");
        if($(".close-add-chat").length === 0){
            $(".more-chats").addClass("hidden");
        }
        e.stopPropagation();0
    });

    const sendBtn = $(".send-btn");
    const file = $("input[type='file']");
    sendBtn.on("click", function () {
        const msg = $(this).prev(".message-content").val().trim();
        const time = new Date();
        const dateTime = {hour: time.getHours(), minute: time.getMinutes()};
        if(msg.length > 0) {
            $(this).parentsUntil(".panel").find(".chat-list").append(` <li class="media date-step">
                            <span>اليوم</span>
                        </li>
                        <li class=\"media\">
      <div class=\"media-left\"><a>
      <img src="" class=\"img-circle\" alt=\"\">
      </a>
      </div><div class=\"media-body\">
      <div class=\"media-content\">${msg}</div>
      <span class=\"media-annotation display-block text-right mt-10\">${dateTime.hour + ":" + dateTime.minute}  </span></div></li>`);
            $(this).prev(".message-content").val("");
        }
    });
    $(".chat-list").niceScroll();
});

function replaceChats(currentName, prevIndex,userId) {
    const positionIndex = getPosition(prevIndex, chatsCount);
    const node = $(".chat-container-individual").eq(positionIndex);
    const moreChatNode = $(".more-chat-elements").eq(prevIndex);
    const prevName =  node.find(".user-active-name").html();
    const prevId = node.attr("id");
    currentElement = ("<div id="+userId+" class=\"panel chat-panel chat-container-individual\">\n" +
        "    <div class=\"panel-heading\">\n" +
        "        <h5 class=\"text-bold panel-title border-bottom-blue\">\n" +
        "\n" +
        "            <span onclick='addMoreOrRemove(this)' class=\"text-muted pointer close-chat\"><i class=\"icon-x\"></i></span>" +
        "            <a class=\"collapsed btn current-container\" data-toggle=\"collapse\" data-parent=\"#accordion-styled\" href="+ '#chat-active'+userId +">\n" +
        "\n" +
        "                        <img class=\"user-active-img\" alt=\"avatar\">\n" +
        "                        <span class=\"ml-5 user-active-name\">"+currentName+"</span>\n" +
        "                        <span  class=\"status online user-active-status\">\n" +
        "                                       <i class=\"icon-circle2\"></i>\n" +
        "\n" +
        "                                    </span>\n" +
        "                        <span class=\"badge badge-danger\">1</span>\n" +
        "\n" +
        "                    </a>\n" +
        "\n" +
        "        </h5>\n" +
        "        <div id="+ 'chat-active'+userId +" class=\"panel-collapse collapse\">\n" +
        "            <div class=\"panel-body\">\n" +
        "\n" +
        "                <ul class=\"media-list chat-list content-group\">\n" +
        "                    <!---------------loader ------------------------------------>\n" +
        "                    <div class=\"pace-demo loader-content\">\n" +
        "                        <div class=\"theme_tail theme_tail_with_text\"><div class=\"pace_progress\" data-progress=\"60\" style=\"width: 60%;\"></div><div class=\"pace_activity\"></div></div>\n" +
        "                    </div>\n" +
        "                    <li class=\"media date-step\">\n" +
        "                        <span>10 فبراير</span>\n" +
        "                    </li>\n" +
        "\n" +
        "                    <li class=\"media\">\n" +
        "                        <div class=\"media-left\">\n" +
        "                            <a>\n" +
        "                                <img src=\"../shared/images/avatar.png\" class=\"img-circle\" alt=\"\">\n" +
        "                            </a>\n" +
        "                        </div>\n" +
        "\n" +
        "                        <div class=\"media-body\">\n" +
        "                            <div class=\"media-content\">\n" +
        "                                Below mounted advantageous spread yikes bat stubbornly crud a and a excepting<br>\n" +
        "                                <a href=\"#\">File.txt</a>\n" +
        "                            </div>\n" +
        "                            <span class=\"media-annotation text-right display-block mt-10\">9:54 am </span>\n" +
        "                        </div>\n" +
        "                    </li>\n" +
        "\n" +
        "                    <li class=\"media reversed\">\n" +
        "                        <div class=\"media-body\">\n" +
        "                            <div class=\"media-content\">Far squid and that hello fidgeted and when. As this oh darn but slapped casually husky sheared that cardinal hugely one and some unnecessary factiously hedgehog a feeling one rudely much but one owing sympathetic regardless more astonishing evasive tasteful much.</div>\n" +
        "                            <span class=\"media-annotation display-block mt-10\"> 10:24 am </span>\n" +
        "                        </div>\n" +
        "\n" +
        "                        <div class=\"media-right\">\n" +
        "                            <a href=\"#\">\n" +
        "                                <img src=\"../shared/images/avatar.png\" class=\"img-circle\" alt=\"\">\n" +
        "                            </a>\n" +
        "                        </div>\n" +
        "                    </li>\n" +
        "                    <li class=\"media reversed\">\n" +
        "                        <div class=\"media-body\">\n" +
        "                            <div class=\"media-content\">\n" +
        "                                <a href=\"../shared/images/bg1.jpg\" data-fancybox=\"gallery\">\n" +
        "                                    <img alt=\"ray-image\" src=\"../shared/images/bg1.jpg\" class=\"x-ray-img\">\n" +
        "                                </a>\n" +
        "                                <a href=\"../shared/images/bg2.jpg\" data-fancybox=\"gallery\">\n" +
        "                                    <img alt=\"ray-image\" src=\"../shared/images/bg2.jpg\" class=\"x-ray-img\">\n" +
        "                                </a>\n" +
        "                                <a href=\"../shared/images/bg3.jpg\" data-fancybox=\"gallery\">\n" +
        "                                    <img alt=\"ray-image\" src=\"../shared/images/bg3.jpg\" class=\"x-ray-img\">\n" +
        "                                </a> <a href=\"../shared/images/bg1.jpg\" data-fancybox=\"gallery\">\n" +
        "                                <img alt=\"ray-image\" src=\"../shared/images/bg1.jpg\" class=\"x-ray-img\">\n" +
        "                            </a>\n" +
        "                                <a href=\"../shared/images/bg2.jpg\" data-fancybox=\"gallery\">\n" +
        "                                    <img alt=\"ray-image\" src=\"../shared/images/bg2.jpg\" class=\"x-ray-img\">\n" +
        "                                </a>\n" +
        "                                <a href=\"../shared/images/bg3.jpg\" data-fancybox=\"gallery\">\n" +
        "                                    <img alt=\"ray-image\" src=\"../shared/images/bg3.jpg\" class=\"x-ray-img\">\n" +
        "                                </a>\n" +
        "                            </div>\n" +
        "                            <span class=\"media-annotation display-block mt-10\"> 10:24 am </span>\n" +
        "                        </div>\n" +
        "\n" +
        "                        <div class=\"media-right\">\n" +
        "                            <a href=\"#\">\n" +
        "                                <img src=\"../shared/images/avatar.png\" class=\"img-circle\" alt=\"\">\n" +
        "                            </a>\n" +
        "                        </div>\n" +
        "                    </li>\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "                </ul>\n" +
        "\n" +
        "                <div class=\"row\">\n" +
        "                    <div class=\"col-sm-12\">\n" +
        "                        <form>\n" +
        "                            <textarea name=\"enter-message\" class=\"form-control message-content content-group\" rows=\"2\" cols=\"1\" placeholder=\"اكتب رساله...\"></textarea>\n" +
        "                            <button type=\"button\" class=\"btn btn-rounded send-btn\"><img src=\"../shared/images/send.png\"></button>\n" +
        "                            <ul class=\"icons-list icons-list-extended mt-10 text-left\">\n" +
        "                                <li><a data-target=\".addPhotos\" data-toggle=\"modal\" data-popup=\"tooltip\" title=\"ارسل صوره\" data-container=\"body\"><i class=\"icon-file-picture\"></i></a></li>\n" +
        "                                <li>\n" +
        "                                    <label data-target=\".addFile\" data-toggle=\"modal\" data-popup=\"tooltip\" title=\"ارسل ملف\" data-container=\"body\" class=\"custom-file-upload\">\n" +
        "                                        <i class=\"icon-file-plus\"></i>\n" +
        "                                    </label>\n" +
        "                                </li>\n" +
        "\n" +
        "                            </ul>\n" +
        "                        </form>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "\n" +
        "\n" +
        "\n" +
        "            </div>\n" +
        "        </div>\n" +

        "    </div>\n" +
        "\n" +
        "\n" +
        "</div>");
    const prevElement = "<li onclick='replaceChats($(this).find(\".uname\").html(),"+ prevIndex +","+ prevId +")' id="+prevId+" class=\"more-chat-elements\"><a href=\"#\"><span class=\"badge badge-danger\">1</span><span class='uname'>" + prevName +"</span></a><span class=\"close-add-chat text-muted pointer\"><i class=\"icon-x\"></i></span></li>";
    node.replaceWith(currentElement);
    moreChatNode.replaceWith(prevElement);

    $(".close-add-chat").on("click",function (e) {
        $(this).parent().remove();
        activeIds.splice(activeIds.indexOf($(this).parent(".chat-container-individual").attr("id")),1);
        $(this).parentsUntil(".more-chats").find(".btn-group").addClass("open");
        if($(".close-add-chat").length === 0){
            $(".more-chats").addClass("hidden");
        }
        e.stopPropagation();
    });
    const sendBtn = $(".send-btn");
    const file = $("input[type='file']");
    sendBtn.on("click", function () {
        const msg = $(this).prev(".message-content").val().trim();
        const time = new Date();
        const dateTime = {hour: time.getHours(), minute: time.getMinutes()};
        if(msg.length > 0) {
            $(this).parentsUntil(".panel").find(".chat-list").append(` <li class="media date-step">
                            <span>اليوم</span>
                        </li>
                        <li class=\"media\">
      <div class=\"media-left\"><a>
      <img src="" class=\"img-circle\" alt=\"\">
      </a>
      </div><div class=\"media-body\">
      <div class=\"media-content\">${msg}</div>
      <span class=\"media-annotation display-block text-right mt-10\">${dateTime.hour + ":" + dateTime.minute}  </span></div></li>`);
            $(this).prev(".message-content").val("");
        }
    });

}
function getPosition(num, max){
    if(max === 3){
        if(num === 0 || num%max === 0){
            return 0;
        }
        else if(num === 1 || (num-1)%max === 0){
            return 1;
        }
        else if(num === 2 || (num-2)%max === 0){
            return 2;
        }
    }else if(max === 2){
        if(num === 0 || num%max === 0){
            return 0;
        }
        else {
            return 1;
        }
    }
    return 0;
}
function addMoreOrRemove(this_) {
    const firstPerson = $(".more-persons li").eq(0);
    const currentName = firstPerson.find(".uname").html();
    const userId = firstPerson.attr("id");
    const activeId = $(this_).parentsUntil(".chat-container-individual").parent().attr("id");
    activeIds.splice(activeIds.indexOf(activeId),1);
    if(firstPerson.length > 0){
        currentElement = ("<div id="+userId+" class=\"panel chat-panel chat-container-individual\">\n" +
            "    <div class=\"panel-heading\">\n" +
            "        <h5 class=\"text-bold panel-title border-bottom-blue\">\n" +
            "\n" +
            "            <span onclick='addMoreOrRemove(this)' class=\"text-muted pointer close-chat\"><i class=\"icon-x\"></i></span>" +
            "            <a class=\"collapsed btn current-container\" data-toggle=\"collapse\" data-parent=\"#accordion-styled\" href="+ '#chat-active'+userId +">\n" +
            "\n" +
            "                        <img class=\"user-active-img\" alt=\"avatar\">\n" +
            "                        <span class=\"ml-5 user-active-name\">"+currentName+"</span>\n" +
            "                        <span  class=\"status online user-active-status\">\n" +
            "                                       <i class=\"icon-circle2\"></i>\n" +
            "\n" +
            "                                    </span>\n" +
            "                        <span class=\"badge badge-danger\">1</span>\n" +
            "\n" +
            "                    </a>\n" +
            "\n" +
            "        </h5>\n" +
            "        <div id="+ 'chat-active'+userId +" class=\"panel-collapse collapse\">\n" +
            "            <div class=\"panel-body\">\n" +
            "\n" +
            "                <ul class=\"media-list chat-list content-group\">\n" +
            "                    <!---------------loader ------------------------------------>\n" +
            "                    <div class=\"pace-demo loader-content\">\n" +
            "                        <div class=\"theme_tail theme_tail_with_text\"><div class=\"pace_progress\" data-progress=\"60\" style=\"width: 60%;\"></div><div class=\"pace_activity\"></div></div>\n" +
            "                    </div>\n" +
            "                    <li class=\"media date-step\">\n" +
            "                        <span>10 فبراير</span>\n" +
            "                    </li>\n" +
            "\n" +
            "                    <li class=\"media\">\n" +
            "                        <div class=\"media-left\">\n" +
            "                            <a>\n" +
            "                                <img src=\"../shared/images/avatar.png\" class=\"img-circle\" alt=\"\">\n" +
            "                            </a>\n" +
            "                        </div>\n" +
            "\n" +
            "                        <div class=\"media-body\">\n" +
            "                            <div class=\"media-content\">\n" +
            "                                Below mounted advantageous spread yikes bat stubbornly crud a and a excepting<br>\n" +
            "                                <a href=\"#\">File.txt</a>\n" +
            "                            </div>\n" +
            "                            <span class=\"media-annotation text-right display-block mt-10\">9:54 am </span>\n" +
            "                        </div>\n" +
            "                    </li>\n" +
            "\n" +
            "                    <li class=\"media reversed\">\n" +
            "                        <div class=\"media-body\">\n" +
            "                            <div class=\"media-content\">Far squid and that hello fidgeted and when. As this oh darn but slapped casually husky sheared that cardinal hugely one and some unnecessary factiously hedgehog a feeling one rudely much but one owing sympathetic regardless more astonishing evasive tasteful much.</div>\n" +
            "                            <span class=\"media-annotation display-block mt-10\"> 10:24 am </span>\n" +
            "                        </div>\n" +
            "\n" +
            "                        <div class=\"media-right\">\n" +
            "                            <a href=\"#\">\n" +
            "                                <img src=\"../shared/images/avatar.png\" class=\"img-circle\" alt=\"\">\n" +
            "                            </a>\n" +
            "                        </div>\n" +
            "                    </li>\n" +
            "                    <li class=\"media reversed\">\n" +
            "                        <div class=\"media-body\">\n" +
            "                            <div class=\"media-content\">\n" +
            "                                <a href=\"../shared/images/bg1.jpg\" data-fancybox=\"gallery\">\n" +
            "                                    <img alt=\"ray-image\" src=\"../shared/images/bg1.jpg\" class=\"x-ray-img\">\n" +
            "                                </a>\n" +
            "                                <a href=\"../shared/images/bg2.jpg\" data-fancybox=\"gallery\">\n" +
            "                                    <img alt=\"ray-image\" src=\"../shared/images/bg2.jpg\" class=\"x-ray-img\">\n" +
            "                                </a>\n" +
            "                                <a href=\"../shared/images/bg3.jpg\" data-fancybox=\"gallery\">\n" +
            "                                    <img alt=\"ray-image\" src=\"../shared/images/bg3.jpg\" class=\"x-ray-img\">\n" +
            "                                </a> <a href=\"../shared/images/bg1.jpg\" data-fancybox=\"gallery\">\n" +
            "                                <img alt=\"ray-image\" src=\"../shared/images/bg1.jpg\" class=\"x-ray-img\">\n" +
            "                            </a>\n" +
            "                                <a href=\"../shared/images/bg2.jpg\" data-fancybox=\"gallery\">\n" +
            "                                    <img alt=\"ray-image\" src=\"../shared/images/bg2.jpg\" class=\"x-ray-img\">\n" +
            "                                </a>\n" +
            "                                <a href=\"../shared/images/bg3.jpg\" data-fancybox=\"gallery\">\n" +
            "                                    <img alt=\"ray-image\" src=\"../shared/images/bg3.jpg\" class=\"x-ray-img\">\n" +
            "                                </a>\n" +
            "                            </div>\n" +
            "                            <span class=\"media-annotation display-block mt-10\"> 10:24 am </span>\n" +
            "                        </div>\n" +
            "\n" +
            "                        <div class=\"media-right\">\n" +
            "                            <a href=\"#\">\n" +
            "                                <img src=\"../shared/images/avatar.png\" class=\"img-circle\" alt=\"\">\n" +
            "                            </a>\n" +
            "                        </div>\n" +
            "                    </li>\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "                </ul>\n" +
            "\n" +
            "                <div class=\"row\">\n" +
            "                    <div class=\"col-sm-12\">\n" +
            "                        <form>\n" +
            "                            <textarea name=\"enter-message\" class=\"form-control message-content content-group\" rows=\"2\" cols=\"1\" placeholder=\"اكتب رساله...\"></textarea>\n" +
            "                            <button type=\"button\" class=\"btn btn-rounded send-btn\"><img src=\"../shared/images/send.png\"></button>\n" +
            "                            <ul class=\"icons-list icons-list-extended mt-10 text-left\">\n" +
            "                                <li><a data-target=\".addPhotos\" data-toggle=\"modal\" data-popup=\"tooltip\" title=\"ارسل صوره\" data-container=\"body\"><i class=\"icon-file-picture\"></i></a></li>\n" +
            "                                <li>\n" +
            "                                    <label data-target=\".addFile\" data-toggle=\"modal\" data-popup=\"tooltip\" title=\"ارسل ملف\" data-container=\"body\" class=\"custom-file-upload\">\n" +
            "                                        <i class=\"icon-file-plus\"></i>\n" +
            "                                    </label>\n" +
            "                                </li>\n" +
            "\n" +
            "                            </ul>\n" +
            "                        </form>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "\n" +
            "\n" +
            "\n" +
            "            </div>\n" +
            "        </div>\n" +

            "    </div>\n" +
            "\n" +
            "\n" +
            "</div>");
        $(this_).parentsUntil(".chat-container-individual").parent().remove();
        $("#chats").prepend(currentElement);
        $(".close-add-chat").on("click",function (e) {
            $(this).parent().remove();
            activeIds.splice(activeIds.indexOf($(this).parent(".chat-container-individual").attr("id")),1);
            $(this).parentsUntil(".more-chats").find(".btn-group").addClass("open");
            if($(".close-add-chat").length === 0){
                $(".more-chats").addClass("hidden");
            }
            e.stopPropagation();
        });
        $(".more-persons li").eq(0).remove();
        if($(".close-add-chat").length === 0){
            $(".more-chats").addClass("hidden");
        }
        const sendBtn = $(".send-btn");
        const file = $("input[type='file']");
        sendBtn.on("click", function () {
            const msg = $(this).prev(".message-content").val().trim();
            const time = new Date();
            const dateTime = {hour: time.getHours(), minute: time.getMinutes()};
            if(msg.length > 0) {
                $(this).parentsUntil(".panel").find(".chat-list").append(` <li class="media date-step">
                            <span>اليوم</span>
                        </li>
                        <li class=\"media\">
      <div class=\"media-left\"><a>
      <img src="" class=\"img-circle\" alt=\"\">
      </a>
      </div><div class=\"media-body\">
      <div class=\"media-content\">${msg}</div>
      <span class=\"media-annotation display-block text-right mt-10\">${dateTime.hour + ":" + dateTime.minute}  </span></div></li>`);
                $(this).prev(".message-content").val("");
            }
        });
    }
    else{
        $(this_).parentsUntil(".chat-container-individual").parent().remove();
        activeIds.splice(activeIds.indexOf(activeId),1);

    }


}


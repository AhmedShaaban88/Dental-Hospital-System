const eye1 = $(".eye:first i");
const eye2 = $(".eye:eq(1) i");
const eye3 = $(".eye:last i");
const oldPassword = $(".password:first");
const password = $(".password:eq(1)");
const confPassword = $(".password:last");
$(document).ready(function () {
    eye1.click(function () {
        if( $(this).hasClass('icon-eye-blocked')) {
            $(this).removeClass('icon-eye-blocked').addClass('icon-eye');
            oldPassword.attr('type', 'text');
        }else{
            $(this).removeClass('icon-eye').addClass('icon-eye-blocked');
            oldPassword.attr('type', 'password');
        }
    });
    eye2.click(function () {
        if(eye2.hasClass('icon-eye-blocked')) {
            $(this).removeClass('icon-eye-blocked').addClass('icon-eye');
          password.attr('type', 'text');
        }else{
            $(this).removeClass('icon-eye').addClass('icon-eye-blocked');
            password.attr('type', 'password');
        }
    });
    eye3.click(function () {
        if(eye3.hasClass('icon-eye-blocked')) {
            $(this).removeClass('icon-eye-blocked').addClass('icon-eye');
          confPassword.attr('type', 'text');
        }else{
            $(this).removeClass('icon-eye').addClass('icon-eye-blocked');
            confPassword.attr('type', 'password');
        }
    });

});


const langs = $(".lang");
const currentLang= $("#lang-info b");
langs.click(function () {
   currentLang.text($(this).text());
});


// chart

const yValues = [30, 200, 100, 400, 150, 250];
const xValues = ['01-01-2019', '02-01-2019', '03-01-2019', '04-01-2019', '05-01-2019', '06-01-2019'];

$(function () {


    // Categorized axis
    // ------------------------------

    // Generate chart
    var axis_categorized = c3.generate({
        bindto: '#week-chart',
        point: {
            r: 4
        },
        size: { height: 400 },
        data: {
            columns: [
                ['الاسبوع', ...yValues]
            ],
            type: 'spline'
        },
        color: {
            pattern: ['#821a3c']
        },
        axis: {
            x: {
                label: 'الايام',
                type: 'category',
                categories: [...xValues]
            },
            y:{
                label: 'عدد الزيارات'
            }
        },
        grid: {
            x: {
                show: true
            }
        }
    });




    // Resize chart on sidebar width change
    $(".sidebar-control").on('click', function() {
        axis_categorized.resize();
    });
});


// image upload

const editModal = $("#editImg");
const deleteModal = $("#deleteImg");
const editBtn = $("#editImgBtn");
const deleteBtn = $("#deleteImgBtn");
editBtn.click(function () {
   editModal.show();
   deleteModal.hide();
});
deleteBtn.click(function () {
   editModal.hide();
   deleteModal.show();
});
//
//
//
// var modalTemplate = '<div class="modal-dialog modal-lg" role="document">\n' +
//     '  <div class="modal-content">\n' +
//     '    <div class="modal-header">\n' +
//     '      <div class="kv-zoom-actions btn-group">{toggleheader}{fullscreen}{borderless}{close}</div>\n' +
//     '      <h6 class="modal-title">{heading} <small><span class="kv-zoom-title"></span></small></h6>\n' +
//     '    </div>\n' +
//     '    <div class="modal-body">\n' +
//     '      <div class="floating-buttons btn-group"></div>\n' +
//     '      <div class="kv-zoom-body file-zoom-content"></div>\n' + '{prev} {next}\n' +
//     '    </div>\n' +
//     '  </div>\n' +
//     '</div>\n';
//
// // Buttons inside zoom modal
// var previewZoomButtonClasses = {
//     toggleheader: 'btn btn-default btn-icon btn-xs btn-header-toggle',
//     fullscreen: 'btn btn-default btn-icon btn-xs',
//     borderless: 'btn btn-default btn-icon btn-xs',
//     close: 'btn btn-default btn-icon btn-xs'
// };
//
// // Icons inside zoom modal classes
// var previewZoomButtonIcons = {
//     prev: '<i class="icon-arrow-left32"></i>',
//     next: '<i class="icon-arrow-right32"></i>',
//     toggleheader: '<i class="icon-menu-open"></i>',
//     fullscreen: '<i class="icon-screen-full"></i>',
//     borderless: '<i class="icon-alignment-unalign"></i>',
//     close: '<i class="icon-cross3"></i>'
// };
//
// // File actions
// var fileActionSettings = {
//     zoomClass: 'btn btn-link btn-xs btn-icon',
//     zoomIcon: '<i class="icon-zoomin3"></i>',
//     dragClass: 'btn btn-link btn-xs btn-icon',
//     dragIcon: '<i class="icon-three-bars"></i>',
//     removeClass: 'btn btn-link btn-icon btn-xs',
//     removeIcon: '<i class="icon-trash"></i>',
//     indicatorNew: '<i class="icon-file-plus text-slate"></i>',
//     indicatorSuccess: '<i class="icon-checkmark3 file-icon-large text-success"></i>',
//     indicatorError: '<i class="icon-cross2 text-danger"></i>',
//     indicatorLoading: '<i class="icon-spinner2 spinner text-muted"></i>'
// };
//
// $('.file-input').fileinput({
//     browseLabel: 'تصفح',
//     browseIcon: '<span>جديد</span>',
//     uploadIcon: '<span>حفظ</span>',
//     removeIcon: '<span>حذف</span>',
//     layoutTemplates: {
//         icon: '<i class="icon-file-check"></i>',
//         modal: modalTemplate
//     },
//     allowedFileExtensions: ["jpg", "png", "jpeg"],
//     previewZoomButtonClasses: previewZoomButtonClasses,
//     previewZoomButtonIcons: previewZoomButtonIcons,
//     fileActionSettings: fileActionSettings
// });

// Start upload preview image
var $uploadCrop,
    tempFilename,
    rawImg,
    imageId;
function readFile(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('.upload-demo').addClass('ready');
            $('#cropImagePop').modal('show');
            rawImg = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

$uploadCrop = $('#upload-demo').croppie({
    viewport: {
        width: 200,
        height: 200,
    },
    enforceBoundary: false,
    enableExif: true
});
$('#cropImagePop').on('shown.bs.modal', function(){
    $uploadCrop.croppie('bind', {
        url: rawImg
    });
});

$('.item-img').on('change', function () {
    imageId = $(this).data('id');
    tempFilename = $(this).val();
    $('#cancelCropBtn').data('id', imageId); readFile(this); });
$('#cropImageBtn').on('click', function (ev) {
    $uploadCrop.croppie('result', {
        type: 'base64',
        format: 'jpeg',
        size: {width: 200, height: 200}
    }).then(function (resp) {
        $("#preview").removeClass("hidden");
        $('#item-img-output').attr('src', resp);
        //$('#cropImagePop').modal('hide');
    });
});

//send image to server
$("#saveAvatar").on("click", function () {

});
// End upload preview image

const detailsModal = $("#details-modal");
const closeModal = $("#close-details");

$(document).ready(function () {
   $(this).click(function (e) {
       if(!$(e.target).parents().is('.modal') && !$(e.target).is('.c3-event-rect') && !detailsModal.hasClass('hidden')){
           detailsModal.addClass('hidden');
       }
   });
    $(".c3-event-rect").on('click',function () {
        detailsModal.removeClass("hidden");
    });
    closeModal.on("click", function () {
        detailsModal.addClass('hidden');
    });

});
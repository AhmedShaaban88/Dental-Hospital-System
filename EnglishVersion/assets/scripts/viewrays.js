$(document).on("onInit.fb", function (e, instance) {
    if ($(".fancybox-toolbar").find("#rotate_button").length === 0) {
        $(".fancybox-toolbar").prepend('<button id="rotate_button" title="Rotate" class="fancybox-button"><i class="icon-rotate-ccw3"></i></button>')
    }
    if ($(".fancybox-toolbar").find("#delete_button").length === 0) {
        $(".fancybox-toolbar").prepend('<button id="delete_button" title="Delete" class="fancybox-button" data-target="#deleteXRays" data-toggle="modal"><i class="icon-trash-alt"></i></button>')
    }
    if ($(".fancybox-toolbar").find("#notes").length === 0) {
        $(".fancybox-toolbar").prepend('<button id="notes" title="notes" class="fancybox-button" data-target=".editImage" data-toggle="modal"><i class="icon-notebook"></i></button>')
    }
    var click = 1;
    $(".fancybox-toolbar").on("click", "#rotate_button", function () {
        var n = 90 * click++;
        $(".fancybox-image").css("webkitTransform", 'rotate(' + n + 'deg)');
        $(".fancybox-image").css("mozTransform", "rotate(" + n + 'deg)');
    });
    $(".fancybox-toolbar").on("click", "#notes", function () {

        var canvas = new fabric.Canvas('canvas');

        var scaleFactor = 0.3;
        var myImg = $(".fancybox-slide--current .fancybox-image").attr("src");
        var textAdded = 0;
        canvas.renderAll();
        fabric.Image.fromURL(myImg, function (myImg) {
            //var img1 = myImg.scale(scaleFactor).set({left: 0, top: 0});
            myImg.set({
                width: canvas.getWidth(),
                height: canvas.getHeight()
            });
            canvas.add(myImg).renderAll();
            if (!textAdded) {
                oText = new fabric.IText('اكتب النص هنا', {
                    left: 100,
                    top: 100,
                });
                canvas.add(oText);
                canvas.setActiveObject(oText);
                //$('#fill, #font, #fillBack').trigger('change');
                textAdded = true;
            }
            canvas.renderAll();
            $('#fill').change(function () {
                var obj = canvas.getActiveObject();
                if (obj) {
                    obj.setFill($(this).val());

                }
                canvas.renderAll();
            });
            $('#scale').change(function () {
                myImg.scale($(this).val()/1000);
                canvas.renderAll();
            });
            $('#fillBack').change(function () {
                var obj = canvas.getActiveObject();
                if (obj) {
                    obj.setBackgroundColor($(this).val())
                }
                canvas.renderAll();
            });

            $('#font').change(function () {
                var obj = canvas.getActiveObject();
                if (obj) {
                    obj.setFontFamily($(this).val());
                }
                canvas.remove(myImg);
                canvas.remove(canvas.getActiveObject())
                canvas.clear();
                canvas.renderAll();

            });

            document.querySelector('#cropImageBtn').onclick = function (e) {
                e.preventDefault();
                $("#preview-container").removeClass("hidden");
                canvas.deactivateAll().renderAll();
                document.querySelector('#item-img-output').src = canvas.toDataURL();
            };

        });
        canvas.on({
            'touch:gesture': function() {
                canvas.setActiveObject(oText);
            },
            'touch:drag': function() {
                canvas.setActiveObject(oText);
            },
            'touch:orientation': function() {
                canvas.setActiveObject(oText);
            },
            'touch:shake': function() {
                canvas.setActiveObject(oText);
            },
            'touch:longpress': function() {
                canvas.setActiveObject(oText);
            },

        });

    });
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

    const from = $("#fromdate");
    const to = $("#todate");
    $.fn.datepicker.dates['ar'] = {
        days: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعه', 'السبت'],
        daysShort: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعه', 'السبت'],
        daysMin: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعه', 'السبت'],
        months: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو', 'اغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر'],
        monthsShort: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو', 'اغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر'],
        today: "اليوم",
    };
    from.datepicker('destroy');
    from.datepicker({
        language: 'ar',
        autoclose: true,
        format: "yyyy/mm/dd",

    });
    to.datepicker('destroy');
    to.datepicker({
        language: 'ar',
        autoclose: true,
        format: "yyyy/mm/dd",

    });

    var form = $("form:first");
    const loaderContent = $("#loader-content");
    const beforeSearch = $("#before-search");
    const raysSelect = $("select:eq(0)");
    const raysHelper = $(".help:first");
    form.on("submit", function (e) {
        if (raysSelect.val() === '') {
            raysHelper.removeClass('hidden');
            e.preventDefault();
        } else {
            raysHelper.addClass('hidden');
            loaderContent.removeClass('hidden');
            beforeSearch.hide();
        }
    });

    raysSelect.on("change", function () {
        if (!raysHelper.hasClass('hidden')) {
            raysHelper.addClass('hidden');
        }
    });

//gotoup
    $("#goTop").click(function () {
        $("html, body").animate({
            scrollTop: $(this.hash).offset().top
        }, 800)
    });


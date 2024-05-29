const roleName = $("#role-name");
const roleNameHelp = $("#roleHelp");
const saveBtn = $("#save-btn");
$(document).ready(function () {
    // for every dropdown item
$(".drop-items").on("change", function () {
        const dropDown = $(this).parentsUntil(".dropdown-container").find(".btn-group");
        const childern = dropDown.find(".drop-items").find("span:first-child");
        const checkall = $(this).parentsUntil(".col-sm-2").find(".checkall");
        const checkAllClass = checkall.find("span:first-child:not(.caret)");
        const checkedCount = dropDown.find(".drop-items").length;
        dropDown.addClass("open");
        const parentTab = $(this).parentsUntil(".tab-container").find(".active");
        const parentPanel = $(this).parentsUntil(".panel-container");
        const parentRow = $(this).parentsUntil(".panel-body").find(".check-row");
        const childern2 = $(this).parentsUntil(".panel-body").find(".col-sm-2").find(".check-labels").find("span:first-child:not(.caret)");
        const childernAllCount = $(this).parentsUntil(".col-sm-2").parent(".col-sm-2").siblings(".col-sm-2").find(".check-labels").find("input");
        var childernEnableCount = childernAllCount.length + 1;

        for(var i=0; i< childernAllCount.length + 1; i++){
            if($(childernAllCount[i]).prop("disabled") === true){
                childernEnableCount--;
            }
        }
        childernArr = [];
        childernArr2 = [];

        childern.each(function (i,v) {
            if($(v).hasClass("checked")) {
                childernArr.push(i);
                if (childernArr.length > 0 && childernArr.length < checkedCount) {
                    checkall.find("input").prop("checked",true);
                    checkAllClass.addClass("checked indeterminate");
                    parentTab.find(".check-tab").find("input").prop("checked",true);
                    parentTab.find(".check-tab").find("span:first-child").addClass("checked indeterminate");
                    parentPanel.find(".check-panel").find("input").prop("checked",true);
                    parentPanel.find(".check-panel").find("span:first-child").addClass("checked indeterminate");
                    parentRow.find("input").prop("checked",true);
                    parentRow.find("span:first-child").addClass("checked indeterminate");
                } else if (childernArr.length === checkedCount) {
                    checkall.find("input").prop("checked",true);
                    checkAllClass.removeClass("indeterminate").addClass("checked");
                    childern2.each(function (i,v) {
                        if($(v).hasClass("checked") && !$(v).hasClass("indeterminate")) {
                            childernArr2.push(i);
                           if (childernArr2.length === childernEnableCount) {
                                parentRow.find("input").prop("checked",true);
                                parentRow.find("span:first-child").removeClass("indeterminate").addClass("checked");
                               parentTab.find(".check-tab").find("input").prop("checked",true);
                               parentTab.find(".check-tab").find("span:first-child").removeClass("indeterminate").addClass("checked");
                               parentPanel.find(".check-panel").find("input").prop("checked",true);
                               parentPanel.find(".check-panel").find("span:first-child").removeClass("indeterminate").addClass("checked");
                            }
                        }
                    });
                }
            }
            else {
                if(childernArr.length === 0){
                    checkAllClass.removeClass("checked indeterminate");
                    checkall.find("input").prop("checked",false);
                    childern2.each(function (i,v) {
                        if($(v).hasClass("checked") && !$(v).hasClass("indeterminate")) {
                            childernArr2.push(i);
                            if (childernArr2.length > 0) {
                                parentRow.find("input").prop("checked",true);
                                parentRow.find("span:first-child").addClass("checked indeterminate");
                                parentTab.find(".check-tab").find("input").prop("checked",true);
                                parentTab.find(".check-tab").find("span:first-child").addClass("checked indeterminate");
                                parentPanel.find(".check-panel").find("input").prop("checked",true);
                                parentPanel.find(".check-panel").find("span:first-child").addClass("checked indeterminate");
                            }
                        }else{
                            parentRow.find("input").prop("checked",false);
                            parentRow.find("span:first-child").removeClass("checked indeterminate");
                            parentTab.find(".check-tab").find("input").prop("checked",false);
                            parentTab.find(".check-tab").find("span:first-child").removeClass("checked indeterminate");
                            parentPanel.find(".check-panel").find("input").prop("checked",false);
                            parentPanel.find(".check-panel").find("span:first-child").removeClass("checked indeterminate");
                        }
                    });
                }

            }

        });



    });

    // for allselect dropdown
$(".checkall").on("click", function () {
        const dropItems = $(this).parentsUntil(".dropdown-container").find(".btn-group").find(".drop-items");
        const checkAllClass = $(this).parentsUntil(".dropdown-container").find("span:first-child:not(.caret)");
        const checkAllInput = $(this).find("input");
            if(checkAllClass.hasClass("indeterminate")){
                checkAllInput.prop("checked",false);
                checkAllClass.removeClass("indeterminate checked");
                dropItems.each(function (i,v) {
                    $(v).find("span:first-child").removeClass("checked");
                    $(v).find("input").prop("checked", false);
                });

            }
            else if(checkAllClass.hasClass("checked")){
                checkAllClass.removeClass("checked");
                checkAllInput.prop('checked', false);
                dropItems.each(function (i,v) {
                    $(v).find("span:first-child").removeClass("checked");
                    $(v).find("input").prop("checked", false);
                });
            }
            else{
                checkAllClass.addClass("checked");
                checkAllInput.prop('checked',true);
                dropItems.each(function (i,v) {
                    $(v).find("span:first-child").addClass("checked");
                    $(v).find("input").prop("checked", true);
                });
            }
        const parentTab = $(this).parentsUntil(".tab-container").find(".active");
        const parentTabSlice = parentTab.find("a").attr("href").slice(1);

        const parentTabName = $(`#${parentTabSlice}`);
        const parentTabRows = parentTabName.find(".check-panel").find("span:first-child");
        const parentTabRowsCount = parentTabName.find(".check-panel").length;
        var currentPanelsChecked = 0;

        const parentPanel = $(this).parentsUntil(".panel-container");
        const parentPanelRows = parentPanel.find(".check-row").find("span:first-child");
        const parentPanelRowsCount = parentPanel.find(".check-row").length;
        var currentRowsChecked = 0;

        const parentRow = $(this).parentsUntil(".panel-body").find(".check-row");
        const childern = $(this).parentsUntil(".panel-body").find(".col-sm-2").find(".check-labels").find("span:first-child:not(.caret)");
        const childernAllCount = $(this).parentsUntil(".col-sm-2").parent(".col-sm-2").siblings(".col-sm-2").find(".check-labels").find("input");
        var childernEnableCount = childernAllCount.length + 1;

        for(var i=0; i< childernAllCount.length + 1; i++){
            if($(childernAllCount[i]).prop("disabled") === true){
                childernEnableCount--;
            }
        }
        childernArr = [];
        childern.each(function (i,v) {

            if($(v).hasClass("checked") && !$(v).hasClass("indeterminate")) {
                childernArr.push(i);
                if (childernArr.length > 0 && childernArr.length < childernEnableCount) {
                    parentRow.find("input").prop("checked",true);
                    parentRow.find("span:first-child").addClass("checked indeterminate");
                } else if (childernArr.length === childernEnableCount) {
                    parentRow.find("input").prop("checked",true);
                    parentRow.find("span:first-child").removeClass("indeterminate").addClass("checked");
                }
            }
            else {
                if(childernArr.length === 0){
                    parentRow.find("span:first-child").removeClass("checked indeterminate");
                    parentRow.find("input").prop("checked",false);
                }

            }

        });
        for(let i=0;i<parentPanelRowsCount;i++){
            if($(parentPanelRows[i]).hasClass("indeterminate")){
                parentPanel.find(".check-panel").find("input").prop("checked",true);
                parentPanel.find(".check-panel").find("span:first-child").addClass("checked indeterminate");
                
            }else if($(parentPanelRows[i]).hasClass("checked") && !$(parentPanelRows[i]).hasClass("indeterminate")){
                currentRowsChecked++;
                if(currentRowsChecked === parentPanelRowsCount){
                    parentPanel.find(".check-panel").find("input").prop("checked",true);
                    parentPanel.find(".check-panel").find("span:first-child").addClass("checked").removeClass("indeterminate");
                    
                }
            }
            else{
                if(currentRowsChecked === 0){
                    parentPanel.find(".check-panel").find("input").prop("checked",false);
                    parentPanel.find(".check-panel").find("span:first-child").removeClass("checked indeterminate");
                }

            }
        }

        for(let i=0;i<parentTabRowsCount;i++){
            if($(parentTabRows[i]).hasClass("indeterminate")){
                parentTab.find(".check-tab").find("input").prop("checked",true);
                parentTab.find(".check-tab").find("span:first-child").addClass("checked indeterminate");
                
            }else if($(parentTabRows[i]).hasClass("checked") && !$(parentTabRows[i]).hasClass("indeterminate")){
                currentPanelsChecked++;
                if(currentPanelsChecked === parentTabRowsCount){
                    parentTab.find(".check-tab").find("input").prop("checked",true);
                    parentTab.find(".check-tab").find("span:first-child").addClass("checked").removeClass("indeterminate");
                    
                }
            }
            else{
                if(currentPanelsChecked === 0){
                    parentTab.find(".check-tab").find("input").prop("checked",false);
                    parentTab.find(".check-tab").find("span:first-child").removeClass("checked indeterminate");
                }

            }
        }
    });
    //for every tab
$(".check-tab").on("click",function (e) {
        const spanChecked = $(this).find("span:first-child");
        const inputChecked = $(this).find("input");
        spanChecked.removeClass("indeterminate");
            if(!inputChecked.prop("checked")){
                spanChecked.addClass("checked");
                inputChecked.prop("checked", true);
            }else{
                spanChecked.removeClass("checked");
                inputChecked.prop("checked", false);
            }

            const tabStatus = inputChecked.prop("checked");
            const tabName= $(this).parent().attr("href").slice(1);
            const jqTabName = $(`#${tabName}`);
            // for each panel
            jqTabName.find(".check-panel").each(function (i,v) {
                if(tabStatus){
                    $(v).find("input").prop("checked", true);
                    $(v).find("span").addClass("checked");
                }else{
                    $(v).find("input").prop("checked", false);
                    $(v).find("span").removeClass("checked checked indeterminate");
                }
            });
            //for each row in panel
            jqTabName.find(".check-row").each(function (i,v) {
                if(tabStatus){
                    $(v).find("input").prop("checked", true);
                    $(v).find("span").addClass("checked");
                }else{
                    $(v).find("input").prop("checked", false);
                    $(v).find("span").removeClass("checked checked indeterminate");
                }
            });
            // for each label
            jqTabName.find(".check-labels").find("input").each(function (i,v) {
                if(tabStatus){
                    if(!$(v).prop("disabled")){
                        $(v).prop("checked", true);
                        $(v).parent("span").addClass("checked");
                    }
                }else{
                    $(v).prop("checked", false);
                    $(v).parent("span").removeClass("checked");
                }
            });


    });

    //for every panel
$(".check-panel").on("change",function () {
        $(this).find("span:first-child").removeClass("indeterminate");
        const parentTab = $(this).parent(".panel-title").parentsUntil(".tab-container").find(".active");
        const parentTabSlice = parentTab.find("a").attr("href").slice(1);
        const parentTabName = $(`#${parentTabSlice}`);
        const parentTabPanels = parentTabName.find(".check-panel");
        const parentTabPanelsCount = parentTabName.find(".check-panel").length;
        var currentPanelsChecked = 0;
        var currentPanelsInter = 0;
        const panelStatus = $(this).find("input").prop("checked");
        const rows = $(this).parent(".panel-title").parent(".panel-heading").parent(".panel").find(".panel-body").find(".check-row");
        rows.each(function (i,v) {
            if(panelStatus){
                $(v).find("span").addClass("checked");
                $(v).find("input").prop("checked",true);
            }else{
                $(v).find("span").removeClass("checked indeterminate");
                $(v).find("input").prop("checked",false);
            }
            const boxs = $(v).parent(".col-sm-4").siblings(".col-sm-2").find(".check-labels");
            if($(v).find("span").hasClass("checked")){
                boxs.find("input").each(function (i,v) {
                    if(!$(v).prop("disabled")){
                        $(this).prop("checked", true);
                        $(this).parent("span").addClass("checked")
                    }
                });
            }
            else{
                boxs.find("span").removeClass("checked");
                boxs.find("input").each(function (i,v) {
                    if(!$(v).prop("disabled")){
                        $(this).prop("checked", false);

                    }
                });
            }

        });
        debugger
    for(let i=0;i<parentTabPanelsCount;i++){
        if($(parentTabPanels[i]).find("span:first-child").hasClass("indeterminate")){
            currentPanelsInter++;
            parentTab.find(".check-tab").find("input").prop("checked",true);
            parentTab.find(".check-tab").find("span:first-child").addClass("checked indeterminate");
            break;
        }else if($(parentTabPanels[i]).find("span:first-child").hasClass("checked") && !$(parentTabPanels[i]).find("span:first-child").hasClass("indeterminate")){
            currentPanelsChecked++;
            if(currentPanelsChecked === parentTabPanelsCount){
                parentTab.find(".check-tab").find("input").prop("checked",true);
                parentTab.find(".check-tab").find("span:first-child").addClass("checked").removeClass("indeterminate");

            }else{
                parentTab.find(".check-tab").find("input").prop("checked",true);
                parentTab.find(".check-tab").find("span:first-child").addClass("checked indeterminate");
            }
        }
        else{
            if(currentPanelsChecked === 0 && currentPanelsInter === 0){
                parentTab.find(".check-tab").find("input").prop("checked",false);
                parentTab.find(".check-tab").find("span:first-child").removeClass("checked indeterminate");

            }

        }
    }

    });

    // for every row in panel
$(".check-row").on("change",function () {
       $(this).find("span:first-child").removeClass("indeterminate");
            const rowStatus = $(this).find("input").prop("checked");
            const boxs = $(this).parent(".col-sm-4").siblings(".col-sm-2").find(".check-labels");
            const parentTab = $(this).parent(".col-sm-4").parentsUntil(".tab-container").find(".active");
            const parentTabSlice = parentTab.find("a").attr("href").slice(1);
            const parentTabName = $(`#${parentTabSlice}`);
            const parentTabRows = parentTabName.find(".check-row").find("input");
            const parentTabRowsCount = parentTabName.find(".check-row").length;
            var currentRowsChecked = 0;
            const parentPanel = $(this).parent(".col-sm-4").parentsUntil(".panel-container").find(".check-panel");
            const parentPanelRows = $(this).parent(".col-sm-4").parentsUntil(".panel-container").find(".check-row").find("input");
            const parentPanelRowsCount = parentPanelRows.length;
            var rowsCount = 0;
            if(rowStatus){
                boxs.find("input").each(function (i,v) {
                    if(!$(v).prop("disabled")){
                        $(this).prop("checked", true);
                        $(this).parent("span").addClass("checked");
                    }
                });
            }
            else{
                boxs.find("span").removeClass("checked");
                boxs.find("input").each(function (i,v) {
                    if(!$(v).prop("disabled")){
                        $(this).prop("checked", false);
                    }
                });
            }

       for(let i=0;i<parentPanelRowsCount;i++){
           if($(parentPanelRows[i]).prop("checked")){
               rowsCount++;
               if(rowsCount === parentPanelRowsCount){
                   parentPanel.find("input").prop("checked", true);
                   parentPanel.find("span:first-child").removeClass("indeterminate").addClass("checked");

               }else if(rowsCount > 0){
                   parentPanel.find("input").prop("checked", true);
                   parentPanel.find("span:first-child").addClass("checked indeterminate");
               }
           }
           else {
               if (rowsCount === 0) {
                   parentPanel.find("input").prop("checked", false);
                   parentPanel.find("span:first-child").removeClass("checked indeterminate");
               }
           }
       }
       for(let i=0;i<parentTabRowsCount;i++){
           if($(parentTabRows[i]).prop("checked")){
               currentRowsChecked++;
               if(currentRowsChecked === parentTabRowsCount){
                   parentTab.find(".check-tab").find("input").prop("checked",true);
                   parentTab.find(".check-tab").find("span:first-child").removeClass("indeterminate").addClass("checked");
               }else if(currentRowsChecked > 0){
                   parentTab.find(".check-tab").find("input").prop("checked", true);
                   parentTab.find(".check-tab").find("span:first-child").addClass("checked indeterminate");
               }
           }
           else {
               if (currentRowsChecked === 0) {
                   parentTab.find(".check-tab").find("input").prop("checked", false);
                   parentTab.find(".check-tab").find("span:first-child").removeClass("checked indeterminate");
               }
           }
       }
           });

//for every box in rows
    $(".check-labels").on("change",function () {
        const parentTab = $(this).parentsUntil(".tab-container").find(".active");
        const parentTabSlice = parentTab.find("a").attr("href").slice(1);

        const parentTabName = $(`#${parentTabSlice}`);
        const parentTabRows = parentTabName.find(".check-panel").find("span:first-child");
        const parentTabRowsCount = parentTabName.find(".check-panel").length;
        var currentPanelsChecked = 0;
        var currentPanelsInter = 0;

        const parentPanel = $(this).parentsUntil(".panel-container");
        const parentPanelRows = parentPanel.find(".check-row").find("span:first-child");
        const parentPanelRowsCount = parentPanel.find(".check-row").length;
        var currentRowsChecked = 0;
        var currentRowsInter = 0;

        const parentRow = $(this).parentsUntil(".panel-body").find(".check-row");
        const childern = $(this).parentsUntil(".panel-body").find(".col-sm-2").find(".check-labels").find("span:first-child:not(.caret)");
        const childernAllCount = $(this).parent(".col-sm-2").siblings(".col-sm-2").find(".check-labels").find("input");
        var childernEnableCount = childernAllCount.length + 1;

        for(var i=0; i< childernAllCount.length + 1; i++){
            if($(childernAllCount[i]).prop("disabled") === true){
                childernEnableCount--;
            }
        }
        childernArr = [];
        childern.each(function (i,v) {

            if($(v).hasClass("checked") && !$(v).hasClass("indeterminate")) {
                childernArr.push(i);
                if (childernArr.length > 0 && childernArr.length < childernEnableCount) {
                    parentRow.find("input").prop("checked",true);
                    parentRow.find("span:first-child").addClass("checked indeterminate");


                } else if (childernArr.length === childernEnableCount) {
                    parentRow.find("input").prop("checked",true);
                    parentRow.find("span:first-child").removeClass("indeterminate").addClass("checked");
                }

            }
            else {
                if(childernArr.length === 0){
                    parentRow.find("span:first-child").removeClass("checked indeterminate");
                    parentRow.find("input").prop("checked",false);
                }
            }
        });
        for(let i=0;i<parentPanelRowsCount;i++){
            if($(parentPanelRows[i]).hasClass("indeterminate")){
                currentRowsInter++;
                parentPanel.find(".check-panel").find("input").prop("checked",true);
                parentPanel.find(".check-panel").find("span:first-child").addClass("checked indeterminate");
                break;

            }
            else if($(parentPanelRows[i]).hasClass("checked") && !$(parentPanelRows[i]).hasClass("indeterminate")){
                currentRowsChecked++;
                if(currentRowsChecked === parentPanelRowsCount){
                    parentPanel.find(".check-panel").find("input").prop("checked",true);
                    parentPanel.find(".check-panel").find("span:first-child").addClass("checked").removeClass("indeterminate");

                }else{
                    parentPanel.find(".check-panel").find("input").prop("checked",true);
                    parentPanel.find(".check-panel").find("span:first-child").addClass("checked indeterminate");
                }
            }
            else{
                if(currentRowsChecked === 0 && currentPanelsInter === 0){
                    parentPanel.find(".check-panel").find("input").prop("checked",false);
                    parentPanel.find(".check-panel").find("span:first-child").removeClass("checked indeterminate");

                }

            }
        }

        for(let i=0;i<parentTabRowsCount;i++){
            if($(parentTabRows[i]).hasClass("indeterminate")){
                currentPanelsInter++;
                parentTab.find(".check-tab").find("input").prop("checked",true);
                parentTab.find(".check-tab").find("span:first-child").addClass("checked indeterminate");
                break;
            }else if($(parentTabRows[i]).hasClass("checked") && !$(parentTabRows[i]).hasClass("indeterminate")){
                currentPanelsChecked++;
                if(currentPanelsChecked === parentTabRowsCount){
                    parentTab.find(".check-tab").find("input").prop("checked",true);
                    parentTab.find(".check-tab").find("span:first-child").addClass("checked").removeClass("indeterminate");

                }else{
                    parentTab.find(".check-tab").find("input").prop("checked",true);
                    parentTab.find(".check-tab").find("span:first-child").addClass("checked indeterminate");
                }
            }
            else{
                if(currentPanelsChecked === 0 && currentPanelsInter === 0){
                    parentTab.find(".check-tab").find("input").prop("checked",false);
                    parentTab.find(".check-tab").find("span:first-child").removeClass("checked indeterminate");

                }

            }
        }

    });
});



roleName.on("input",function () {
    if(!roleNameHelp.hasClass('hidden')){
        roleNameHelp.addClass("hidden");
    }else if($(this).val() === ''){
        roleNameHelp.removeClass("hidden");
    }
});

saveBtn.on("click", function () {
    if(roleName.val().trim() === ''){
        roleNameHelp.removeClass('hidden');
        roleName.focus();
        e.preventDefault();
    }
});
const empName = $("#emp-name");
const empNameHelp = $("#empHelp");
const adminName = $("#admin-name");

const saveBtn = $("#save-btn-2");

const enableBtn = $("#enable-btn");
const resetBtn = $("#password-btn");
const deleteBtn = $("#delete-btn");
const enableModal = $("#enable-modal");
const resetModal = $("#password-modal");
const deleteModal = $("#remove-modal");
const anotherEmp = $("#another-emp");
const anotherRole = $("#another-role");
const anotherEmpCopy = $("#user-copy");
const anotherRoleCopy = $("#emp-copy");
enableBtn.click(function () {
    enableModal.show();
    resetModal.hide();
    deleteModal.hide();
});
resetBtn.click(function () {
    enableModal.hide();
    resetModal.show();
    deleteModal.hide();
});
deleteBtn.click(function () {
    enableModal.hide();
    resetModal.hide();
    deleteModal.show();
});
$(document).ready(function () {
    var dropDown = [];
    var dropDownParent = [];
    var dropDowncheckedCount = [];
    $(".check-labels").each(function (i_,v) {
        const parentTabSlice = $(this).parents(".tab-pane").attr("id");
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
        if($(v).hasClass("checkall")){
            dropDownParent.push($(v).find("input"));
            dropDown.push($(v).next(".btn-group").find(".drop-items"));
            if(dropDown.length > 0){
                for(var i=0; i< dropDown.length; i++){
                    dropDowncheckedCount[i] = dropDown[i].length;
                    for(var j=0; j<dropDown[i].length; j++){
                        if($(dropDown[i][j]).find("input").prop("disabled") === true){
                            dropDowncheckedCount[i]--;
                        }
                    }

                }
                for(var i=0; i< dropDown.length; i++){
                    childernArrDrop = [];
                    for(var j=0; j<dropDown[i].length; j++){
                        if($(dropDown[i][j]).find("input").prop("checked") === true) {
                            childernArrDrop.push(i);
                            if (childernArrDrop.length > 0 && childernArrDrop.length < dropDowncheckedCount[i]) {
                                dropDownParent[i].parent("span").addClass("checked indeterminate");
                                dropDownParent[i].prop("checked", true);
                            } else if (childernArrDrop.length === dropDowncheckedCount[i]) {
                                dropDownParent[i].parent("span").removeClass("indeterminate");
                                dropDownParent[i].parent("span").addClass("checked");
                                dropDownParent[i].prop("checked", true);
                            }
                        }
                    }

                }

            }
        }


        for(var i=0; i< childernAllCount.length + 1; i++){
            if($(childernAllCount[i]).prop("disabled") === true){
                childernEnableCount--;
            }
        }
        childernArr = [];
        childern.each(function (i,v) {
            if($(v).hasClass("indeterminate")){
                parentRow.find("input").prop("checked",true);
                parentRow.find("span:first-child").removeClass("checked");
                parentRow.find("span:first-child").addClass("checked indeterminate");
            }
           else if($(v).hasClass("checked")) {
                childernArr.push(i);
                if (childernArr.length > 0 && childernArr.length < childernEnableCount && !parentRow.find("input").prop("checked")) {
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
            const parenTab = $(`[href='#${parentTabSlice}']`);
            if($(parentTabRows[i]).hasClass("indeterminate")){
                currentPanelsInter++;
                parenTab.find(".check-tab").find("input").prop("checked",true);
                parenTab.find(".check-tab").find("span:first-child").addClass("checked indeterminate");
                break;
            }else if($(parentTabRows[i]).hasClass("checked") && !$(parentTabRows[i]).hasClass("indeterminate")){
                currentPanelsChecked++;
                if(currentPanelsChecked === parentTabRowsCount){
                    parenTab.find(".check-tab").find("input").prop("checked",true);
                    parenTab.find(".check-tab").find("span:first-child").addClass("checked").removeClass("indeterminate");

                }else{
                    parenTab.find(".check-tab").find("input").prop("checked",true);
                    parenTab.find(".check-tab").find("span:first-child").addClass("checked indeterminate");
                }
            }
            else{
                if(currentPanelsChecked === 0 && currentPanelsInter === 0){
                    parenTab.find(".check-tab").find("input").prop("checked",false);
                    parenTab.find(".check-tab").find("span:first-child").removeClass("checked indeterminate");

                }

            }
        }

    });
    // for every dropdown item
    $(".drop-items").on("change", function () {
        const dropDown = $(this).closest(".btn-group");
        const childern = dropDown.find(".drop-items").find("span:first-child");
        const checkall = dropDown.prev(".checkall");
        const checkAllClass = checkall.find("span:first-child:not(.caret)");
        var checkedCount = dropDown.find(".drop-items").length;
        const checkedInput = dropDown.find(".drop-items").find("input");
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
        for(var i=0; i< dropDown.find(".drop-items").length; i++){
            if($(checkedInput[i]).prop("disabled") === true){
                checkedCount--;
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

    $(".checkall").on("change", function (e) {
       const dropItems = $(this).next(".btn-group").find(".drop-items");
        const checkAllClass = $(this).find("span:first-child");
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
                checkAllClass.addClass("checked");
                checkAllInput.prop('checked',true);
                dropItems.each(function (i,v) {
                    if($(v).find("input").prop("disabled") === false){
                        $(v).find("span:first-child").addClass("checked");
                        $(v).find("input").prop("checked", true);
                    }

                });

            }
            else{
                checkAllClass.removeClass("checked");
                checkAllInput.prop('checked', false);
                dropItems.each(function (i,v) {
                    $(v).find("span:first-child").removeClass("checked");
                    $(v).find("input").prop("checked", false);
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
        // }

    });
    //for every tab
    $(".check-tab").on("click",function (e) {
        const spanChecked = $(this).find("span:first-child");
        const inputChecked = $(this).find("input");
        var dropDownTab = [];
        var dropDownParentTab = [];
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
        jqTabName.find(".check-labels").each(function (i,v) {
            if($(v).hasClass("checkall")){
                dropDownParentTab.push($(v).find("input"));
                dropDownTab.push($(v).next(".btn-group").find(".drop-items"));
                $(v).find("span").removeClass("indeterminate checked");
                $(v).find("input").prop("checked", false);
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
        for(var j=0;j<dropDownParentTab.length;j++){
            if(dropDownParentTab[j].prop("checked") === true){
                dropDownTab[j].each(function (i,v) {
                    if($(v).find("input").prop("disabled") === false){
                        $(v).find("span:first-child").addClass("checked");
                        $(v).find("input").prop("checked", true);
                    }

                });
            }else{
                dropDownTab[j].each(function (i,v_) {
                    $(v_).find("span:first-child").removeClass("checked");
                    $(v_).find("input").prop("checked", false);

                });
            }
        }


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
            var dropDown;
            var dropDownParent;
            boxs.each(function (i,v_) {
                if($(v_).hasClass("checkall")){
                    dropDownParent = $(v_).find("input");
                    $(v_).find("span").removeClass("indeterminate checked");
                    dropDownParent.prop("checked", false);
                    dropDown = $(v_).next(".btn-group").find(".drop-items");
                }
            });
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
            if(dropDownParent){
                if( dropDownParent.prop("checked") === true){
                    dropDown.each(function (i,v) {
                        if($(v).find("input").prop("disabled") === false){
                            $(v).find("span:first-child").addClass("checked");
                            $(v).find("input").prop("checked", true);
                        }

                    });
                }else{
                    dropDown.each(function (i,v) {
                        $(v).find("span:first-child").removeClass("checked");
                        $(v).find("input").prop("checked", false);

                    });
                }
            }

        });
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
        var dropDown;
        var dropDownParent;
        boxs.each(function (i,v) {
            if($(v).hasClass("checkall")){
                dropDownParent = $(v).find("input");
                $(v).find("span").removeClass("indeterminate checked");
                dropDownParent.prop("checked", false);
                dropDown = $(v).next(".btn-group").find(".drop-items");
            }
        });
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
        if(dropDownParent.prop("checked") === true){
            dropDown.each(function (i,v) {
                if($(v).find("input").prop("disabled") === false){
                    $(v).find("span:first-child").addClass("checked");
                    $(v).find("input").prop("checked", true);
                }

            });
        }else{
            dropDown.each(function (i,v) {
                    $(v).find("span:first-child").removeClass("checked");
                    $(v).find("input").prop("checked", false);

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



empName.on("input",function () {
    if(!empNameHelp.hasClass('hidden')){
        empNameHelp.addClass("hidden");
    }else if($(this).val() === ''){
        empNameHelp.removeClass("hidden");
    }
});

saveBtn.on("click", function () {
    if(empName.val().trim() === ''){
        empNameHelp.removeClass('hidden');
        empName.focus();
        e.preventDefault();
    }
});
//search canvas

const searchContainer = $(".search-content-container .search-container:first-child");
const searchContainerCp = $(".search-content-container2 .search-container:first-child");
const searchCotainerTransparent = $(".search-content-container .col-sm-6:last-child");
const searchCotainerTransparentCp = $(".search-content-container2 .col-sm-6:last-child");
const searchInputCanvas = $("#search-input");
const searchInputCanvas2 = $("#search-input2");
const searchPlaceHolder = $(".search-content-container .search-placeholder:first-child");
const searchPlaceHolder2 = $(".search-content-container2 .search-placeholder:first-child");
//const searchItems = $("#search-list-items-container");
const loaderCanvas = $("#loader-content-search");
const loaderCanvas2 = $("#loader-content-search2");
const doMeanCanvas = $("#do_mean-off-canvas");
const doMeanCanvas2 = $("#do_mean-off-canvas2");
const correctWordCanvas = $("#correct_word");
const correctWordCanvas2 = $("#correct_word2");
var showDoMeanCanvas = false;
var showDoMeanCanvas2 = false;
var currentActive2 = null;
var prevActive2 = null;
empName.on('focus', function () {
    openCanvas();
    if(currentActive === null){
        currentActive = 'emp';
    }else{
        if(currentActive === 'emp'){}
        else{
            currentActive = 'emp';
            prevActive = 'admin';
            showDoMeanCanvas = false;
            doMeanCanvas.addClass('hidden');
            searchInputCanvas.val('');
            loaderCanvas.addClass("hidden");
            correctWordCanvas.html('');
            searchPlaceHolder.removeClass("hidden");


        }
    }
});
adminName.on("focus",function () {
    openCanvas();
});
//  when every keyup
searchInputCanvas.on("keyup", function (e) {
    searchPlaceHolder.addClass("hidden");
    //searchItems.removeClass("hidden");
    loaderCanvas.removeClass("hidden");
    words = e.target.value;
    var finalWord = '';
    var arabicFinalWord;
    showDoMeanCanvas = false;
    for(var i=0;i< words.length;i++){
        arabicFinalWord = unikeycode(words.charCodeAt(i));
        finalWord += arabicFinalWord;
        if(words[i] !== arabicFinalWord){
            showDoMeanCanvas = true;
        }

    }
    if(showDoMeanCanvas){
        doMeanCanvas.removeClass('hidden');
    }else {
        doMeanCanvas.addClass('hidden');
    }
    correctWordCanvas.html(finalWord);
});
searchInputCanvas2.on("keyup", function (e) {
    searchPlaceHolder2.addClass("hidden");
    //searchItems.removeClass("hidden");
    loaderCanvas2.removeClass("hidden");
    words = e.target.value;
    var finalWord = '';
    var arabicFinalWord;
    showDoMeanCanvas2 = false;
    for(var i=0;i< words.length;i++){
        arabicFinalWord = unikeycode(words.charCodeAt(i));
        finalWord += arabicFinalWord;
        if(words[i] !== arabicFinalWord){
            showDoMeanCanvas2 = true;
        }

    }
    if(showDoMeanCanvas2){
        doMeanCanvas2.removeClass('hidden');
    }else {
        doMeanCanvas2.addClass('hidden');
    }
    correctWordCanvas2.html(finalWord);
});


function openCanvas(){
    searchContainer.fadeIn(100);
    searchCotainerTransparent.fadeIn(100);
    searchInputCanvas.focus();
}

$(".icon-x:first-child").click(function () {
    closeSearch();
});
$(".icon-x:last-child").click(function () {
    closeSearchCp();
});
$(searchCotainerTransparent).click(function () {

    if(searchContainer.css("display") === "block"){
        closeSearch();
    }
});
$(searchCotainerTransparentCp).click(function () {
    if(searchContainerCp.css("display") === "block"){
        closeSearchCp();
    }
});
function closeSearch() {
    searchContainer.fadeOut(300);
    searchCotainerTransparent.fadeOut();
}
function closeSearchCp() {
    searchContainerCp.fadeOut(300);
    searchCotainerTransparentCp.fadeOut();
}
function unikeycode(char) {

    switch (char) {
        case 32:
            return ' ';
        case 65:
        case 97:
            return 'ش';
        case 66:
            return 'لآ';
        case 98:
            return 'لا';
        case 67:
        case 99:
            return 'ؤ';
        case 68:
        case 100:
            return 'ي';
        case 69:
        case 101:
            return 'ث';
        case 70:
        case 102:
            return 'ب';
        case 71:
            return 'لأ';
        case 103:
            return 'ل';
        case 72:
            return 'أ';
        case 104:
            return 'ا';
        case 73:
        case 105:
            return'ه';
        case 74:
        case 106:
            return 'ت';
        case 75:
        case 107:
            return 'ن';

        case 76:
        case 108:
            return 'م';

        case 77:
        case 109:
            return 'ة';

        case 78:
            return 'آ';
        case 110:
            return 'ى';

        case 79:
        case 111:
            return 'خ';

        case 80:
        case 112:
            return 'ح';

        case 81:
        case 113:
            return 'ض';

        case 82:
        case 114:
            return 'ق';

        case 83:
        case 115:
            return 'س';

        case 84:
        case 116:
            return 'ف';

        case 85:
        case 117:
            return 'ع';

        case 86:
        case 118:
            return 'ر';

        case 87:
        case 119:
            return 'ص';

        case 88:
        case 120:
            return 'ء';

        case 89:
        case 121:
            return 'غ';

        case 90:
        case 122:
            return 'ئ';

        case 58:
        case 59:
            return 'ك';

        case 60:
        case 44:
            return 'و';

        case 46:
        case 62:
            return 'ز';

        case 63:
        case 47:
            return 'ظ';

        case 126:
        case 96:
            return 'ذ';

        case 123:
        case 91:
            return 'ج';

        case 125:
        case 93:
            return 'د';

        case 39:
        case 34:
            return 'ط';

        default:
            return String.fromCharCode(char);

    }
}

anotherEmp.click(function () {

    if(currentActive2 === null){
        currentActive2 = 'emp';
    }else{
        if(currentActive2 === 'emp'){}
        else{
            currentActive2 = 'emp';
            prevActive2 = 'role';
            showDoMeanCanvas2 = false;
            doMeanCanvas2.addClass('hidden');
            searchInputCanvas2.val('');
            loaderCanvas2.addClass("hidden");
            correctWordCanvas2.html('');
            searchPlaceHolder2.removeClass("hidden");


        }
    }
});


anotherEmpCopy.focus(function () {
    openCanvasCp();
});
anotherRole.click(function () {
    if(currentActive2 === null){
        currentActive2 = 'role';
    }else{
        if(currentActive2 === 'role'){}
        else{
            currentActive2 = 'role';
            prevActive2 = 'emp';
            showDoMeanCanvas2 = false;
            doMeanCanvas2.addClass('hidden');
            searchInputCanvas2.val('');
            loaderCanvas2.addClass("hidden");
            correctWordCanvas2.html('');
            searchPlaceHolder2.removeClass("hidden");


        }
    }

});
anotherRoleCopy.focus(function () {
    openCanvasCp();
});
function openCanvasCp(){
    searchContainerCp.fadeIn(100);
    searchCotainerTransparentCp.fadeIn(100);
    searchInputCanvas2.focus();
}
$("#save-btn-emp").click(function () {
    var chosenPermissions = [];
    var x = $(this).parentsUntil(".copyModal").find("#copy-emp-modal").find("input[type='checkbox']");
    x.each(function (i,v) {
        if($(v).prop("checked")){
            chosenPermissions.push($(v).name);
        }
    });
    // for test
    $("#test").prop("checked", true);
    $("#test").parent("span:first-child").addClass("checked");
    $("#test1").prop("checked", true);
    $("#test1").parent("span:first-child").addClass("checked");

    $(".check-labels").each(function (i_,v) {
        const parentTabSlice = $(this).parents(".tab-pane").attr("id");
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
            const parenTab = $(`[href='#${parentTabSlice}']`);
            if($(parentTabRows[i]).hasClass("indeterminate")){
                currentPanelsInter++;
                parenTab.find(".check-tab").find("input").prop("checked",true);
                parenTab.find(".check-tab").find("span:first-child").addClass("checked indeterminate");
                break;
            }else if($(parentTabRows[i]).hasClass("checked") && !$(parentTabRows[i]).hasClass("indeterminate")){
                currentPanelsChecked++;
                if(currentPanelsChecked === parentTabRowsCount){
                    parenTab.find(".check-tab").find("input").prop("checked",true);
                    parenTab.find(".check-tab").find("span:first-child").addClass("checked").removeClass("indeterminate");

                }else{
                    parenTab.find(".check-tab").find("input").prop("checked",true);
                    parenTab.find(".check-tab").find("span:first-child").addClass("checked indeterminate");
                }
            }
            else{
                if(currentPanelsChecked === 0 && currentPanelsInter === 0){
                    parenTab.find(".check-tab").find("input").prop("checked",false);
                    parenTab.find(".check-tab").find("span:first-child").removeClass("checked indeterminate");

                }

            }
        }

    });
});
$("#save-btn-role").click(function () {
    var chosenPermissions = [];
    var x = $(this).parentsUntil(".copyModal").find("#copy-role-modal").find("input[type='checkbox']");
    x.each(function (i,v) {
        if($(v).prop("checked")){
            chosenPermissions.push($(v).name);
        }
    });
    // for test
    $("#test").prop("checked", true);
    $("#test").parent("span").addClass("checked");
    $(".check-labels").each(function (i_,v) {
        const parentTab = $(this).parentsUntil(".tab-container");
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

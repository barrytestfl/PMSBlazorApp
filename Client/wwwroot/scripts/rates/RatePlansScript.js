
    function postInitFunction() {
        eviivo.eagle.synopsisToolbar.init({
            createNewRatePlanURL: '/suite/rates/createindependentrateplan?roomTypeId=idPlaceHolder',
            ratesPlansListURL: '/suite/rates/ratesplanslist',
            rateMapListURL: '/suite/rates/ratemaplist',
            changeViewUnsavedChangesMsg: "You have unsaved changes, which will be lost when you change view.  Do you want to continue?",
            selectRowValidation: "Select the rate plans or days that you want to update on the screen below",
            updateButtonTxt: "Apply",
            businessId: "40305"
        });
    };

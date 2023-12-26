
    var adjustment = {
        How: {
        INCREASE: 1,
    DECREASE: 2,
    REPLACE: 3
        },
    What: {
        SELECTED_CELLS: 1,
    DATE_RANGE: 2
        },
    Type: {
        RATES: "r_Rates",
    MIN_STAY: "r_MLOS",
    MAX_STAY: "r_maxStay",
    CLOSED: "r_closed",
    ALL: "r_all"
        },
    RowClass: {
        RATES: "rateRow",
    MIN_STAY: "minStayRow",
    MAX_STAY: "maxStayRow",
    NO_CHECK_IN: "noCheckInRow",
    NO_CHECK_OUT: "noCheckOutRow"
        },
    TypeClass: {
        RATES: ".prices",
    MIN_STAY: ".mlos",
    MAX_STAY: ".maxStay",
    CLOSED: ".cl-arr-dep"
        },
    ShowAdultChildOccupancyRowExpands: ["r_MLOS", "r_maxStay", "r_closed"],
    DisableMassSelection: ["r_all", "r_closed"],
    DisableTooltip: ["r_all", "r_closed"],
    DisableBulkUpdateOptions: ["r_all", "r_closed"],
    HideBulkUpdateOptions: [""]
    };

    function postInitFunction () {
        eviivo.eagle.dailyRates.init({
            //web.config limits for simulataneous bulk updates
            businessBulkUpdateLimit: 5,
            systemBulkUpdateLimit: 30,
            //web.config timeout limits for ajax refreshs
            autoRefreshActiveUpdatesProgress: 30000,
            autoRefreshActiveUpdatesBusiness: 30000,
            autoRefreshActiveUpdatesSystem: 0,
            currencySymbol: "£",
            defaultCultureCode: "en-GB",
            calendarIcon: '/suite/content/images/svg-individual-icons/date_range.svg',
            canEditRates: true,
            currentBId: 40305,
            urls:
            {
                get: "/suite/rates/dailyratesdetails",
                save: "/suite/api/dailyrate/override",
                revert: "/suite/api/dailyrate/revert"
            },
            datePick: {
                from: new Date("Mon 01 Jan 2024 00:00:00"),
                to: new Date("Wed 31 Jan 2024 00:00:00"),
            },
            toolBar: {
                toggleRevert: eviivo.eagle.dailyRatesToolbar.toggleRevertBtn,
                toggleSaveBtn: eviivo.eagle.dailyRatesToolbar.toggleSaveBtn,
                toggleCancelBtn: eviivo.eagle.dailyRatesToolbar.toggleCancelBtn,
                hideToolBar: eviivo.eagle.dailyRatesToolbar.hideToolBar,
                toggleUpdatePanel: eviivo.eagle.dailyRatesToolbar.toggleUpdatePanel,
                enableDisableDateSelectionBulkUpdateSelect: eviivo.eagle.dailyRatesToolbar.enableDisableDateSelectionBulkUpdateSelect,
                getDisplaySelection: eviivo.eagle.dailyRatesToolbar.getDisplaySelection,
                changeBulkDateRangeValues: eviivo.eagle.dailyRatesToolbar.changeBulkDateRangeValues,
                determineTooltipSetup: eviivo.eagle.dailyRatesToolbar.determineTooltipSetup,
                setBulkLimitHit: eviivo.eagle.dailyRatesToolbar.setBulkLimitHit,
                showBulkUpdatePanel: eviivo.eagle.dailyRatesToolbar.showBulkUpdatePanel
            },
            res: {
                maxDateRange: 31,
                freeNightsError: "You cannot offer free nights on days where guests can check in",
                selectAll: "Select all",
                selectAllBase: "Select all base rates",
                unselectAll: "Unselect all",
                mlos: "Min Stay",
                maxStay: "Max Stay",
                rate: "Rate",
                currency: "£",
                setTo: "Set to",
                adjustRateTooltip: "For all selected Rates: specify a price OR specify an amount or percentage to adjust the price by",
                adjustMLOSTooltip: "For all selected fields, specify a number of days to set the MLOS",
                noFreeNights: "You cannot offer free nights on days where guests can check in.",
                unsavedWarning: "You have unsaved changes.  Please save or changes will be lost.",
                maxDaysRangeWarning: "You can only view a range of 31 days.",
                errorNotification: "An error has occurred, please contact eviivo if the problem persists.",
                SaveSuccessful: "Saved",
                bulkUpdateHappening: "Your rate changes are still being processed, and will be available in a few minutes.",
                bulkUpdateFinished: "Your rates changes are now complete.  Click the 'Refresh' button to see your rate updates.",
                bulkUpdateFinishedRefresh: "Refresh",
                bulkUpdateFinishedDismiss: "OK",
                businessLimitHitMsg: "You have 5 bulk updates in progress.  You can still make changes to individual days, but please wait a few minutes before making more bulk updates.",
                systemLimitHitMsg: "Bulk updates are temporarily unavailable.  You can still make changes to individual days, but please wait a few minutes before making bulk changes.",
                bulkUpdateSuccessBtn: "Go to {0} to see your changes"
            },
            adjustment: adjustment
        });

    eviivo.eagle.dailyRatesToolbar.init({
        defaultCultureCode: "en-GB",
    adjustment: adjustment,
    res: {
        dayWeekValidation: "Select at least one day",
    numberEnteredValidation: "A value must be entered before an update can be applied",
    zeroValidation: "Please enter a rate greater than zero",
    maxRangeMsg: "The max range is 3 months",
    bulkDateRangeHasIndividualCellsSelected: "",
    maxDecreaseMsg: "You cannot decrease prices by 100%",
    mixedRatePlanSelection: "You cannot make bulk updates to rates, adult/child supplements or linked rates at the same time.",
    selectRowValidation: "Select the rate plans that you want to update, on the daily rates screen below.",
    selectCellRowValidation: "Select the rate plans or specific cells that you want to update, on the daily rates screen below.",
    bulkOptionsDisabledButtonTooltip: "To make bulk updates, change the display to either Rates, Min Stay, or Max Stay.",
    spinnerPleaseWait: "Please wait..."
            }
        });

    eviivo.eagle.dailyRatesBulkUpdate.init({
        resources: {
        confirmationMsg: "If you close this popup, you will not be able to re-apply your original bulk update, are you sure?",
    confirmationOkBtn: "Ok",
    confirmationCancelBtn: "Cancel",
    bulkUpdateValidationFailureHeader: "Your rate plans have NOT been updated",
    bulkUpdateValidationFailureMsg1: "Your update was not applied for the following reason(s):",
    bulkUpdateValidationFailureMsg2: "The affected dates and rate plans are listed below:",
    bulkUpdateValidationFailureMsg3: "Click the date(s) above to find and fix the values which prevented the update, then re-apply",
    bulkUpdateValidationFailureReplayBtn: "Retry bulk update"
            }
        });
    }

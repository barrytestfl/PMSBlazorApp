﻿if (typeof listingInits === 'undefined') {
    var listingInits = [];
}

function postInitListingTable() {
    var datatableOptions = {
        userLanguageCulture: "en-GB",
        container: "#eviivo-list-cleaning",
        identityColumnKey: "Id",
        additionalRowDataAttributes: null,
        paging: true,
        pageLength: 100,
        tableInfo: false,
        enableSearching: true,
        enableBulkSelect: true,
        enableSingleSelect: false,
        enableBulkDelete: false,
        enableEditButton: false,
        enableViewButton: false,
        deleteButtonTooltip: "",
        editButtonTooltip: "",
        editButtonFunc: null,
        viewButtonFunc: null,
        viewButtonTooltip: "",
        enableDeleteButton: false,
        enableDeleteConfirmPopup: false,
        enableResponsive: false,
        baseAjaxUrl: "/suite/api/cleaning/cleaning",
        data: JSON.parse(null),
        baseBrowserUrl: "https://on.eviivo.com/suite/cleaning/",
        listingMode: true,
        columnsWithFilters: [],
        columnsWithMultiFilters: [0, 1, 2, 3, 6, 7, 10, 12],
        filterPosition: { "Header": true, "Footer": false, "Custom": null },
        columns: [{ "data": "Property", "name": "Property", "title": "Property", "headerRowSpan": 0, "headerColSpan": 0, "titleComplexHeader": null, "className": "property-col s-property-col cp-table_sticky-column cp-table_managed-col size-range-150-300 ", "HeaderCss": null, "sortable": true, "filterable": 2, "visible": true, "searchable": true, "render": null, "type": "Property", "responsivePriority": 10000, "Order": 0 }, { "data": "Unit", "name": "Unit", "title": "Studio", "headerRowSpan": 0, "headerColSpan": 0, "titleComplexHeader": null, "className": "room-col s-room-col cp-table_sticky-column ", "HeaderCss": null, "sortable": true, "filterable": 2, "visible": true, "searchable": true, "render": null, "type": "Unit", "responsivePriority": 0, "Order": 1 }, { "data": "Movement", "name": "Movement", "title": "Movement", "headerRowSpan": 0, "headerColSpan": 0, "titleComplexHeader": null, "className": " movement-col s-movement-col s-select-filter", "HeaderCss": null, "sortable": true, "filterable": 2, "visible": true, "searchable": true, "render": "eviivo.pms.cleaning.customRenderMovement", "type": "Movement", "responsivePriority": 2, "Order": 2 }, { "data": "Condition", "name": "Condition", "title": "Condition", "headerRowSpan": 0, "headerColSpan": 0, "titleComplexHeader": null, "className": " condition-col s-readiness-col s-select-filter", "HeaderCss": null, "sortable": true, "filterable": 2, "visible": true, "searchable": true, "render": null, "type": "Condition", "responsivePriority": 1000, "Order": 3 }, { "data": "TotalNights", "name": "TotalNights", "title": "Nights", "headerRowSpan": 0, "headerColSpan": 0, "titleComplexHeader": null, "className": " nights-col s-nights-col", "HeaderCss": null, "sortable": true, "filterable": 0, "visible": false, "searchable": false, "render": "eviivo.pms.cleaning.customRenderNights", "type": "TotalNights", "responsivePriority": 1000, "Order": 4 }, { "data": "Guests", "name": "Guests", "title": "Guests", "headerRowSpan": 0, "headerColSpan": 0, "titleComplexHeader": null, "className": " guest-col s-occupancy-col", "HeaderCss": null, "sortable": true, "filterable": 0, "visible": false, "searchable": true, "render": "eviivo.pms.cleaning.customRenderGuests", "type": "Guests", "responsivePriority": 1000, "Order": 5 }, { "data": "BedConfig", "name": "BedConfig", "title": "Beds", "headerRowSpan": 0, "headerColSpan": 0, "titleComplexHeader": null, "className": " bedconfig-col s-bedconf-col", "HeaderCss": null, "sortable": true, "filterable": 2, "visible": true, "searchable": true, "render": "eviivo.pms.cleaning.customRenderBedConfig", "type": "BedConfig", "responsivePriority": 1000, "Order": 6 }, { "data": "Extras", "name": "Extras", "title": "Extras", "headerRowSpan": 0, "headerColSpan": 0, "titleComplexHeader": null, "className": " extras-col s-extras-col cp-table_text-center", "HeaderCss": null, "sortable": true, "filterable": 2, "visible": false, "searchable": true, "render": "eviivo.pms.cleaning.customRenderExtras", "type": "Extras", "responsivePriority": 1000, "Order": 7 }, { "data": "InternalOne", "name": "InternalOne", "title": "Internal Field 1", "headerRowSpan": 0, "headerColSpan": 0, "titleComplexHeader": null, "className": "internal-col s-internal1-col ", "HeaderCss": null, "sortable": false, "filterable": 0, "visible": false, "searchable": true, "render": null, "type": "InternalOne", "responsivePriority": 8, "Order": 8 }, { "data": "InternalTwo", "name": "InternalTwo", "title": "Internal Field 2", "headerRowSpan": 0, "headerColSpan": 0, "titleComplexHeader": null, "className": "internal-col s-internal2-col ", "HeaderCss": null, "sortable": false, "filterable": 0, "visible": false, "searchable": true, "render": null, "type": "InternalTwo", "responsivePriority": 9, "Order": 9 }, { "data": "Schedule", "name": "Schedule", "title": "Cleaning schedule", "headerRowSpan": 0, "headerColSpan": 0, "titleComplexHeader": null, "className": " schedule-col s-schedule-col", "HeaderCss": null, "sortable": true, "filterable": 2, "visible": true, "searchable": true, "render": "eviivo.pms.cleaning.customRenderSchedule", "type": "Schedule", "responsivePriority": 3, "Order": 10 }, { "data": "RepairNotes", "name": "RepairNotes", "title": "Notes / Repairs", "headerRowSpan": 0, "headerColSpan": 0, "titleComplexHeader": null, "className": " notes-col s-status-col cp-table_text-center", "HeaderCss": null, "sortable": false, "filterable": 0, "visible": true, "searchable": true, "render": "eviivo.pms.cleaning.customRenderNotes", "type": "RepairNotes", "responsivePriority": 1000, "Order": 11 }, { "data": "Assigned", "name": "Assigned", "title": "Assign to", "headerRowSpan": 0, "headerColSpan": 0, "titleComplexHeader": null, "className": " assign-col s-assigned-col s-select-filter", "HeaderCss": null, "sortable": true, "filterable": 2, "visible": true, "searchable": true, "render": "eviivo.pms.cleaning.customRenderAssigned", "type": "Assigned", "responsivePriority": 1000, "Order": 12 }, { "data": "Status", "name": "Status", "title": "Status", "headerRowSpan": 0, "headerColSpan": 0, "titleComplexHeader": null, "className": "  status-col s-status-col", "HeaderCss": null, "sortable": true, "filterable": 0, "visible": true, "searchable": true, "render": "eviivo.pms.cleaning.customRenderStatus", "type": "Status", "responsivePriority": 1, "Order": 13 }, { "data": "Alert", "name": "Alert", "title": "Alert", "headerRowSpan": 0, "headerColSpan": 0, "titleComplexHeader": null, "className": "alert-col s-alert-col  actions-2 cp-table_text-right cp-table_sticky-column-right", "HeaderCss": null, "sortable": false, "filterable": 0, "visible": true, "searchable": false, "render": "eviivo.pms.cleaning.customRenderAlert", "type": "Alert", "responsivePriority": 10, "Order": 14 }],
        initComplete: eviivo.pms.cleaning.onSuccessListDataLoad,
        rowSelectionCallback: eviivo.pms.cleaning.OnRowSelectedDeselectedCallback,
        responsiveRowExpandedCallback: eviivo.pms.cleaning.initialiseOnChangeListeners,
        createdRowCallback: eviivo.pms.cleaning.createdRowCallback,
        footerCallback: null,
        filterOnBeforeCallback: eviivo.pms.listingTable.filterActions.get,
        filterOnApplyCallback: eviivo.pms.listingTable.filterActions.post,
        orderGetCallback: [],
        orderSetCallback: eviivo.pms.listingTable.orderActions.post,
        moveSearchInputIntoThisContainer: ".s-search-bar",
        ajaxType: "",
        ajaxDataCallback: null,
        ajaxDataFailureCallback: null,
        deleteCallback: null,
        deleteFailureCallback: null,
        groupColumn: null,
        groupColumnCheckbox: false,
        groupColumnCollapse: false,
        fixedOrder: null,
        enableRowReOrder: null,
        rowReOrderCallbacksPre: null,
        rowReOrderCallbacksPost: null,
        deleteAjaxDataCallback: null,
        dom: "\u003c\u0027cp-table_toolbar\u0027 f \u003c\u0027cp-table_toolbar-actions\u0027\u003e\u003e\u003c\u0027cp-table_scroll-vertical cp-table_scroll-horizontal\u0027 t\u003e\u003c\u0027cp-table_footer\u0027lp\u003e",
        noOfItemsFilterShouldHaveToIncludeSearchInput: 8,
        displayDefaultSpinnerOnInitialLoad: true,
        lastColClasses: " cp-table_text-right cp-table_sticky-column-right ",
        lastColComplex: false,
        lastColHeader: "",
        language: {
            "decimal": "",
            "emptyTable": "No data available in table",
            "info": "Show _START_ to _END_ of _TOTAL_ enteries",
            "infoEmpty": "Showing 0 to 0 of 0 entries",
            "infoFiltered": "(filtered from _MAX_ total entries)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Show _MENU_ entries",
            "loadingRecords": "Loading...",
            "processing": "Processing...",
            "search": "",
            "searchPlaceholder": "Filter",
            "zeroRecords": "No matching records found",
            "paginate": {
                "first": "First",
                "last": "Last",
                "next": "Next",
                "previous": "Previous"
            },
            "aria": {
                "sortAscending": ": activate to sort column ascending",
                "sortDescending": ": activate to sort column descending"
            }
        },
        resources: {
            editButtonText: "",
            viewButtonText: "",
            deleteButtonText: "",
            defaultFilterDropdown: "All",
            yes: "Yes",
            no: "No",
            labelAll: "All",
            selected: "selected",
            btnSelectAll: "Select All",
            btnDeselectAll: "Clear All",
            confirmDeleteMsg: "Are you sure you want to delete?",
            deleteConfirmationError: "An error has occured during the deletion process",
            deleteConfirmationSuccess: "Success",
            emptyOption: "Empty",
            apply: "Apply",
            cancel: "Cancel",
            search: "Search"
        }
    }

    eviivo.component.listing.initListing(eviivo.pms.cleaning.onBeforeListDataLoad, datatableOptions);
}

listingInits.push(["#eviivo-list-cleaning", postInitListingTable]);
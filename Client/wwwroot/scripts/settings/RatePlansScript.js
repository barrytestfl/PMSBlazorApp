﻿if (typeof listingInits === 'undefined') {
    var listingInits = [];
}

function postInitListingTable() {
    var datatableOptions = {
        userLanguageCulture: "en-GB",
        container: "#eviivo-list-rateplans",
        identityColumnKey: "Id",
        additionalRowDataAttributes: null,
        paging: true,
        pageLength: 100,
        tableInfo: false,
        enableSearching: true,
        enableBulkSelect: false,
        enableSingleSelect: false,
        enableBulkDelete: false,
        enableEditButton: true,
        enableViewButton: false,
        deleteButtonTooltip: "",
        editButtonTooltip: "",
        editButtonFunc: null,
        viewButtonFunc: null,
        viewButtonTooltip: "",
        enableDeleteButton: false,
        enableDeleteConfirmPopup: false,
        enableResponsive: false,
        baseAjaxUrl: "/suite/api/channels/rateplans",
        data: JSON.parse(null),
        baseBrowserUrl: "https://on.eviivo.com/suite/rateplans/",
        listingMode: true,
        columnsWithFilters: [],
        columnsWithMultiFilters: [0, 1, 2, 3, 4],
        filterPosition: { "Header": true, "Footer": false, "Custom": null },
        columns: [{ "data": "Status", "name": "Status", "title": "Status", "headerRowSpan": 0, "headerColSpan": 0, "titleComplexHeader": null, "className": "status-col", "HeaderCss": null, "sortable": true, "filterable": 2, "visible": true, "searchable": true, "render": "", "type": "Status", "responsivePriority": 1000, "Order": 0 }, { "data": "Channels", "name": "Channels", "title": "Channels", "headerRowSpan": 0, "headerColSpan": 0, "titleComplexHeader": null, "className": "channels-col", "HeaderCss": null, "sortable": true, "filterable": 2, "visible": true, "searchable": true, "render": "eviivo.eagle.channelsRatePlans.channelsCustomerRender", "type": "Channels", "responsivePriority": 1000, "Order": 0 }, { "data": "RoomType", "name": "RoomType", "title": "Studio Type", "headerRowSpan": 0, "headerColSpan": 0, "titleComplexHeader": null, "className": "room-type-col", "HeaderCss": null, "sortable": true, "filterable": 2, "visible": true, "searchable": true, "render": "", "type": "RoomType", "responsivePriority": 1000, "Order": 0 }, { "data": "RatePlan", "name": "RatePlan", "title": "Rate Plan", "headerRowSpan": 0, "headerColSpan": 0, "titleComplexHeader": null, "className": "rate-col", "HeaderCss": null, "sortable": true, "filterable": 2, "visible": true, "searchable": true, "render": "eviivo.eagle.channelsRatePlans.ratePlanCustomerRender", "type": "RatePlan", "responsivePriority": 1000, "Order": 0 }, { "data": "Notes", "name": "Notes", "title": "Notes", "headerRowSpan": 0, "headerColSpan": 0, "titleComplexHeader": null, "className": "note-col", "HeaderCss": null, "sortable": true, "filterable": 2, "visible": true, "searchable": true, "render": "eviivo.eagle.channelsRatePlans.notesCustomerRender", "type": "Notes", "responsivePriority": 1000, "Order": 0 }],
        initComplete: null,
        rowSelectionCallback: null,
        responsiveRowExpandedCallback: null,
        createdRowCallback: eviivo.eagle.channelsRatePlans.rowCreatedCallback,
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
        noOfItemsFilterShouldHaveToIncludeSearchInput: 0,
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
            defaultFilterDropdown: "",
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

    eviivo.component.listing.initListing(null, datatableOptions);
}

listingInits.push(["#eviivo-list-rateplans", postInitListingTable]);
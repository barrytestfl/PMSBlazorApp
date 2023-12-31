﻿ 
    if (typeof listingInits === 'undefined') {
        var listingInits = [];
    }

    function postInitListingTable() {
        var datatableOptions = {
        userLanguageCulture: "en-GB",
    container: "#eviivo-list-promotion",
    identityColumnKey: "Id",
    additionalRowDataAttributes: null,
    paging: true,
    pageLength: 100,
    tableInfo: false,
    enableSearching: true,
    enableBulkSelect: true,
    enableSingleSelect: false,
    enableBulkDelete: false,
    enableEditButton: true,
    enableViewButton: false,
    deleteButtonTooltip: "",
    editButtonTooltip: "",
    editButtonFunc: null,
    viewButtonFunc: null,
    viewButtonTooltip: "",
    enableDeleteButton: true,
    enableDeleteConfirmPopup: true,
    enableResponsive: false,
    baseAjaxUrl: "/suite/api/promotion/promotions",
    data: JSON.parse(null),
    baseBrowserUrl: "https://on.eviivo.com/suite/promotion/",
    listingMode: true,
    columnsWithFilters: [],
    columnsWithMultiFilters: [0,1,2,3,6],
    filterPosition: {"Header":true,"Footer":false,"Custom":null},
    columns: [{"data":"Name","name":"Name","title":"Promotion","headerRowSpan":0,"headerColSpan":0,"titleComplexHeader":null,"className":"","HeaderCss":null,"sortable":true,"filterable":2,"visible":true,"searchable":true,"render":"","type":"Name","responsivePriority":1000,"Order":0},{"data":"Type","name":"Type","title":"Type","headerRowSpan":0,"headerColSpan":0,"titleComplexHeader":null,"className":null,"HeaderCss":null,"sortable":true,"filterable":2,"visible":true,"searchable":true,"render":"","type":"Type","responsivePriority":1000,"Order":0},{"data":"DiscountRules","name":"DiscountRules","title":"Discount","headerRowSpan":0,"headerColSpan":0,"titleComplexHeader":null,"className":"","HeaderCss":null,"sortable":true,"filterable":2,"visible":true,"searchable":true,"render":"eviivo.eagle.promotion.listing.htmlCustomRender","type":"DiscountRules","responsivePriority":1000,"Order":0},{"data":"BookingWindow","name":"BookingWindow","title":"Window","headerRowSpan":0,"headerColSpan":0,"titleComplexHeader":null,"className":"cp-table_text-center","HeaderCss":null,"sortable":true,"filterable":2,"visible":true,"searchable":true,"render":"","type":"BookingWindow","responsivePriority":1000,"Order":0},{"data":"StayDates","name":"StayDates","title":"Stay Dates","headerRowSpan":0,"headerColSpan":0,"titleComplexHeader":null,"className":"cp-table_text-center","HeaderCss":null,"sortable":true,"filterable":0,"visible":true,"searchable":true,"render":"eviivo.eagle.promotion.listing.htmlCustomRender","type":"StayDates","responsivePriority":1000,"Order":0},{"data":"RatePlans","name":"RatePlans","title":"Rate Plan","headerRowSpan":0,"headerColSpan":0,"titleComplexHeader":null,"className":"cp-table_text-center cp-table_white-space-nowrap","HeaderCss":null,"sortable":true,"filterable":0,"visible":true,"searchable":true,"render":"","type":"RatePlans","responsivePriority":1000,"Order":0},{"data":"Status","name":"Status","title":"Status","headerRowSpan":0,"headerColSpan":0,"titleComplexHeader":null,"className":null,"HeaderCss":null,"sortable":true,"filterable":2,"visible":true,"searchable":true,"render":"","type":"Status","responsivePriority":1000,"Order":0},{"data":"UpdateStatus","name":"UpdateStatus","title":"","headerRowSpan":0,"headerColSpan":0,"titleComplexHeader":null,"className":"update-status w32p","HeaderCss":null,"sortable":true,"filterable":0,"visible":true,"searchable":true,"render":"eviivo.pms.clone.statusFlyout.statusCustomRender","type":"UpdateStatus","responsivePriority":1000,"Order":0}],
    initComplete: eviivo.eagle.promotion.listing.dataLoadSuccess,
    rowSelectionCallback: eviivo.eagle.promotion.listing.rowSelectionCallback,
    responsiveRowExpandedCallback: null,
    createdRowCallback: eviivo.eagle.promotion.listing.onRowCreatedDataTable,
    footerCallback: null,
    filterOnBeforeCallback: eviivo.pms.listingTable.filterActions.get,
    filterOnApplyCallback: eviivo.pms.listingTable.filterActions.post,
    orderGetCallback: [],
    orderSetCallback: eviivo.pms.listingTable.orderActions.post,
    moveSearchInputIntoThisContainer: ".s-search-bar",
    ajaxType : "GET",
    ajaxDataCallback: eviivo.eagle.promotion.listing.ajaxDataCallback,
    ajaxDataFailureCallback: eviivo.eagle.promotion.listing.ajaxDataFailureCallback,
    deleteCallback: null,
    deleteFailureCallback: null,
    groupColumn: null,
    groupColumnCheckbox: false,
    groupColumnCollapse: false,
    fixedOrder:  null,
    enableRowReOrder: null,
    rowReOrderCallbacksPre: null,
    rowReOrderCallbacksPost: null,
    deleteAjaxDataCallback: eviivo.eagle.promotion.listing.deletePromotion,
    dom: "\u003c\u0027cp-table_toolbar\u0027 f \u003c\u0027cp-table_toolbar-actions\u0027\u003e\u003e\u003c\u0027cp-table_scroll-vertical cp-table_scroll-horizontal\u0027 t\u003e\u003c\u0027cp-table_footer\u0027lp\u003e",
    noOfItemsFilterShouldHaveToIncludeSearchInput: 0,
    displayDefaultSpinnerOnInitialLoad: true,
    lastColClasses: " cp-table_text-right cp-table_sticky-column-right actions-2 cp-table_sticky-column-right",
    lastColComplex: false,
    lastColHeader: "",
    language: {
        "decimal":        "",
    "emptyTable":     "There are no promos set up",
    "info":           "Show _START_ to _END_ of _TOTAL_ enteries",
    "infoEmpty":      "Showing 0 to 0 of 0 entries",
    "infoFiltered":   "(filtered from _MAX_ total entries)",
    "infoPostFix":    "",
    "thousands":      ",",
    "lengthMenu":     "Show _MENU_ entries",
    "loadingRecords": "Loading...",
    "processing":     "Processing...",
    "search":         "",
    "searchPlaceholder":"Filter",
    "zeroRecords":    "There are no promos matching the current filters",
    "paginate": {
        "first":      "First",
    "last":       "Last",
    "next":       "Next",
    "previous":   "Previous"
                },
    "aria": {
        "sortAscending":  ": activate to sort column ascending",
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

    listingInits.push(["#eviivo-list-promotion", postInitListingTable]);

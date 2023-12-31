﻿ 
    if (typeof listingInits === 'undefined') {
        var listingInits = [];
    }

    function postInitListingTable() {
        var datatableOptions = {
        userLanguageCulture: "en-GB",
    container: "#eviivo-list-rule",
    identityColumnKey: "TableId",
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
    baseAjaxUrl: "/suite/api/PricingRules/rule",
    data: JSON.parse(null),
    baseBrowserUrl: "https://on.eviivo.com/suite/rule/",
    listingMode: true,
    columnsWithFilters: [],
    columnsWithMultiFilters: [0,1,2,3,4],
    filterPosition: {"Header":true,"Footer":false,"Custom":null},
    columns: [{"data":"TypeCodeDescription","name":"TypeCodeDescription","title":"Rule type","headerRowSpan":0,"headerColSpan":0,"titleComplexHeader":null,"className":"code-desc","HeaderCss":null,"sortable":true,"filterable":2,"visible":true,"searchable":true,"render":"","type":"TypeCodeDescription","responsivePriority":1000,"Order":2},{"data":"Name","name":"Name","title":"Rule name","headerRowSpan":0,"headerColSpan":0,"titleComplexHeader":null,"className":"rule-name","HeaderCss":null,"sortable":true,"filterable":2,"visible":true,"searchable":true,"render":"eviivo.pms.pricingRules.listing.nameCustomerRender","type":"Name","responsivePriority":1000,"Order":3},{"data":"RoomTypeName","name":"RoomTypeName","title":"Applies to","headerRowSpan":0,"headerColSpan":0,"titleComplexHeader":null,"className":"room-type","HeaderCss":null,"sortable":true,"filterable":2,"visible":true,"searchable":true,"render":"","type":"RoomTypeName","responsivePriority":1000,"Order":4},{"data":"ChannelsFilter","name":"ChannelsFilter","title":"Channels","headerRowSpan":0,"headerColSpan":0,"titleComplexHeader":null,"className":"channel-name","HeaderCss":null,"sortable":true,"filterable":2,"visible":true,"searchable":true,"render":"eviivo.pms.pricingRules.listing.channelsCustomerRender","type":"ChannelsFilter","responsivePriority":1000,"Order":5},{"data":"Status","name":"Status","title":"Status","headerRowSpan":0,"headerColSpan":0,"titleComplexHeader":null,"className":"status","HeaderCss":null,"sortable":true,"filterable":2,"visible":true,"searchable":true,"render":"","type":"Status","responsivePriority":1000,"Order":6},{"data":"UpdateStatus","name":"UpdateStatus","title":"","headerRowSpan":0,"headerColSpan":0,"titleComplexHeader":null,"className":"update-status cp-table_text-center","HeaderCss":null,"sortable":true,"filterable":0,"visible":true,"searchable":true,"render":"eviivo.pms.clone.history.statusCustomRender","type":"UpdateStatus","responsivePriority":1000,"Order":7}],
    initComplete: eviivo.pms.pricingRules.listing.dataLoadSuccessCallback,
    rowSelectionCallback: eviivo.pms.pricingRules.listing.rowSelectionCallback,
    responsiveRowExpandedCallback: null,
    createdRowCallback: eviivo.pms.pricingRules.listing.rowCreatedCallback,
    footerCallback: null,
    filterOnBeforeCallback: eviivo.pms.listingTable.filterActions.get,
    filterOnApplyCallback: eviivo.pms.listingTable.filterActions.post,
    orderGetCallback: [],
    orderSetCallback: eviivo.pms.listingTable.orderActions.post,
    moveSearchInputIntoThisContainer: ".s-search-bar",
    ajaxType : "POST",
    ajaxDataCallback: null,
    ajaxDataFailureCallback: null,
    deleteCallback: null,
    deleteFailureCallback: null,
    groupColumn: null,
    groupColumnCheckbox: false,
    groupColumnCollapse: false,
    fixedOrder:  null,
    enableRowReOrder: null,
    rowReOrderCallbacksPre: null,
    rowReOrderCallbacksPost: null,
    deleteAjaxDataCallback: eviivo.pms.pricingRules.listing.deleteAjaxDataCallback,
    dom: "\u003c\u0027cp-table_toolbar\u0027 f \u003c\u0027cp-table_toolbar-actions\u0027\u003e\u003et\u003c\u0027cp-table_footer\u0027lp\u003e",
    noOfItemsFilterShouldHaveToIncludeSearchInput: 8,
    displayDefaultSpinnerOnInitialLoad: true,
    lastColClasses: " cp-table_text-right cp-table_sticky-column-right actions-2",
    lastColComplex: false,
    lastColHeader: "",
    language: {
        "decimal":        "",
    "emptyTable":     "No data available in table",
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
    "zeroRecords":    "No matching records found",
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

    listingInits.push(["#eviivo-list-rule", postInitListingTable]);

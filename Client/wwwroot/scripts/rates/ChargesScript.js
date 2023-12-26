
    if (typeof listingInits === 'undefined') {
        var listingInits = [];
    }

    function postInitListingTable() {
        var datatableOptions = {
        userLanguageCulture: "en-GB",
    container: "#eviivo-list-charge",
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
    baseAjaxUrl: "/suite/api/Charges/charge",
    data: JSON.parse(null),
    baseBrowserUrl: "https://on.eviivo.com/suite/charge/",
    listingMode: true,
    columnsWithFilters: [],
    columnsWithMultiFilters: [0,1,2,3],
    filterPosition: {"Header":true,"Footer":false,"Custom":null},
    columns: [{"data":"Name","name":"Name","title":"Charge","headerRowSpan":2,"headerColSpan":1,"titleComplexHeader":null,"className":"align-bottom","HeaderCss":null,"sortable":true,"filterable":2,"visible":true,"searchable":true,"render":null,"type":null,"responsivePriority":0,"Order":2},{"data":"CategoryName","name":"CategoryName","title":"Category","headerRowSpan":2,"headerColSpan":1,"titleComplexHeader":null,"className":"align-bottom","HeaderCss":null,"sortable":false,"filterable":2,"visible":true,"searchable":true,"render":null,"type":null,"responsivePriority":0,"Order":3},{"data":"DisplayOnline","name":"DisplayOnline","title":"Online Display","headerRowSpan":2,"headerColSpan":1,"titleComplexHeader":null,"className":"align-bottom","HeaderCss":null,"sortable":false,"filterable":2,"visible":true,"searchable":true,"render":null,"type":null,"responsivePriority":0,"Order":4},{"data":"CollectionMethodDisplay","name":"CollectionMethodDisplay","title":"Collection","headerRowSpan":2,"headerColSpan":1,"titleComplexHeader":null,"className":"align-bottom","HeaderCss":"collection","sortable":false,"filterable":2,"visible":true,"searchable":true,"render":null,"type":null,"responsivePriority":0,"Order":5},{"data":"ApplyToRatePlans","name":"ApplyToRatePlans","title":"Rates","headerRowSpan":1,"headerColSpan":2,"titleComplexHeader":"Charge applies to","className":"align-bottom","HeaderCss":"automation","sortable":false,"filterable":0,"visible":true,"searchable":true,"render":null,"type":null,"responsivePriority":0,"Order":6},{"data":"AddToBillForBookings","name":"AddToBillForBookings","title":"Channels","headerRowSpan":1,"headerColSpan":0,"titleComplexHeader":null,"className":"align-bottom text-left","HeaderCss":"","sortable":false,"filterable":0,"visible":true,"searchable":true,"render":null,"type":null,"responsivePriority":0,"Order":7},{"data":"PricingRulesDisplay","name":"PricingRulesDisplay","title":"Pricing","headerRowSpan":2,"headerColSpan":1,"titleComplexHeader":null,"className":"align-bottom","HeaderCss":null,"sortable":false,"filterable":0,"visible":true,"searchable":true,"render":null,"type":null,"responsivePriority":0,"Order":8},{"data":"UpdateStatus","name":"UpdateStatus","title":"","headerRowSpan":2,"headerColSpan":1,"titleComplexHeader":null,"className":"update-status cp-table_text-center","HeaderCss":null,"sortable":true,"filterable":0,"visible":true,"searchable":true,"render":"eviivo.pms.clone.statusFlyout.statusCustomRender","type":null,"responsivePriority":0,"Order":9}],
    initComplete: eviivo.pms.charges.chargelist.dataLoadSuccess,
    rowSelectionCallback: eviivo.pms.charge.bulkDelete.rowSelectionCallback,
    responsiveRowExpandedCallback: null,
    createdRowCallback: eviivo.pms.charges.chargelist.onRowCreatedDataTable,
    footerCallback: null,
    filterOnBeforeCallback: eviivo.pms.listingTable.filterActions.get,
    filterOnApplyCallback: eviivo.pms.listingTable.filterActions.post,
    orderGetCallback: [],
    orderSetCallback: eviivo.pms.listingTable.orderActions.post,
    moveSearchInputIntoThisContainer: ".s-search-bar",
    ajaxType : "POST",
    ajaxDataCallback: eviivo.eagle.chargeTemplates.listing.ajaxDataCallback,
    ajaxDataFailureCallback: eviivo.eagle.chargeTemplates.listing.ajaxDataFailureCallback,
    deleteCallback: null,
    deleteFailureCallback: null,
    groupColumn: null,
    groupColumnCheckbox: false,
    groupColumnCollapse: false,
    fixedOrder:  null,
    enableRowReOrder: null,
    rowReOrderCallbacksPre: null,
    rowReOrderCallbacksPost: null,
    deleteAjaxDataCallback: eviivo.pms.charge.delete.deleteCharge,
    dom: "\u003c\u0027cp-table_toolbar\u0027 f \u003c\u0027cp-table_toolbar-actions\u0027\u003e\u003e\u003c\u0027cp-table_scroll-vertical cp-table_scroll-horizontal\u0027 t\u003e\u003c\u0027cp-table_footer\u0027lp\u003e",
    noOfItemsFilterShouldHaveToIncludeSearchInput: 0,
    displayDefaultSpinnerOnInitialLoad: true,
    lastColClasses: " cp-table_text-right cp-table_sticky-column-right actions-2 cp-table_sticky-column-right",
    lastColComplex: false,
    lastColHeader: "",
    language: {
        "decimal":        "",
    "emptyTable":     "No charges currently exist, please add a new charge",
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
    "zeroRecords":    "No charges found matching your criteria, please check your filters",
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

    listingInits.push(["#eviivo-list-charge", postInitListingTable]);

componentCheckAddToCallbacks("eviivo.component.flyout.loadDependency", function () { eviivo.component.flyout.loadDependency(); });

 
    if (typeof listingInits === 'undefined') {
        var listingInits = [];
    }

    function postInitListingTable() {
        var datatableOptions = {
        userLanguageCulture: "en-GB",
    container: "#eviivo-list-categories",
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
    enableDeleteButton: true,
    enableDeleteConfirmPopup: true,
    enableResponsive: false,
    baseAjaxUrl: "/suite/api/charges/categories",
    data: JSON.parse(null),
    baseBrowserUrl: "https://on.eviivo.com/suite/categories/",
    listingMode: true,
    columnsWithFilters: [],
    columnsWithMultiFilters: [0,1],
    filterPosition: {"Header":true,"Footer":false,"Custom":null},
    columns: [{"data":"Category","name":"Category","title":"Category","headerRowSpan":0,"headerColSpan":0,"titleComplexHeader":null,"className":null,"HeaderCss":null,"sortable":true,"filterable":2,"visible":true,"searchable":true,"render":"","type":"Category","responsivePriority":1000,"Order":0},{"data":"Code","name":"Code","title":"Code","headerRowSpan":0,"headerColSpan":0,"titleComplexHeader":null,"className":null,"HeaderCss":null,"sortable":true,"filterable":2,"visible":true,"searchable":true,"render":"","type":"Code","responsivePriority":1000,"Order":0},{"data":"AssociatedTemplates","name":"AssociatedTemplates","title":"Associated templates","headerRowSpan":0,"headerColSpan":0,"titleComplexHeader":null,"className":null,"HeaderCss":null,"sortable":true,"filterable":0,"visible":true,"searchable":true,"render":"md-table_text-center","type":"AssociatedTemplates","responsivePriority":1000,"Order":0}],
    initComplete: null,
    rowSelectionCallback: null,
    responsiveRowExpandedCallback: null,
    createdRowCallback: eviivo.pms.charges.categoriesFlyout.onRowCreatedDataTable,
    footerCallback: null,
    filterOnBeforeCallback: eviivo.pms.listingTable.filterActions.get,
    filterOnApplyCallback: eviivo.pms.listingTable.filterActions.post,
    orderGetCallback: [],
    orderSetCallback: eviivo.pms.listingTable.orderActions.post,
    moveSearchInputIntoThisContainer: "",
    ajaxType : "POST",
    ajaxDataCallback: eviivo.pms.charges.categoriesFlyout.ajaxDataCallback,
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
    deleteAjaxDataCallback: eviivo.pms.charges.categoriesFlyout.deleteCategory,
    dom: "\u003c\u0027cp-table_toolbar\u0027 f \u003c\u0027cp-table_toolbar-actions\u0027\u003e\u003et\u003c\u0027cp-table_footer\u0027lp\u003e",
    noOfItemsFilterShouldHaveToIncludeSearchInput: 0,
    displayDefaultSpinnerOnInitialLoad: false,
    lastColClasses: " cp-table_text-right cp-table_sticky-column-right actions-2 cp-table_sticky-column-right",
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

    listingInits.push(["#eviivo-list-categories", postInitListingTable]);
componentCheckAddToCallbacks("eviivo.component.flyout.init", function () { eviivo.component.flyout.init({}); });
componentCheckAddToCallbacks("eviivo.component.flyout.loadDependency", function () { eviivo.component.flyout.loadDependency(); });
if (typeof lookupInits === 'undefined') {
    var lookupInits = [];
}

function postInitLookup() {
    var datatableOptions = {
        userLanguageCulture: "en-GB",
        id: "#eviivo-lookup-property-create-category",
        baseAjaxUrl: "/suite/api/charges/property",
        data: JSON.parse(null),
        baseBrowserUrl: "https://on.eviivo.com/suite/property-create-category/",
        initComplete: null,
        rowSelectionCallback: eviivo.pms.charges.categoryManageFlyout.lookupRowSelection,
        rowCustomRender: eviivo.pms.charge.newCharge.flyout.lookupCustomRender,
        onlyAppearOnUserInput: "False",
        displayFooterInfo: "True",
        ajaxType: "GET",
        ajaxDataCallback: null,
        ajaxDataFailureCallback: null,
        resources: {
            result: "result",
            resultPlural: "results",
            noResult: "No results found.",
            move: "Move",
            select: "Select",
        }
    }

    eviivo.component.lookup.initLookup(null, datatableOptions);
}

lookupInits.push(["#eviivo-lookup-property-create-category", postInitLookup]);
componentCheckAddToCallbacks("eviivo.component.button.createButtons", function () { eviivo.component.button.createButtons({ "ShouldShow": null, "IsReadOnly": null, "Order": 0, "Name": null, "Id": null, "Text": "Cancel", "Tooltip": null, "Title": "", "Icon": null, "ClassList": "s-cancel s-close btn btn-secondary", "Type": null, "Disabled": false, "Claim": null, "Href": null, "Spinner": false, "Handlers": null, "AssignHandlers": true }) });
componentCheckAddToCallbacks("eviivo.component.button.createButtons", function () { eviivo.component.button.createButtons({ "ShouldShow": null, "IsReadOnly": null, "Order": 99, "Name": null, "Id": "categoryManage_flyoutSave", "Text": "Save", "Tooltip": null, "Title": "", "Icon": null, "ClassList": "s-save btn btn-right", "Type": null, "Disabled": false, "Claim": null, "Href": null, "Spinner": false, "Handlers": null, "AssignHandlers": true }) });
componentCheckAddToCallbacks("eviivo.component.flyout.init", function () { eviivo.component.flyout.init({}); });
componentCheckAddToCallbacks("eviivo.component.button.createButtons", function () { eviivo.component.button.createButtons({ "ShouldShow": null, "IsReadOnly": null, "Order": 0, "Name": null, "Id": null, "Text": "Close", "Tooltip": null, "Title": "", "Icon": null, "ClassList": "s-cancel s-close btn btn-secondary", "Type": null, "Disabled": false, "Claim": null, "Href": null, "Spinner": false, "Handlers": null, "AssignHandlers": true }) });
  componentCheckAddToCallbacks("eviivo.component.flyout.loadDependency", function () {eviivo.component.flyout.loadDependency(); });
componentCheckAddToCallbacks("eviivo.component.flyout.init", function () { eviivo.component.flyout.init({}); });
  componentCheckAddToCallbacks("eviivo.component.flyout.loadDependency", function () {eviivo.component.flyout.loadDependency(); });
if (typeof lookupInits === 'undefined') {
    var lookupInits = [];
}

function postInitLookup() {
    var datatableOptions = {
        userLanguageCulture: "en-GB",
        id: "#eviivo-lookup-property-create-rule-flow",
        baseAjaxUrl: "/suite/api/charges/property",
        data: JSON.parse(null),
        baseBrowserUrl: "https://on.eviivo.com/suite/property-create-rule-flow/",
        initComplete: eviivo.pms.charge.newCharge.flyout.lookupInitComplete,
        rowSelectionCallback: eviivo.pms.charge.newCharge.flyout.lookupRowSelection,
        rowCustomRender: eviivo.pms.charge.newCharge.flyout.lookupCustomRender,
        onlyAppearOnUserInput: "False",
        displayFooterInfo: "True",
        ajaxType: "GET",
        ajaxDataCallback: null,
        ajaxDataFailureCallback: null,
        resources: {
            result: "result",
            resultPlural: "results",
            noResult: "No results found.",
            move: "Move",
            select: "Select",
        }
    }

    eviivo.component.lookup.initLookup(null, datatableOptions);
}

lookupInits.push(["#eviivo-lookup-property-create-rule-flow", postInitLookup]);
componentCheckAddToCallbacks("eviivo.component.button.createButtons", function () { eviivo.component.button.createButtons({ "ShouldShow": null, "IsReadOnly": null, "Order": 0, "Name": null, "Id": null, "Text": "Cancel", "Tooltip": null, "Title": "", "Icon": null, "ClassList": "s-cancel s-close btn btn-secondary", "Type": null, "Disabled": false, "Claim": null, "Href": null, "Spinner": false, "Handlers": null, "AssignHandlers": true }) });
componentCheckAddToCallbacks("eviivo.component.button.createButtons", function () { eviivo.component.button.createButtons({ "ShouldShow": null, "IsReadOnly": null, "Order": 99, "Name": null, "Id": "addNewChargeFlyout_flyoutSave", "Text": "Next", "Tooltip": null, "Title": "", "Icon": null, "ClassList": "s-save btn btn-right", "Type": null, "Disabled": false, "Claim": null, "Href": null, "Spinner": false, "Handlers": null, "AssignHandlers": true }) });
componentCheckAddToCallbacks("eviivo.component.flyout.init", function () { eviivo.component.flyout.init({}); });

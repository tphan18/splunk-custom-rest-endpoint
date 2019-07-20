require([
    "splunkjs/mvc",
    "splunkjs/mvc/utils",
    "splunkjs/mvc/tokenutils",
    "underscore",
    "jquery",
    "splunkjs/mvc/simplexml",
    "splunkjs/mvc/layoutview",
    "splunkjs/mvc/simplexml/dashboardview",

    // Add comma-separated libraries and modules manually here, for example:
    // ..."splunkjs/mvc/simplexml/urltokenmodel",
    // "splunkjs/mvc/tokenforwarder"
],
    function (
        mvc,
        utils,
        TokenUtils,
        _,
        $,
        DashboardController,
        LayoutView,
    ) {
        //
        // SPLUNK LAYOUT
        //
        pageLoading = true
        $('header').remove();
        new LayoutView({ "hideSplunkBar": false, "hideAppBar": false, "hideChrome": false })
            .render()
            .getContainerElement()
            .appendChild($('.dashboard-body')[0]);

        DashboardController.ready()
        pageLoading = false
    }
);
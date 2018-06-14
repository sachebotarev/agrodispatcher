sap.ui.jsview("mobui.agrodispatcher.view.RouteList", {

	getControllerName: function() {
		'use strict'
		return "mobui.agrodispatcher.controller.RouteList";
	},

	createContent: function(oController) {
		
        var oRouteListTemplates = new sap.m.ObjectListItem({
        	title: "{Name}"
        });

        var oRouteList = new sap.m.List({
            items: {
                path: '/Routes',
                template: oRouteListTemplates
            },
            mode: "{= ${device>/system/phone} ? 'None' : 'SingleSelectMaster' }" ,
            select:[oController.onSelect, oController],
            swipe:[oController.onSwipe, oController],
            updateFinished:[oController.onUpdateFinished, oController]
        });

		var page = new sap.m.Page({
			title: "Route List",
			content: [oRouteList]
		});
		return page;
	}

});
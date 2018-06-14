sap.ui.jsview("mobui.agrodispatcher.view.CapacityList", {

	getControllerName: function() {
		'use strict'
		return "mobui.agrodispatcher.controller.CapacityList";
	},

	createContent: function(oController) {
		
        var oRouteListTemplates = new sap.m.ObjectListItem({
        	title: "{Name}"
        });

        var oRouteList = new sap.m.List({
            items: {
                path: '/CapacitySet',
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
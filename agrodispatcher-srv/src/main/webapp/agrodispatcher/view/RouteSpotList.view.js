sap.ui.jsview("mobui.agrodispatcher.view.RouteSpotList", {

	getControllerName: function() {
		'use strict'
		return "mobui.agrodispatcher.controller.RouteSpotList";
	},

	createContent: function(oController) {
		
        var oRouteSpotListTemplates = new sap.m.ObjectListItem({
        	title: "{Name}",
        	intro:"{Description}"
//        	attributes:[
//        		new sap.m.ObjectAttribute({
//        			text: "Work {StartHour}:{StartMinute} - {FinishHour}:{FinishMinute}"
//        		}),
//        		new sap.m.ObjectAttribute({
//        			text: "Break {BreakStartHour}:{BreakStartMinute} - {BreakFinishHour}:{BreakFinishMinute}"
//        		})
//        	]
        });

        var oRouteSpotList = new sap.m.List({
        	mode: "{= ${device>/system/phone} ? 'None' : 'SingleSelectMaster' }" ,
        	headerToolbar: new sap.m.Toolbar({
        		content: [ new sap.m.SearchField({
        			search: [oController.onFilterRouteSpot, oController]
        		})]
        	}),
            items: {
                path: '/RouteSpotSet',
                template: oRouteSpotListTemplates
            },
            select:[oController.onSelectRouteSpot, oController]
        });
        
        var body  =  new sap.m.VBox({
			fitContainer: true,
			items:  [ oRouteSpotList ]
		});
        
		var page = new sap.m.Page({
			showHeader: false,
			enableScrolling: false,
			content: [ body ],
			footer: new sap.m.Toolbar({
				content:[
					new sap.m.Button({
						icon: "sap-icon://add",
					    type: sap.m.ButtonType.Emphasized}),
					new sap.m.ToolbarSpacer(),
					new sap.m.Button({
						icon: "sap-icon://filter"
					}),
				]
			})
		});
		return page;
	}

});
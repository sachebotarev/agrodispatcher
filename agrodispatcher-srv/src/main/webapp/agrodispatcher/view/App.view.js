sap.ui.jsview("mobui.agrodispatcher.view.App", {

	getControllerName: function() {
		'use strict'
		return "mobui.agrodispatcher.controller.App";
	},

	createContent: function(oController) {
		'use strict';
		var header = new sap.tnt.ToolHeader({
			content: [
				new sap.m.Button({
					icon: "sap-icon://home",
					type: sap.m.ButtonType.Transparent,
					press: [oController.goToHome,oController]
				}),
				new sap.m.MenuButton({
					text: "Master Data",
					icon:"sap-icon://machine",
					menu: sap.m.Menu({
						items:[
							new sap.m.MenuItem({
								text:"Capacity", 
								//type: sap.m.ButtonType.Transparent,
								press: [oController.goToCapasity,oController]
							}),
							new sap.m.MenuItem({
								text:"Route Spot", 
								//type: sap.m.ButtonType.Transparent,
								press: [oController.goToRouteSpot,oController]
							}),
							new sap.m.MenuItem({
								text:"Route", 
								//type: sap.m.ButtonType.Transparent,
								press: [oController.goToRoute,oController]
							}),
						]
					})
				}),
				new sap.m.Button({ 
					icon: "sap-icon://customer-order-entry",
					text:"Orders",
					type: sap.m.ButtonType.Transparent
					}),
				new sap.m.Button({text:"Reports", type: sap.m.ButtonType.Transparent}),
			]
		});
		
		var body  =  new sap.m.VBox({
			fitContainer: true,
			items: [
				new sap.m.SplitApp(this.createId("appId"), {
				mode: sap.m.SplitAppMode.HideMode
			})]
		});
		
		var oFullPageContent  =  new sap.m.VBox({
			fitContainer: true,
			items: [
				header,
				body]
		});
		
		var page = new sap.m.Page({
			enableScrolling: false,
			showHeader:  false,
			content: [oFullPageContent]
		});
		return page;
	}

});
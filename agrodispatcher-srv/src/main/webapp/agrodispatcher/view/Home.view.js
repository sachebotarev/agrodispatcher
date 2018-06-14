sap.ui.jsview("mobui.agrodispatcher.view.Home", {

	getControllerName: function() {
		'use strict'
		return "mobui.agrodispatcher.controller.Home";
	},

	createContent: function(oController) {
		
		var tileContainer = new sap.m.Panel({
			width: "100%",
			height: "100%",
			content: [
				new sap.m.GenericTile({
					header: "Hello",
					tileContent: []
				}),
				new sap.m.GenericTile({
					header: "Test",
					tileContent: []
				})
			]
		});
		var page = new sap.m.Page({
			showHeader: false,
			content: [ tileContainer ]
		});
		return page;
	}

});
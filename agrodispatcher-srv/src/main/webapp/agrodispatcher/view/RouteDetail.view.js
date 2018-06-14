sap.ui.jsview("mobui.agrodispatcher.view.RouteDetail", {

	getControllerName: function() {
		'use strict'
		return "mobui.agrodispatcher.controller.RouteDetail";
	},

	createContent: function(oController) {

		var page = new sap.m.Page({
			title: "{Name}",
		});
		return page;
	}

});
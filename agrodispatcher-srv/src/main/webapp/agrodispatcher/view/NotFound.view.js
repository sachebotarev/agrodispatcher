sap.ui.jsview("mobui.agrodispatcher.view.NotFound", {

	getControllerName: function() {
		'use strict'
		return "mobui.agrodispatcher.controller.NotFound";
	},

	createContent: function(oController) {
		
		return new sap.m.MessagePage({
			title: "Текст",
			text: "Выбирите элемент для простморв"
		});
	}

});
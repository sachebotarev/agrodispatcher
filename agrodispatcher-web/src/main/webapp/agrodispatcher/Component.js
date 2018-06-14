
sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device",
	"mobui/agrodispatcher/Router",
], function(UIComponent, JSONModel, Device,Router) {
	"use strict";

	return UIComponent.extend("mobui.agrodispatcher.Component", {

		metadata: {
			manifest: "json"
		},

		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			// set the device model
			this.setModel(new JSONModel(Device), "device");
			this.getRouter().initialize();

		}
	});
});
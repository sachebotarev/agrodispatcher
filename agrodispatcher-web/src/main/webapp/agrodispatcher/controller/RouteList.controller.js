sap.ui.define([
	"mobui/agrodispatcher/controller/Base.controller"
], function(BaseContraller) {
	"use strict";

	return BaseContraller.extend("mobui.agrodispatcher.controller.Routelist", {

		onSelect: function(oEvent){
			var oListItem = oEvent.getParameter("listItem") || oEvent.getSource();
			var key = oListItem.getBindingContext().getProperty("Id");
			this.getRouter().navTo("route_id", {"route_id": key}, true);
		}
	})
})
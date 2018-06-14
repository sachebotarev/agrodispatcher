sap.ui.define([
	"mobui/agrodispatcher/controller/Base.controller"
], function(BaseContraller) {
	"use strict";

	return BaseContraller.extend("mobui.agrodispatcher.controller.RouteSpotList", {

		onSelectRouteSpot: function(oEvent){
			
			var oListItem = oEvent.getParameter("listItem") || oEvent.getSource();
			var key = oListItem.getBindingContext().getProperty("Id");
			this.getRouter().navTo("route_spot_id", {"route_spot_id": key}, true);
		}
	})
})
sap.ui.define([
	"mobui/agrodispatcher/controller/Base.controller"
], function(BaseContraller) {
	"use strict";

	return BaseContraller.extend("mobui.agrodispatcher.controller.RouteDetail", {
		onInit: function(){
			this.getRouter().attachRoutePatternMatched(this._handleRouteMatched, this);
		},
		
		_handleRouteMatched: function(oEvent){
			var oView = this.getView();
			var routeKey = oEvent.getParameter("route_id") || oEvent.getParameters().arguments["route_id"];
			if(routeKey){
				oView.bindElement({
					path: "/Routes('"+ routeKey + "')"
				})
			}
		}
	})
})
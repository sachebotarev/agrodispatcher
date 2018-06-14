sap.ui.define([
	"mobui/agrodispatcher/controller/Base.controller"
], function(BaseContraller) {
	"use strict";

	return BaseContraller.extend("mobui.agrodispatcher.controller.App", {


		onInit: function() {
			this._oApp = this.byId("appId");
			this.getRouter().attachRoutePatternMatched(this._handleRouteMatched, this);
		},
		_handleRouteMatched:function(evt){
			if("home" === evt.getParameter("name") || 
			   !evt.getParameter("name"))
			{
				this._oApp.setMode(sap.m.SplitAppMode.HideMode);
			}else{
				this._oApp.setMode(sap.m.SplitAppMode.ShowHideMode);

			}
		},


		goToRoute: function(event){
			this.getRouter().navTo("route",{}, true);
		},

		goToHome: function(event){
			this.getRouter().navTo("home",{}, true);
		},
		
		goToRouteSpot: function(event){
			this.getRouter().navTo("route_spot",{route_spot_id: "first"}, true);
		}
	})
})
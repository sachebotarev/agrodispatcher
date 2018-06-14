sap.ui.jsview("mobui.agrodispatcher.view.RouteSpotDetail", {

	getControllerName: function() {
		'use strict'
		return "mobui.agrodispatcher.controller.RouteSpotDetail";
	},

	createContent: function(oController) {
   
  		var oIconTabFilterMainData =  new sap.m.IconTabFilter({
  			text: "{i18n>ROUTE_SPOT_DETAIL_TAB_MAIN_DATA}",
  			content:[
  				new sap.m.ScrollContainer({
  					height:"100%",
  					width:"100%",
  					horizontal:false,
  					vertical:true,
  					content:[
  						sap.ui.jsfragment("mobui.agrodispatcher.fragment.RouteSpotDetail.MainData", oController)		
  					]
  				})
				
			]
		})
  		

  		var oIconTabFilterMap =  new sap.m.IconTabFilter({
  			text: "{i18n>ROUTE_SPOT_DETAIL_TAB_MAP}",
  			content:[
  				sap.ui.jsfragment("mobui.agrodispatcher.fragment.RouteSpotDetail.Map", oController)
			]
		});
		
  		var oIconTabFilterCapacities =  new sap.m.IconTabFilter({
  			text: "{i18n>ROUTE_SPOT_DETAIL_TAB_CAPACITIES}",
  			content:[
  				sap.ui.jsfragment("mobui.agrodispatcher.fragment.RouteSpotDetail.Capacities", oController)
			]
		});
  		
  		
  		var oIconTabFilterResponse =  new sap.m.IconTabFilter({
  			text: "{i18n>ROUTE_SPOT_DETAIL_TAB_RESPONSE}",
  			content:[
  				
			]
		});
  		
  		var oIconTabFilterControlData =  new sap.m.IconTabFilter({
  			text: "{i18n>ROUTE_SPOT_DETAIL_TAB_CONTROL}",
  			content:[
  				sap.ui.jsfragment("mobui.agrodispatcher.fragment.RouteSpotDetail.ControlData", oController)
			]
		});
		
		var oIconTabBar =  new sap.m.IconTabBar({
			stretchContentHeight: true,
			items: [
				oIconTabFilterMainData,
				oIconTabFilterControlData,
				oIconTabFilterResponse,
				oIconTabFilterMap,
				oIconTabFilterCapacities
			]
		});

		var page = new sap.m.Page({
			title: "{Name}",
			enableScrolling: false,
			content: [oIconTabBar],
			footer: new sap.m.Toolbar({
				content:[
					new sap.m.ToolbarSpacer(),
					new sap.m.Button({icon:"sap-icon://edit"})
				]
			})
		});
		return page;
	}

});
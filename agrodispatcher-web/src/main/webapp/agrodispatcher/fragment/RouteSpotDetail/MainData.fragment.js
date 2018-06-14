sap.ui.jsfragment("mobui.agrodispatcher.fragment.RouteSpotDetail.MainData",{
    createContent: function(oController){
    	
    	var oNaneAndGeoBlock =  new sap.ui.layout.form.SimpleForm({
			editable:false,
			layout:sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
			labelSpanXL:4,
			labelSpanL:4,
			labelSpanM:12,
			labelSpanS:12,
			adjustLabelSpan:false,
			emptySpanXL:0,
			emptySpanL:0,
			emptySpanM:0,
			emptySpanS:0,
			columnsXL:2,
			columnsL:2,
			columnsM:2,
			columnsS:1,
			singleContainerFullSize:false,
			content:[
				new sap.ui.core.Title({text:"Name"}),
				new sap.m.Label({text:"Name"}),
				new sap.m.Text({text:"{Name}"}),
				new sap.m.Label({text:"Description"}),
				new sap.m.Text({text:"{Description}"}),
				
				new sap.ui.core.Title({text:"GEO"}),
				new sap.m.Label({text:"Latitude"}),
				new sap.m.Text({text:"{Latitude}"}),
				new sap.m.Label({text:"Longitude"}),
				new sap.m.Text({text:"{Longitude}"}),
				
				new sap.ui.core.Title({text:"Address"}),
				new sap.m.Label({text:"Latitude"}),
				new sap.m.Text({text:"{Latitude}"}),
				new sap.m.Label({text:"Longitude"}),
				new sap.m.Text({text:"{Longitude}"}),
				
				new sap.ui.core.Title({text:"Contact"}),
				new sap.m.Label({text:"Email"}),
				new sap.m.Text({text:"{Contact/Email}"}),
				new sap.m.Label({text:"Phone"}),
				new sap.m.Text({text:"{Longitude}"}),
				new sap.m.Label({text:"Mobile"}),
				new sap.m.Text({text:"{Longitude}"}),
				new sap.m.Label({text:"Fax"}),
				new sap.m.Text({text:"{Longitude}"})
			]
	});
    	
    	return new sap.m.VBox({
    		items:[
    			oNaneAndGeoBlock
    		]
    	})

    }
})
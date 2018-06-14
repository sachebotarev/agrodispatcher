sap.ui.jsfragment("mobui.agrodispatcher.fragment.RouteSpotDetail.ControlData",{
    createContent: function(oController){

    	var oTypeBlock =  new sap.ui.layout.form.SimpleForm({
			editable:true,
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
	
				new sap.ui.core.Title({text:"Type"}),
				new sap.m.Label({text:"Loading Point"}),
				new sap.m.Switch({state:"{LoadingPoint}", enabled: false}),
				new sap.m.Label({text:"Unloading Point"}),
				new sap.m.Switch({state:"{UnloadingPoint}", enabled: false}),
				new sap.m.Label({text:"Middle Point"}),
				new sap.m.Switch({state:"{MiddlePoint}", enabled: false})

			]
	});	
    	return new sap.m.VBox({
    		items:[
    			oTypeBlock
    		]
    	})

    }
})
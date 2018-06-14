sap.ui.jsfragment("mobui.agrodispatcher.fragment.RouteSpotDetail.Capacities",{
    createContent: function(oController){
    	var oTable = new sap.m.Table({
    		columns:[
    			new sap.m.Column({header: new sap.m.Text({text:"Hello1"})}),
    			new sap.m.Column({header: new sap.m.Text({text:"Hello2"})}),
    			new sap.m.Column({header: new sap.m.Text({text:"Hello3"})}),
    		],
    	});
    	return oTable;
    }
})
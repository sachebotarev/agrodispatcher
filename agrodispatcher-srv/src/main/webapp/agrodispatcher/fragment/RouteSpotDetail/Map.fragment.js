sap.ui
		.jsfragment(
				"mobui.agrodispatcher.fragment.RouteSpotDetail.Map",
				{
					createContent : function(oController) {
						var oMapConfig = {
							"MapProvider" : [ {
								"name" : "OSM",
								"type" : "",
								"description" : "",
								"tileX" : "256",
								"tileY" : "256",
								"maxLOD" : "20",
								"copyright" : "Tiles Courtesy of OpenMapTiles",
								"Source" : [ {
									"id" : "s1",
									"url" : "https://a.tile.openstreetmap.org/{LOD}/{X}/{Y}.png"
								} ]
							} ],
							"MapLayerStacks" : [ {
								"name" : "Default",
								"MapLayer" : [ {
									"name" : "OSM",
									"refMapProvider" : "OSM"
								} ]
							} ]
						};

						var geoMap = new sap.ui.vbm.GeoMap({
							height : "450px",
							initialPosition : "{Longitude};{Latitude};0",
							initialZoom : 10,
							vos : [ new sap.ui.vbm.Spots({
								items : [ new sap.ui.vbm.Spot({
									type : "Error",
									text : "{Name}",
									position : "{Longitude};{Latitude};0"
								}) ]
							}) ]
						});
						geoMap.setMapConfiguration(oMapConfig);
						
						return new sap.m.VBox({
							fitContainer: true,
							items: [
								geoMap ]
						});

					}
				})
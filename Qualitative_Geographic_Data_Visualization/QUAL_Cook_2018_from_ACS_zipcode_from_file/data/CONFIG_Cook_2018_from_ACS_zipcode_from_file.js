// Define the number of maps and some configuration parameters that you want to visualize.
var SubjectName = "NEIGHBORHOOD";
var InitialLayers = ["1980", "2000", "2010"];

/* Map Extent and Zoom level will be automatically adjusted when you do not define map center and zoom level */
//var Initial_map_center = [34.0522, -117.9];  
//var Initial_map_zoom_level = 8;   

var Maps_of_neighborhood = true;							//choropleth map: Maps representing clustering result  
var Temporal_change_in_neighborhoods = false;				//stacked chart: Temporal Change in Neighborhoods over years
var Parallel_Categories_Diagram_in_neighborhoods = false;	//parallel categories diagram
var Chord_Diagram_in_neighborhoods = true;					//chord diagram
  

var Num_Of_Decimal_Places = 2;                             // default = 2

var Map_width  = "400px";                                  // min 350px
var Map_height = "400px";                                  // min 300px
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: -28.024, lng: 140.887 },
  });
  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
const locations = [
{ lat: Aaron, lng: 49.758123},
{ lat: Algonquin, lng: 45.442046},
{ lat: Arrow Lake, lng: 48.17812017},
{ lat: Arrowhead, lng: 45.3915},
{ lat: Awenda, lng: 44.843699},
{ lat: Balsam Lake, lng: 44.62555},
{ lat: Bass Lake, lng: 44.601},
{ lat: Batchawana, lng: 46.944168},
{ lat: Biscotasi Lake, lng: 47.352455},
{ lat: Blue Lake, lng: 49.904122},
{ lat: Bon Echo, lng: 44.8972},
{ lat: Bonnechere, lng: 45.65729},
{ lat: Bronte Creek, lng: 43.40684},
{ lat: Caliper Lake, lng: 49.068974},
{ lat: Charleston Lake, lng: 44.50176},
{ lat: Chutes, lng: 46.217628},
{ lat: Craigleith, lng: 44.53622},
{ lat: Darlington, lng: 43.8755},
{ lat: Driftwood, lng: 46.18},
{ lat: Earl Rowe, lng: 44.150159},
{ lat: Emily, lng: 44.340451},
{ lat: Esker Lakes, lng: 48.281932},
{ lat: Fairbank, lng: 46.47},
{ lat: Ferris, lng: 44.2908},
{ lat: Finlayson Point, lng: 47.054987},
{ lat: Fitzroy, lng: 45.482113},
{ lat: Forks of the Credit, lng: 43.81636964},
{ lat: French River, lng: 46.018035},
{ lat: Frontenac, lng: 44.504167},
{ lat: Fushimi Lake, lng: 49.838087},
{ lat: Grundy Lake, lng: 45.91768},
{ lat: Halfway Lake, lng: 46.91},
{ lat: Inverhuron, lng: 44.30039235},
{ lat: Ivanhoe Lake, lng: 48.152309},
{ lat: John E. Pearce, lng: 42.605},
{ lat: Kakabeka Falls, lng: 48.404476},
{ lat: Kap-Kig-Iwan, lng: 47.8011908},
{ lat: Kawartha Highlands, lng: 45.05499},
{ lat: Kettle Lakes, lng: 48.572301},
{ lat: Killarney, lng: 46.012567},
{ lat: Killbear, lng: 45.35886},
{ lat: Komoka, lng: 42.95044912},
{ lat: Lady Evelyn-Smoothwater, lng: 47.386069},
{ lat: Lake St. Peter, lng: 45.319828},
{ lat: Lake Superior, lng: 47.722989},
{ lat: Lake on the Mountain, lng: 44.039956},
{ lat: Long Point, lng: 42.5834},
{ lat: MacGregor Point, lng: 44.408899},
{ lat: MacLeod, lng: 49.690468},
{ lat: Makobe-Grays River, lng: 47.597126},
{ lat: Mara, lng: 44.586034},
{ lat: Mark S. Burnham, lng: 44.296983},
{ lat: Marten River, lng: 46.733831},
{ lat: McRae Point, lng: 44.569},
{ lat: Mikisew, lng: 45.821413},
{ lat: Misery Bay, lng: 45.800503},
{ lat: Missinaibi, lng: 48.404334},
{ lat: Mississagi, lng: 46.57873},
{ lat: Mono Cliffs, lng: 44.0477951},
{ lat: Murphys Point, lng: 44.78201781},
{ lat: Nagagamisis, lng: 49.456218},
{ lat: Neys, lng: 48.78764},
{ lat: North Beach, lng: 43.953448},
{ lat: Oastler Lake, lng: 45.309631},
{ lat: Obabika River, lng: 47.14062},
{ lat: Ojibway, lng: 49.973826},
{ lat: Ouimet Canyon, lng: 48.766486},
{ lat: Oxtongue River-Ragged Falls, lng: 45.40646576},
{ lat: Pakwash, lng: 50.766486},
{ lat: Pancake Bay, lng: 46.969783},
{ lat: Petroglyphs, lng: 44.621922},
{ lat: Pigeon River, lng: 48.003692},
{ lat: Point Farms, lng: 43.8052},
{ lat: Port Bruce, lng: 42.65499},
{ lat: Port Burwell, lng: 42.646896},
{ lat: Potholes, lng: 47.958493},
{ lat: Presqu'ile, lng: 44.0101},
{ lat: Quetico, lng: 48.675},
{ lat: Rainbow Falls, lng: 48.839408},
{ lat: René Brunelle, lng: 49.417357},
{ lat: Restoule, lng: 46.06529},
{ lat: Rideau River, lng: 45.059854},
{ lat: Rock Point, lng: 42.8568061},
{ lat: Rondeau, lng: 42.324081},
{ lat: Rushing River, lng: 49.6816},
{ lat: Samuel de Champlain, lng: 46.29},
{ lat: Sandbanks, lng: 43.91122},
{ lat: Sandbar Lake, lng: 49.467516},
{ lat: Sauble Falls, lng: 44.6734319},
{ lat: Selkirk, lng: 42.815804},
{ lat: Sharbot Lake, lng: 44.764794},
{ lat: Sibbald Point, lng: 44.3217},
{ lat: Silent Lake, lng: 44.92306},
{ lat: Silver Falls, lng: 48.68388629},
{ lat: Silver Lake, lng: 44.82982},
{ lat: Sioux Narrows, lng: 49.429325},
{ lat: Six Mile Lake, lng: 44.88824},
{ lat: Sleeping Giant, lng: 48.50637},
{ lat: Solace, lng: 47.197998},
{ lat: Spanish River, lng: 46.411881},
{ lat: Springwater, lng: 44.441793},
{ lat: Sturgeon Bay, lng: 45.62355},
{ lat: Sturgeon River, lng: 46.720316},
{ lat: The Massasauga, lng: 45.16050292},
{ lat: Pinery, lng: 43.24841},
{ lat: Tidewater, lng: 51.22},
{ lat: Turkey Point, lng: 42.700398},
{ lat: Voyageur, lng: 45.55561},
{ lat: Wabakimi, lng: 50.59},
{ lat: Wakami Lake, lng: 47.33304},
{ lat: Wasaga Beach, lng: 44.4985},
{ lat: Wheatley, lng: 42.090666},
{ lat: White Lake, lng: 48.713534},
{ lat: Windy Lake, lng: 46.622078},
{ lat: Woodland Caribou, lng: 51.104}
];

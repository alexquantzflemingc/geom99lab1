/*
This code is referenced from https://googlemaps.github.io/js-samples/
The first section provides wildlife observations using icon images described in a legend. The second code identifies a polygon of the visited region of Ken Reid.
*/
let map: google.maps.Map;

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    zoom: 15,
    center: new google.maps.LatLng(44.412113, -78.765425),
    mapTypeId: "satellite",
  });

// Using Map pics folder and images to define icons in the legend and map.
  const iconBase = "https://alexquantzflemingc.github.io/geom99lab1/story/MapPics/";
  const icons: Record<string, any> = {
    birds: {
      name: "Black-capped chickadee",
      icon: iconBase + "chickadee.PNG",
    },
    squirrels: {
      name: "Red Squirrel",
      icon: iconBase + "RedSquirrel.PNG",
    },
    both: {
      name: "Birds & Squirrels",
      icon: iconBase + "C&S.PNG",
    },
  };

// Assigning icons to points on map to represent observations:
  const features = [
    {
      position: new google.maps.LatLng(44.410488, -78.763666),
      type: "birds",
    },
    {
      position: new google.maps.LatLng(44.409362, -78.765932),
      type: "birds",
    },
    {
      position: new google.maps.LatLng(44.415388, -78.761265),
      type: "both",
    },
    {
      position: new google.maps.LatLng(44.416690, -78.760407),
      type: "squirrels",
    },
    {
      position: new google.maps.LatLng(44.411577, -78.765468),
      type: "birds",
    },
    {
      position: new google.maps.LatLng(44.410032, -78.762995),
      type: "squirrels",
    },
  ];

  features.forEach((feature) => {
    new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map,
    });
  });

  const legend = document.getElementById("legend") as HTMLElement;

  for (const key in icons) {
    const type = icons[key];
    const name = type.name;
    const icon = type.icon;
    const div = document.createElement("div");

    div.innerHTML = '<img src="' + icon + '"> ' + name;
    legend.appendChild(div);
  }

  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
}

// Defining points of polygon showing area of Ken Reid visited.
  const kenReid = [
    { lat: 44.416688, lng: -78.759696 },
    { lat: 44.417516, lng: -78.760554 },
    { lat: 44.410190, lng: -78.770597 },
    { lat: 44.408258, lng: -78.763129 },
  ];

  // Defining polygon features.
  const kenReid = new google.maps.Polygon({
    paths: kenReid,
    strokeColor: "#DCDCDC",
    strokeOpacity: 0.5,
    strokeWeight: 1,
    fillColor: "#DCDCDC",
    fillOpacity: 0.1,
  });

  kenReid.setMap(map);
}
declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};

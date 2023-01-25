/*
This code is referenced from https://googlemaps.github.io/js-samples/
*/
let map: google.maps.Map;

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    zoom: 15,
    center: new google.maps.LatLng(44.412113, -78.765425),
    mapTypeId: "satellite",
  });

// Using Map pics folder and images to define icons in the legend and map:
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

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};

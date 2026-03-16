
import { useEffect } from "react";

function MapView() {

  useEffect(() => {

    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -26.2041, lng: 28.0473 }, // Johannesburg
      zoom: 10,
    });

    const technicians = [
      { lat: -26.20, lng: 28.04 },
      { lat: -26.21, lng: 28.03 },
      { lat: -26.19, lng: 28.05 },
    ];

    technicians.forEach((tech) => {
      new google.maps.Marker({
        position: tech,
        map: map,
        title: "Technician",
      });
    });

  }, []);

  return <div id="map" style={{ height: "400px", width: "100%" }}></div>;
}

export default MapView;

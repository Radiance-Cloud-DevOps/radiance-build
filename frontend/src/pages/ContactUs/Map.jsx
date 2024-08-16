// Map.js
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';
// Import marker images
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Set default icon paths
    const DefaultIcon = L.icon({
      iconUrl: markerIcon,
      iconRetinaUrl: markerIconRetina,
      shadowUrl: markerShadow,
      iconSize: [25, 41], // size of the icon
      iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
      popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
      shadowSize: [41, 41] // size of the shadow
    });
    L.Marker.prototype.options.icon = DefaultIcon;

    const map = L.map(mapRef.current).setView([43.82874258433269, -79.64656580882884], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    L.marker([43.82874258433269, -79.64656580882884]).addTo(map)
      .bindPopup('38 Dunrobin Cres')
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapRef} style={{ height: '100%', width: '100%' }} />;
};

export default Map;

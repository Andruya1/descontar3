import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const customIcon = new L.Icon({
  iconUrl: 'https://i.postimg.cc/SKXwKRhb/logo-solo.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41],
  shadowAnchor: [12, 41]
});

const MapUpdater = ({ merchants }) => {
  const map = useMap();
  useEffect(() => {
    if (merchants.length > 0) {
      const bounds = L.latLngBounds(merchants.map(m => [m.lat, m.lng]));
      if (bounds.isValid()) {
        map.flyToBounds(bounds, { padding: [50, 50], maxZoom: 12 });
      }
    } else {
      map.flyTo([-40, -64], 4);
    }
  }, [merchants, map]);
  return null;
};

const InteractiveMap = ({ merchants }) => {
  const argentina_center = [-40, -64];

  return (
    <MapContainer center={argentina_center} zoom={4} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {merchants.map((merchant, index) => (
        <Marker key={index} position={[merchant.lat, merchant.lng]} icon={customIcon}>
          <Popup>
            <div className="font-sans">
              <h3 className="font-bold text-lg text-purple-700">{merchant.name}</h3>
              <p className="text-gray-600">{merchant.address}</p>
              <span className="inline-block bg-amber-200 text-amber-800 text-xs font-semibold mt-2 px-2.5 py-0.5 rounded-full">{merchant.category}</span>
            </div>
          </Popup>
        </Marker>
      ))}
      <MapUpdater merchants={merchants} />
    </MapContainer>
  );
};

export default InteractiveMap;
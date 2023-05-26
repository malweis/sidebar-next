"use client";
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import ReactDOMServer from 'react-dom/server';
import { BloodtypeOutlined } from '@mui/icons-material';
import 'leaflet/dist/leaflet.css';

function createCustomIcon() {
  return L.divIcon({
    html: ReactDOMServer.renderToStaticMarkup(
      <BloodtypeOutlined className='icono' />
    ),
    className: '',
    iconSize: [24, 24],
    iconAnchor: [12, 24],
  });
}

function Mapas() {
  const [locales, setLocales] = useState([]);

  useEffect(() => {
    fetch('http://192.168.16.90:8000/api/locales')
      .then((response) => response.json())
      .then((data) => setLocales(data));
  }, []);

  const position = [-25.306076, -57.625237];

  const customIcon = createCustomIcon();

  return (
      


    <div className="bg-rose-800 mapa w-full flex justify-center items-center">

      
      <MapContainer id="map" center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {Array.isArray(locales.data) && locales.data.length > 0 ? (
          locales.data.map((local) => (
            <Marker
              key={local.id}
              position={[local.latitud, local.longitud]}
              icon={customIcon}
            >
              <Popup>
                <div>
                  <h3>Dirección: {local.direccion}</h3>
                  <h4>Nombre de local: {local.local_donacion}</h4>

                  <p>
                    Horario: De {local.hora_apertura} a {local.hora_cierre}
                  </p>
                  <a
                    href={`https://www.google.com/maps?q=${local.latitud},${local.longitud}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </Popup>
            </Marker>
          ))
        ) : (
          <p>No hay locales disponibles.</p>
        )}
      </MapContainer>
    </div>
  );
}

export default Mapas;

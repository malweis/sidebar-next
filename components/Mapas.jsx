import React, { useRef, useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet';
import L from 'leaflet';
import ReactDOMServer from 'react-dom/server';
import { BloodtypeOutlined } from '@mui/icons-material';
import 'leaflet/dist/leaflet.css';

function createCustomIcon() {
  return L.divIcon({
    html: ReactDOMServer.renderToStaticMarkup(
      <BloodtypeOutlined className="icono" />
    ),
    className: '',
    iconSize: [24, 24],
    iconAnchor: [12, 24],
  });
}



function Mapas() {
  const [locales, setLocales] = useState([]);
  const mapRef = useRef();
  console.log(mapRef.current)
 

  useEffect(() => {
    fetch('http://192.168.16.90:8000/api/locales')
      .then((response) => response.json())
      .then((data) => setLocales(data));
  }, []);

  const position = [-25.306076, -57.625237];

  const customIcon = createCustomIcon();

  const handleMapClick = (e) => {
    const { latlng } = e;
    const map = mapRef.current;
    console.log(mapRef.current)
    if (map != null) {
      map.flyTo(latlng, map.getZoom());
    }
  };


  


  return (
    <div className="bg-rose-800 mapa w-full  grid grid-cols-3 grid-rows-2 gap-8">
      <div className='col-start-1 col-end-4  row-start-1 row-end-3 z-0'>
        <MapContainer id="map" ref={mapRef} center={position} zoom={13} scrollWheelZoom={true} >
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

      <div className=' row-start-2 row-end-3  col-start-2 col-end-3 z-10 bg-red-600 p-8 rounded-r-lg h-[20%] self-end' >
        <h1 className='text-white font-bold text-2xl'>Locales de donación</h1>

        <div className="button-container flex flex-col  justify-start gap-2 h-full hidden ">
           
          {Array.isArray(locales.data) && locales.data.length > 0 ? (
            locales.data.map((local) => (
              <button key={local.id} onClick={() => handleMapClick({ latlng: [local.latitud, local.longitud] })} className='flex justify-start  px-2 py-2 font-sans font-semibold tracking-wide rounded-2xl h-[30px]  w-full h-full bg-blue-500'>
              Ir a  {local.local_donacion}
            </button>
            ))
          ) : (
            <p>No hay locales disponibles.</p>
          )}
        </div>
      </div>
      <div className='  bg-red-600 row-start-2 row-end-3  col-start-1 col-end-4 z-20 w-full h-[6%] self-end'>
      aaaa
      </div>
    </div>
  );
}

export default Mapas;

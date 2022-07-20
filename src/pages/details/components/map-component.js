import {
  MapContainer,
  TileLayer,
  LayersControl,
  CircleMarker,
  Tooltip,
} from "react-leaflet";
import { latLngCenter } from "latitude-longitude";

import "leaflet/dist/leaflet.css";
import { NoSsr } from "@mui/material";

const { BaseLayer } = LayersControl;

export default function Component({ sensors }) {
  if (sensors.length === 0) return;

  const center = latLngCenter(sensors.map((s) => mapPosition(s.position)));

  return (
    <NoSsr>
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={center.zoom}
        scrollWheelZoom={true}
        style={{ height: "100vh", width: "80vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {renderSensors(sensors)}
        <LayersControl position="topright">
          <BaseLayer name="OpenStreetMap.Mapnik">
            <TileLayer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
          </BaseLayer>
        </LayersControl>
      </MapContainer>
    </NoSsr>
  );
}

function renderSensors(sensors) {
  return sensors.map((sensor, i) => (
    <CircleMarker
      key={`sensor${i}`}
      center={mapPosition(sensor.position)}
      radius={10}
    >
      <Tooltip>
        <p>
          {sensor.sensorId} [{sensor.status}]
        </p>
      </Tooltip>
    </CircleMarker>
  ));
}

function mapPosition(position) {
  const positionArray = position.split(",");
  return [parseFloat(positionArray[0]), parseFloat(positionArray[1])];
}

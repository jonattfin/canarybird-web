import {
  MapContainer,
  TileLayer,
  LayersControl,
  CircleMarker,
  Tooltip,
} from "react-leaflet";
import _ from "lodash";

import "leaflet/dist/leaflet.css";
import { NoSsr } from "@mui/material";
import { IDevice } from "../../../api/interfaces";

const { BaseLayer } = LayersControl;

export default function Component({ devices }: { devices: IDevice[] }) {
  if (devices.length === 0) 
    return <div>&nbsp;</div>;

  const [lat, lng, zoom] = mapPosition(devices[0].position);

  return (
    <NoSsr>
      <MapContainer
        center={[lat, lng]}
        zoom={zoom}
        scrollWheelZoom={true}
        style={{ height: "100vh", width: "80vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {renderDevices(devices)}
        <LayersControl position="topright">
          <BaseLayer name="OpenStreetMap.Mapnik">
            <TileLayer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
          </BaseLayer>
        </LayersControl>
      </MapContainer>
    </NoSsr>
  );
}

function renderDevices(devices: IDevice[]) {
  return devices.map((device, i) => {
    const [lat, long] = mapPosition(device.position);

    return (
      <CircleMarker key={`sensor${i}`} center={[lat, long]} radius={10}>
        <Tooltip>
          <p>
            {device.sensorId} [{device.status}]
          </p>
        </Tooltip>
      </CircleMarker>
    );
  });
}

function mapPosition(position: string) {
  const positionArray = position.split(",");
  return [parseFloat(positionArray[0]), parseFloat(positionArray[1])];
}

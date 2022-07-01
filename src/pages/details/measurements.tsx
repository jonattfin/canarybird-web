import AirIcon from "@mui/icons-material/Air";
import NoiseAwareIcon from "@mui/icons-material/NoiseAware";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import OpacityIcon from "@mui/icons-material/Opacity";
import CompressIcon from "@mui/icons-material/Compress";

export const Measurements = [
  {
    label: "PM10",
    type: "pm10",
    title: "Air Quality (PM10)",
    Icon: <AirIcon />,
  },
  {
    label: "PM2.5",
    type: "pm25",
    title: "Air Quality (PM2.5)",
    Icon: <AirIcon />,
  },
  {
    label: "Noise",
    type: "noise",
    title: "Noise (dBA)",
    Icon: <NoiseAwareIcon />,
  },
  {
    label: "Temperature",
    type: "temperature",
    title: "Temperature (C)",
    Icon: <DeviceThermostatIcon />,
  },
  {
    label: "Humidity",
    type: "humidity",
    title: "Humidity",
    Icon: <OpacityIcon />,
  },
  {
    label: "Pressure",
    type: "pressure",
    title: "Pressure (hPa)",
    Icon: <CompressIcon />,
  },
];

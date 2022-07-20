import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import DetailsComponent from "./details-component";
import { Measurements } from "./measurements";
import api from "../../api";
import { IDevice, IMeasurement } from "../../api/interfaces";

export default function Component() {
  const [measurements, setMeasurements] = useState<IMeasurement[]>([]);
  const [inProgressMeasurements, setInProgressMeasurements] = useState(false);

  const [devices, setDevices] = useState<IDevice[]>([]);
  const [inProgressDevices, setInProgressDevices] = useState(false);

  const [value, setValue] = useState(0);

  const handleChange = (newValue: number) => setValue(newValue);

  const router = useRouter();
  const { city } = router.query;

  useEffect(() => {
    if (!city) {
      return;
    }

    const fetchData = async () => {
      setInProgressDevices(true);
      const devices = await api.fetchDevices(`${city}`);
      setDevices(devices);
      setInProgressDevices(false);
    };

    fetchData();
  }, [value, city]);

  useEffect(() => {
    if (!city) {
      return;
    }

    const fetchData = async () => {
      setInProgressMeasurements(true);
      const measurements = await api.fetchMeasurements(
        `${city}`,
        Measurements[value].type
      );
      setMeasurements(measurements);
      setInProgressMeasurements(false);
    };

    fetchData();
  }, [value, city]);

  return (
    <DetailsComponent
      {...{
        measurements,
        inProgress: inProgressMeasurements || inProgressDevices,
        handleChange,
        value,
        city,
        devices,
      }}
    />
  );
}

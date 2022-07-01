import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import DetailsComponent from "./details-component";
import { Measurements } from './measurements';
import * as api from "../../api";

export default function Component() {
  const [data, setData] = useState([]);
  const [inProgressData, setInProgressData] = useState(false);

  const [sensors, setSensors] = useState([]);
  const [inProgressSensors, setInProgressSensors] = useState(false);

  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => setValue(newValue);

  const router = useRouter();
  const { city } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      setInProgressSensors(true);
      const data = await api.fetchSensors(city);
      setSensors(data);
      setInProgressSensors(false);
    };

    fetchData();
  }, [value, city]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setInProgressData(true);
  //     const data = await api.fetchDataFromServer(
  //       Measurements[value].type,
  //       city
  //     );
  //     setData(data);
  //     setInProgressData(false);
  //   };

  //   fetchData();
  // }, [value, city]);

  return (
    <DetailsComponent
      {...{
        data,
        inProgress: inProgressData || inProgressSensors,
        handleChange,
        value,
        city,
        sensors,
      }}
    />
  );
}

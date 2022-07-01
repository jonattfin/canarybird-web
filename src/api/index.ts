export async function fetchSensors(city: string) {
  const sensorsResponse = await fetch(`https://${city}.pulse.eco/rest/sensor`);
  const sensors = await sensorsResponse.json();

  return sensors
    .filter((sensor: any) => sensor !== undefined)
    .map(({ position, sensorId, status }: any) => {
      const positionArray = position.split(",");

      return {
        sensorId,
        status,
        position: [parseFloat(positionArray[0]), parseFloat(positionArray[1])],
      };
    });
}

export async function fetchDataFromServer(
  measurementType: string,
  city: string
) {
  const sensorsResponse = await fetch(`https://${city}.pulse.eco/rest/sensor`);
  const sensors = await sensorsResponse.json();

  const { from, to } = getDates();

  const points = [];
  for (var sensor of sensors) {
    const sensorId = sensor.sensorId;

    const sensorResponse = await fetch(
      `https://${city}.pulse.eco/rest/avgData/day?sensorId=${sensorId}&type=${measurementType}&from=${from}&to=${to}`
    );
    const sensorData = await sensorResponse.json();

    const data = sensorData.map((d: any) => {
      return {
        x: new Date(d.stamp),
        y: parseInt(d.value),
      };
    });

    points.push({ id: sensorId, data });
  }

  return { payload: { points } };
}

function getDates() {
  const from = getQueryDate(true);
  const to = getQueryDate();

  return { from, to };
}

function getQueryDate(lastYear = false) {
  const date = new Date();

  const cDay = date.getDate().toString().padStart(2, "0");
  const cMonth = (date.getMonth() + 1).toString().padStart(2, "0");
  let cYear = date.getFullYear();
  if (lastYear) {
    cYear = cYear - 1;
  }

  return `${cYear}-${cMonth}-${cDay}T12:00:00%2b01:00`;
}

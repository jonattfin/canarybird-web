export interface ILocation {
  country: string;
  cities: string[];
}

export interface IDevice {
  position: string;
  sensorId: string;
  status: string;
}

export interface IMeasurement {
  id: string;
  data: {
    x: Date;
    y: number;
  }[];
}

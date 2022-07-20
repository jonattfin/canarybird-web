import { resourceLimits } from "worker_threads";
import { IDevice, ILocation, IMeasurement } from "./interfaces";

class Api {
  private environment!: IEnvironment;
  constructor(environment: IEnvironment) {
    this.environment = environment;
  }

  async fetchLocations(): Promise<ILocation[]> {
    const res = await fetch(`${this.environment.baseUrl}/cities`);
    const results = (await res.json()) as ILocation[];
    return results;
  }

  async fetchDevices(city: string): Promise<IDevice[]> {
    const res = await fetch(`${this.environment.baseUrl}/devices/${city}`);
    const results = (await res.json()) as IDevice[];
    return results;
  }

  async fetchMeasurements(
    city: string,
    measurementType: string
  ): Promise<IMeasurement[]> {
    const res = await fetch(
      `${this.environment.baseUrl}/measurements?city=${city}&measurementType=${measurementType}`
    );
    const results = (await res.json()) as IMeasurement[];
    return remapData(results);
  }
}

interface IEnvironment {
  baseUrl: string;
}

class DevEnvironment implements IEnvironment {
  baseUrl: string;

  constructor() {
    this.baseUrl = "http://localhost:8080";
  }
}

class ProdEnvironment implements IEnvironment {
  baseUrl: string;

  constructor() {
    this.baseUrl = "https://canarybird.herokuapp.com";
  }
}

const api = new Api(new ProdEnvironment());
export default api;


function remapData(measurements: IMeasurement[]) {
  return measurements.map((measurement) => {
    const mappedData = measurement.data.map((data) => {
      return {
        x: new Date(data.x),
        y: data.y,
      };
    });

    return {
      data: mappedData,
      id: measurement.id,
    };
  });
}

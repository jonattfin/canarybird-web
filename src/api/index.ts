class Api {
  private environment!: IEnvironment;
  constructor(environment: IEnvironment) {
    this.environment = environment;
  }

  async fetchLocations() {
    const res = await fetch(`${this.environment.baseUrl}/cities`);
    return res.json();
  }

  async fetchDevices(city: string) {
    const res = await fetch(`${this.environment.baseUrl}/devices/${city}`);
    return res.json();
  }

  async fetchMeasurements(city: string, measurementType: string) {
    const url = `${this.environment.baseUrl}/measurements?city=${city}&measurementType=${measurementType}`;
    console.log(url);
    const res = await fetch(url);
    return res.json();
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

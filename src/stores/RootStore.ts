import { makeObservable } from "mobx";
import CarStore from "./CarStore";

export class RootStore {
    carStore: CarStore;
  
    constructor() {
      this.carStore = new CarStore();

      makeObservable(this, {
        carStore: true
      })
    }
}
import { Car } from "./Car"

declare module "./Car" {
    interface Car {
        year: number,
        getEngineType(value: string): void
    }
}

Car.prototype.getEngineType = (value: string) => console.log(`The engine type is ${value}`)

export default Car;


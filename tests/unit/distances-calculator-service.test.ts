import { calculateDistance, toRadius } from "services/distances-calculator-service";
import { trip } from "../factories/miles-service";

describe("calculateMiles", () => {
    it("should return calculated distance in miles", async () => {
        const distance = calculateDistance(trip.origin,trip.destination)
        expect(distance).toEqual(3936);
    })

    it("should return calculated distance in km", async () => {

        trip.miles = true
        const distance = calculateDistance(trip.origin,trip.destination,trip.miles)
        expect(distance).toEqual(2446);
    })
});
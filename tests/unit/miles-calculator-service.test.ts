import { calculateMiles } from "services/miles-calculator-service"
import { trip } from "../factories/miles-service"
import * as calculate_distance from "../../src/services/distances-calculator-service"
import * as calculator_service from "../../src/services/miles-calculator-service"
import { calculateDistance } from "services/distances-calculator-service"
import { AffiliateStatus, ServiceClass } from "protocols"

describe("calculateMiles", () => {
    it("should return calculated miles", async () => {
        jest.spyOn(calculate_distance, "calculateDistance").mockImplementationOnce((): any => {
            return (100)
        })

        const miles = calculateMiles(trip)
        expect(miles).toEqual(100);
    })

    it("should return calculated miles with birthday", async () => {
        jest.spyOn(calculate_distance, "calculateDistance").mockImplementationOnce((): any => {
            return (100)
        })
        trip.date="2024-05-03"

        const miles = calculateMiles(trip)
        expect(miles).toEqual(110);
    })

    it("should return calculated miles equal 0 - usingMiles === true ", async () => {
        trip.miles=true

        const miles = calculateMiles(trip)
        expect(miles).toEqual(0);
    })
})
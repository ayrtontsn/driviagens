import supertest from "supertest";
import app from "../../src/app";
import { generateMilesForTrip, getMilesFromCode } from "services/miles-service";
import * as milesCalculate from "../../src/services/miles-calculator-service";
import * as milesRepository from "../../src/repositories/miles-repository";
import { miles, trip } from "../factories/miles-service";

const api = supertest(app);

describe("get /miles", () => {

    it("should return miles from code ", async () => {
        jest.spyOn(milesRepository, "findMiles").mockImplementationOnce((): any => {
            return (miles)
        })

        const get_miles = await getMilesFromCode("ABC124")
        expect(get_miles).toEqual({
            id: 1,
            code: "ABC124",
            miles: 100
        });
    });

    it("should throw an error when miles is not found - not_found", () => {
        jest.spyOn(milesRepository, "findMiles").mockResolvedValueOnce(null)

        const promise = getMilesFromCode("ABC124")
        expect(promise).rejects.toEqual({
            type: "not_found",
            message: `Miles not found for code ${"ABC124"}`
          });
    });

})

describe("post /miles", () => {
    it("should return miles generate", async () => {
        jest.spyOn(milesRepository, "findMiles").mockImplementationOnce((): any => {
            return ("")
        })
        jest.spyOn(milesRepository, "saveMiles").mockImplementationOnce((): any => {
            return ("")
        })
        jest.spyOn(milesCalculate, "calculateMiles").mockImplementationOnce((): any => {
            return (100)
        })

        const post_trip = await generateMilesForTrip(trip)
        expect(post_trip).toEqual(100);
    });

    it("should throw an error when miles is found - conflict", () => {
        jest.spyOn(milesRepository, "findMiles").mockResolvedValueOnce(
            miles
        )

        const promise = generateMilesForTrip(trip)
        expect(promise).rejects.toEqual({
            type: "conflict",
            message: `Miles already registered for code ${trip.code}`
        });
    });
})
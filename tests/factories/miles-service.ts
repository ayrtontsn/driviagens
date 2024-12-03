import { AffiliateStatus, ServiceClass } from "protocols"

export const miles = {
    id: 1,
    code: "ABC124",
    miles: 100
}

export const trip = {
    code: "ABC124",
    origin: {
      lat: 40.7128,
      long: -74.006
    },
    destination: {
      lat: 34.0522,
      long: -118.2437
    },
    miles: false,
    plane: "Boeing 747",
    service: ServiceClass.ECONOMIC,
    affiliate: AffiliateStatus.BRONZE,
    date: "2024-07-17"
  }
import { SirenService } from "./siren.service";

let sirenService: SirenService;

beforeAll(() => {
  sirenService = new SirenService()
})

describe("SirenService", () => {

  describe("checkSirenValidity tests" , () => {

    it("should return false when we pass a string with a length not equals to 9", () => {
      expect(sirenService.checkSirenValidity("17188102")).toBeFalsy()
    })

    it("should return false when we pass a non string number argument", () => {
      expect(sirenService.checkSirenValidity("abcdedghi")).toBeFalsy()
    })

    it("should return false when we pass an invalid siren number", () => {
      expect(sirenService.checkSirenValidity("732829420")).toBeFalsy()
    })

    it("should return true when we pass an valid siren number", () => {
      expect(sirenService.checkSirenValidity("732829320")).toBeTruthy()
    })

  })

  describe("computeFullSiren test" , () => {

    it("should return the full siren number when we pass the siren without the control number", () => {
      expect(sirenService.computeFullSiren("73282932")).toBe("732829320")
    })

  })

})
